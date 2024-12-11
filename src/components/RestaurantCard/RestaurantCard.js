import { CDN_URL } from "../../../utils/constants";
import logoImage from "../../../Assets/images.png"

const RestaurantCard = ({resData}) => {
    const {name, avgRating, cuisines, costForTwo, cloudinaryImageId} = resData?.info;
    const resImageURL = `${CDN_URL}${cloudinaryImageId}`;
    const resImage = cloudinaryImageId ? resImageURL : logoImage;

    return (
      <div className="w-full bg-white rounded-xl p-4 mb-1 shadow-md hover:border-s-black">
        <img 
          src={resImage} 
          alt="Restaurant Image" 
          className="w-full h-[180px] object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-800 truncate mb-2">
          {name}
        </h3>
        <h4 className="text-sm text-gray-600 truncate mb-2">
          {cuisines.join(', ')}
        </h4>
        <h4 className="text-sm font-medium text-green-600 mb-2">
          ★ {avgRating ? avgRating : "4.0"} stars
        </h4>
        <h4 className="text-sm text-gray-600">
          {costForTwo}
        </h4>
      </div>
    );
};

export default RestaurantCard;

// Higher order component
// Input - RestaurantCard => RestaurantCardPromoted

export const withPromotedLable = (RestaurantCard) =>{
  return (props) =>{
     return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
     )
  }
}
