import React, { useState } from 'react';
import './style/card.css';
import { ChevronRight, Trash } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from "./navbar";
import Footer from "./footer";
import BfrFooter from './bfr_footer';
import GR_card from "../images/GR_card.png";


// Modal Component
const ConfirmModal = ({ isVisible, onCancel, onConfirm }) => {
  if (!isVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Are you sure you want to remove this item?</h3>
        <div className="modal-buttons">
          <button onClick={onCancel} className="modal-button cancel">No</button>
          <button onClick={onConfirm} className="modal-button confirm">Yes</button>
        </div>
      </div>
    </div>
  );
};

const Card = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Asgaard sofa",
      price: 250000,
      quantity: 1,
      image: "https://i.pinimg.com/736x/ac/9c/c6/ac9cc61a3e5fe7ae05c380cadb32bf18.jpg"
    },
    {
      id: 2,
      name: "Asgaard sofa",
      price: 250000,
      quantity: 1,
      image: "https://i.pinimg.com/736x/ac/9c/c6/ac9cc61a3e5fe7ae05c380cadb32bf18.jpg"
    },
    {
      id: 3,
      name: "Asgaard sofa",
      price: 250000,
      quantity: 1,
      image: "https://i.pinimg.com/736x/ac/9c/c6/ac9cc61a3e5fe7ae05c380cadb32bf18.jpg"
    },
    {
      id: 3,
      name: "Asgaard sofa",
      price: 250000,
      quantity: 1,
      image: "https://i.pinimg.com/736x/ac/9c/c6/ac9cc61a3e5fe7ae05c380cadb32bf18.jpg"
    },
    {
      id: 3,
      name: "Asgaard sofa",
      price: 250000,
      quantity: 1,
      image: "https://i.pinimg.com/736x/ac/9c/c6/ac9cc61a3e5fe7ae05c380cadb32bf18.jpg"
    },
    {
      id: 3,
      name: "Asgaard sofa",
      price: 250000,
      quantity: 1,
      image: "https://i.pinimg.com/736x/ac/9c/c6/ac9cc61a3e5fe7ae05c380cadb32bf18.jpg"
    },
    {
      id: 4,
      name: "Asgaard sofa",
      price: 250000,
      quantity: 1,
      image: "https://i.pinimg.com/736x/ac/9c/c6/ac9cc61a3e5fe7ae05c380cadb32bf18.jpg"
    }
  ]);
  const [showModal, setShowModal] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null);

  const handleRemoveItem = (id) => {
    setItemToRemove(id);
    setShowModal(true);
  };

  const confirmRemoveItem = () => {
    setCartItems(cartItems.filter(item => item.id !== itemToRemove));
    setShowModal(false);
  };

  const cancelRemoveItem = () => {
    setShowModal(false);
  };

  const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <>
      <Navbar />
      <div class="card_bg">
        <div class="center_card">
          <img src={GR_card} alt={GR_card} />
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <span>
              <ChevronRight />
            </span>
            <li>
              <Link to="/check-out">Card</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="cart-container">
        <div>
          <table className="cart-table" >
            <thead>
              <tr className="cart-header">
                <th className="cart-header-item">Product</th>
                <th className="cart-header-item">Price</th>
                <th className="cart-header-item">Quantity</th>
                <th className="cart-header-item">Subtotal</th>
                <th className="cart-header-item">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr className="cart-item" key={item.id}>
                  <td className="cart-product">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="product-image"
                    />
                    <span className="product-name">{item.name}</span>
                  </td>
                  <td className="product-price">
                    {item.price.toLocaleString()} <small>Dh</small>
                  </td>
                  <td className="quantity-selector">
                    <span>{item.quantity}</span>
                  </td>
                  <td className="subtotal">
                    Rs. {(item.price * item.quantity).toLocaleString()}
                  </td>
                  <td>
                    <button
                      className="remove-item"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <Trash color="#B88E2F" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="cart-totals">
          <h2 className="totals-header">Cart Totals</h2>
          <div className="totals-content">
            <div className="total-row">
              <span className="total-label">Subtotal</span>
              <span className="total-value"> {total.toLocaleString()} Dh</span>
            </div>
            <div className="total-row">
              <span className="total-label">Total</span>
              <span className="total-value highlight">
                {total.toLocaleString()} Dh
              </span>
            </div>
            <button className="checkout-button">Check Out</button>
          </div>
        </div>

        {/* Confirmation Modal */}
        <ConfirmModal
          isVisible={showModal}
          onCancel={cancelRemoveItem}
          onConfirm={confirmRemoveItem}
        />
      </div>
      <BfrFooter />
      <Footer />
    </>
  );
};

export default Card;
