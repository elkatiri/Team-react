import React, { useState } from "react";
import { FaCartPlus, FaSearch, FaUser } from "react-icons/fa";
import "./style/navbar.css";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = ({ Search }) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  function handelSearch(e) {
    const query = e.target.value;
    setSearchQuery(query);
    Search(query); 
  }

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Furniro Logo" />
        <h1>Furniro</h1>
      </div>
      <nav>
        <ul className="menu">
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <div className="icons">
        <NavLink to="/auth" aria-label="User Account">
          <FaUser className="icon" />
        </NavLink>
        <div className="search-container">
          <FaSearch
            className="icon"
            aria-label="Search"
            onClick={toggleSearch}
          />
          {isSearchVisible && (
            <input
              type="text"
              className="search-input"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={handelSearch}
            />
          )}
        </div>
        <FaCartPlus className="icon" aria-label="Shopping Cart" />
      </div>
    </nav>
  );
};

export default Navbar;
