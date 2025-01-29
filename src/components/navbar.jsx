import React from "react";
import { FaCartPlus, FaSearch, FaUser } from "react-icons/fa";
import "./style/navbar.css";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
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
        <NavLink to="/auth">
          <FaUser className="icon" />
        </NavLink>
        <FaSearch className="icon" />
        <FaCartPlus className="icon" />
      </div>
    </nav>
  );
};

export default Navbar;
