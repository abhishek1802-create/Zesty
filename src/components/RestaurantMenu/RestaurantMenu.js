import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useRestaurantMenu from '../../hooks/useRestaurantMenu';

const RestaurantMenu = () => {
  const {resId} = useParams();
  
  const resMenu = useRestaurantMenu(resId);
  console.log("resMenu:::",resMenu);

  if(resMenu === null) return (<h1>Loading...</h1>)

  const resData = resMenu?.cards[2]?.card?.card?.info;

  console.log("resData:::", resData);

  return (
    <div>
      RestaurantMenu Page
    </div>
  )
}

export default RestaurantMenu
