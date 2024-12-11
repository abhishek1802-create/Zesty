import React, {useState} from "react";
import ItemList from "../ItemList/ItemList";

const RestaurantCategory = ({ data, setShowIndex, showItems }) => {
  
  const handleClick = () => {
    setShowIndex();
  }

  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
      {/* Header */}
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-bold">
          {data?.title} ({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {/* Body */}
      {showItems && <ItemList itemCards={data?.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
