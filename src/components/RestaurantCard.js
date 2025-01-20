import React, { useContext } from "react";
import { CDN_URL } from "../utils/constants.js";
import UserContext from "../utils/userContext.js";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { loggedInUser } = useContext(UserContext);


  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData?.info;
  const { deliveryTime } = resData?.info?.sla;

  return (
    <div data-testid="resCard" className="bg-gray-100 m-4 p-4 w-[250px] h-max transition duration-300 ease-in-out hover:bg-gray-200 hover:shadow-lg hover:scale-105 relative">
      <img src={CDN_URL + cloudinaryImageId} className="res-logo" />
      <h3 className="font-bold text-black">{name}</h3>
      <h4 className="text-gray-600">{cuisines.join(", ")}</h4>
      <h4 className="text-gray-600">{avgRating}</h4>
      <h4 className="text-gray-600">{deliveryTime} minutes</h4>
      <h4 className="font-bold">{loggedInUser}</h4>
      <h4 className="text-gray-600">{costForTwo}</h4>
    </div>
  );
};

// Higher Order Component Restaurant Card with enhanced features.

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    const { resData } = props;
    const header = resData?.info?.aggregatedDiscountInfoV3?.header;

    return (
      <div className="relative">
        {/* The label now stays on top of the card */}
        <label className="absolute top-2 left-2 z-10 bg-yellow-200 m-2 p-2 rounded-lg">
          {header}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
