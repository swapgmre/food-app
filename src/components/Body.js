import React, { useEffect, useState, useContext } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer from "./Shimmer"
import UserContext from "../utils/userContext.js";



const Body = () => {

  const [listOfRestaurant, setListOfRestuarant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    setListOfRestuarant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (<div>
      <h1>Looks like you're offline!! </h1>
      <h1>Please Check you internet connection.</h1>
    </div>)

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurant.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4 flex items center">
          <input type="text" data-testid="searchInput" className="border-solid border-black" value={searchText} onChange={(e) => { setSearchText(e.target.value); }} />
          <button className="px-4 bg-gray-300 mx-2 rounded-md" onClick={() => {
            const filteredRestaurant = listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredRestaurant(filteredRestaurant);
          }}>Search</button>
        </div>
        <div className="m-4 p-4">
          <button className="px-4 bg-gray-300 rounded-md" onClick={() => {
            const filteredList = listOfRestaurant.filter((res) => res?.info?.avgRating > 4.5);
            setFilteredRestaurant(filteredList);
          }}>Top Rated Restaurants</button>
          <label className="mx-10 p-2">UserName</label>
          <input className="border border-black" value={loggedInUser} onChange={(e) => setUserName(e.target.value)}></input>
        </div>
      </div>
      <div className="restaurant-container flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (

          <Link to={`/restaurants/${restaurant.info.id}`} key={restaurant.info.id}>
            {
              restaurant.info.aggregatedDiscountInfoV3?.header ?
                (< RestaurantCardPromoted resData={restaurant} />) : (<RestaurantCard resData={restaurant?.info} />)
            }
          </Link>
        ))}
      </div>
    </div >
  )
}

export default Body;