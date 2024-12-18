import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../hooks/useRestaurantMenu";
import RestaurantCategory from "../RestaurantCategory/RestaurantCategory";
import MenuShimmer from "../MenuShimmer/MenuShimmer";

const RestaurantMenu = () => {

  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();

  const resMenu = useRestaurantMenu(resId);

  if (resMenu === null) return <MenuShimmer/>;

  const resDetails = resMenu?.cards[2]?.card?.card?.info;

  const categories =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  
  return (
    <div className="text-center"> 
      {categories &&
        categories.map((category, index) => (
          <RestaurantCategory 
          key={index} 
          data={category?.card?.card} 
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
          />))}
    </div>
  );
};

export default RestaurantMenu;
