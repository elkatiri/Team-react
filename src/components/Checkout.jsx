import React, { useState } from "react";
import "./style/Checkout.css";
import Navbar from "./navbar";
import Footer from "./footer";
import BfrFooter from "./bfr_footer";
import GR_checkout from "../images/GR_chechout.png";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "./cartSlice";

function Checkout() {
  const [selectedPayment, setSelectedPayment] = useState("");
  const cartItems = useSelector((state) => state.cart); // Get cart items from store
  const dispatch = useDispatch();

  const handlePaymentChange = (method) => {
    setSelectedPayment(method);
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <Navbar />
      <div className="checkout_bg">
        <div className="center_checkout">
          <img src={GR_checkout} alt={GR_checkout} />
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
              <Link to="/check-out">Checkout</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="checkOut_container">
        {/* Billing Details Section */}
        <div className="billing-details">
          <h1>Billing Details:</h1>
          <div className="name-section">
            <div className="first">
              <label>First Name</label>
              <input type="text" />
            </div>
            <div className="last">
              <label>Last Name</label>
              <input type="text" />
            </div>
          </div>
          <div className="company-section">
            <label>Company Name (Optional)</label>
            <input type="text" />
          </div>
          <div className="country-section">
            <label>Country / Region</label>
            <select>
              <option value="Agadir">Agadir</option>
              <option value="Marrakech">Marrakech</option>
              <option value="Rabat">Rabat</option>
              <option value="Casablanca">Casablanca</option>
              <option value="Fes">Fes</option>
            </select>
          </div>
          <div className="address-section">
            <label>Street Address</label>
            <input type="text" />
          </div>
          <div className="city-section">
            <label>Town / City</label>
            <input type="text" />
          </div>
          <div className="code-section">
            <label>Zip Code</label>
            <input type="text" />
          </div>
          <div className="phone-section">
            <label>Phone</label>
            <input type="text" />
          </div>
          <div className="email-section">
            <label>Email Address</label>
            <input type="email" />
          </div>

          <div className="addional-info-section">
            <textarea rows={4} placeholder="Additional information"></textarea>
          </div>
        </div>

        {/* Payment Info Section */}
        <div className="payement-info-section">
          {/* Product Section */}
          <div className="product-section">
            <div className="row">
              <div className="column">
                <h2>Product</h2>
                <h2>Subtotal</h2>
              </div>
            </div>
            {cartItems.map((item) => (
              <div key={item.id} className="row">
                <div className="column">
                  <label>
                    {item.name} x {item.quantity}
                  </label>
                  <span>
                    {(item.price * item.quantity).toLocaleString()} Dh
                  </span>
                </div>
              </div>
            ))}
            <div className="row">
              <div className="column">
                <label>Subtotal</label>
                <span>{total.toLocaleString()} Dh</span>
              </div>
            </div>
            <div className="row">
              <div className="column">
                <label>Total</label>
                <span>{total.toLocaleString()} Dh</span>
              </div>
            </div>
          </div>

          {/* Payment Section */}
          <div className="payment-section">
            {selectedPayment && (
              <div className="selected-payment">
                <input type="radio" checked readOnly />
                <span>{selectedPayment}</span>
              </div>
            )}
            <p>
              Make your payment directly into our bank account or pay cash on
              delivery.
            </p>
            <label>
              <input
                type="radio"
                name="payment"
                onChange={() => handlePaymentChange("Direct Bank Transfer")}
                checked={selectedPayment === "Direct Bank Transfer"}
              />
              Direct Bank Transfer
            </label>
            <label>
              <input
                type="radio"
                name="payment"
                onChange={() => handlePaymentChange("Cash on Delivery")}
                checked={selectedPayment === "Cash on Delivery"}
              />
              Cash on Delivery
            </label>

            <p className="privacy-notice">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our
              <span> privacy policy. </span>
            </p>
            <button className="place-order-button">Place Order</button>
          </div>
        </div>
      </div>
      <BfrFooter />
      <Footer />
    </div>
  );
}

export default Checkout;
