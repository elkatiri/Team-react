import React from "react";
import { FaCartPlus, FaSearch, FaUser } from "react-icons/fa";
import "./navbar.css";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <h1>Furniro</h1>
      </div>
      <ul className="menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#shop">Shop</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="icons">
        <FaUser className="icon" />
        <FaSearch className="icon" />
        <FaCartPlus className="icon" />
      </div>
    </nav>
  );
};

export default Navbar;
