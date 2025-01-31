import React, { useState } from "react";
import { FaCartPlus, FaSearch, FaUser } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { ShoppingBag, Trash } from "lucide-react";
import "./style/navbar.css";
import logo from "../images/logo.png";

const Navbar = ({ Search, cart, removeFromCart }) => {
  const navigate = useNavigate();
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleSearch = () => setIsSearchVisible(!isSearchVisible);
  const toggleCart = () => setIsCartVisible(!isCartVisible);

  function handelSearch(e) {
    setSearchQuery(e.target.value);
    Search(e.target.value);
  }
  const NavigateTOCard = () => {
    navigate("/card")
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
        <div className="cart-icon-container" onClick={toggleCart}>
          <FaCartPlus className="icon" />
          {Array.isArray(cart) && cart.length > 0 && (
            <span className="cart-count">{cart.length}</span>
          )}
        </div>
      </div>
      {isCartVisible && (
        <div className="shopping-cart">
          <div className="shopping-cart-header">
            <h1>Shopping Cart</h1>
            <ShoppingBag className="ShoppingBag" onClick={toggleCart} />
          </div>
          <div className="shopping-cart-container">
            {Array.isArray(cart) && cart.length > 0 ? (
              cart.map((item, index) => (
                <div key={index} className="shopping-cart-element">
                  <img
                    src={`http://localhost:8000/storage/${item.image}`}
                    alt={item.name}
                  />
                  <p>{item.name}</p>
                  <p>{item.price} dh</p>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(index)}
                  >
                    <Trash color="#B88E2F" />
                  </button>
                </div>
              ))
            ) : (
              <p className="empty-cart">Your cart is empty.</p>
            )}
          </div>
          {cart.length > 0 && (
            <>
              <div className="shopping-totale">
                <h3>Subtotal :</h3>
                <p>
                  {cart
                    .reduce((acc, item) => acc + Number(item.price), 0)
                    .toFixed(2)}{" "}
                  dh
                </p>
              </div>
              <hr></hr>
              <div className="shopping-buttons">
                <button onClick={NavigateTOCard}>Cart</button>
                <button>Check-out</button>
              </div>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
