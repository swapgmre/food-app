import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";


const Body = () => {

  const [listOfRestaurant, setListOfRestuarant] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {
          const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4);
          setListOfRestuarant(filteredList);
        }}>Top Rated Restaurants</button>
      </div>
      <div className="restaurant-container">
        {
          listOfRestaurant.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)
        }
      </div>
    </div>
  )
}

export default Body;