import React from "react";
import { IoLogoFoursquare } from "react-icons/io5";
import { FaUserCheck,FaSearch,FaRegHeart,FaShoppingCart } from "react-icons/fa";


export default function Navbar() {
  return (
    <>
      <header className="navbar container-fluid">
        <div className="logo">
          <span className="logo-icon">
            <IoLogoFoursquare />
          </span>
          Furiro
        </div>

        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/Blog">Blog</a>
          <a href="/contact">Contact</a>
        </nav>

        <div className="nav-icons">
            <span><FaUserCheck /></span>
            <span><FaSearch /></span>
            <span><FaRegHeart /></span>
            <span><FaShoppingCart /></span>
        </div>
      </header>
    </>
  );
}
