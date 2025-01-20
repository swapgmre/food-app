import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/userContext.js";
import { useSelector } from "react-redux";


const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  //Subscribing to the store using a selctor
  const cartItems = useSelector((store) => store.cart.items);


  return (
    <div className="flex justify-between items-center bg-gray-100 shadow-md">
      <div className="">
        <img className="w-20" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex p-2 m-2 gap-8 text-lg">
          <li className="cursor-pointer">Online Status:{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="cursor-pointer"><Link to="/">Home</Link></li>
          <li className="cursor-pointer"><Link to="/about">About Us</Link></li>
          <li className="cursor-pointer"> <Link to="/contact" >Contact Us</Link></li>
          <li className="cursor-pointer"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4 font-bold text-xl cursor-pointer"><Link to="/cart">Cart - ({cartItems.length} items)</Link></li>
          <button className="cursor-pointer" onClick={() => {
            btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
          }}>{btnNameReact}</button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  )
};


export default Header;