import { useEffect, useState } from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import ShimmerUI from "../ShimmerUI/ShimmerUI";
import { FiFilter } from 'react-icons/fi';
import { BiSearch } from 'react-icons/bi';
import { RES_API } from "../../../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
    const [listOfRestaurants, setListofRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchText, setSearchText] = useState("");
    
    const fetchData = async () => {
        try {
            const Response = await fetch(RES_API);
            const jsonData = await Response.json();
            setListofRestaurants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRestaurants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const shimmerCards = Array(8).fill(null);

    const filterTopRestaurants = () => {
        const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.2);
        setFilteredRestaurants(filteredList);
    }

    const searchRestaurants = () => {
        const searchedList = listOfRestaurants.filter((res) => 
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredRestaurants(searchedList);
    }
    console.log("listOfRestaurants",listOfRestaurants);
    return (
        <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8 mt-3">
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
                {/* Search Box */}
                <div className="flex w-full sm:w-auto gap-2">
                    <input
                        type="text"
                        placeholder="Search for restaurants"
                        onChange={(event) => setSearchText(event.target.value)}
                        className="w-full sm:w-[350px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                    />
                    <button 
                        onClick={searchRestaurants}
                        className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 flex items-center gap-2"
                    >
                        <BiSearch /> Search
                    </button>
                </div>

                {/* Filter Button */}
                <button 
                    onClick={filterTopRestaurants}
                    className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center gap-2"
                >
                    <FiFilter /> Top Rated
                </button>
            </div>

            {/* Restaurant Cards Grid */}
            {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {shimmerCards.map((_, index) => (
                        <ShimmerUI key={index} />
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredRestaurants && filteredRestaurants.map((restaurant) => (
                        <Link 
                            key={restaurant.info.id}
                            to={"/restaurant/" + restaurant.info.id}
                            className="block hover:shadow-lg transition-shadow duration-200"
                        >
                            <RestaurantCard resData={restaurant} />
                        </Link>
                    ))}
                </div>
            )}

            {/* No Results Message */}
            {!isLoading && filteredRestaurants?.length === 0 && (
                <div className="text-center py-10">
                    <h2 className="text-xl text-gray-600">No restaurants found</h2>
                </div>
            )}
        </div>
    );
};

export default Body;
