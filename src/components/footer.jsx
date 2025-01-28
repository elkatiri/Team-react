import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="brand">
          <h3 className="brand-title">Funiro.</h3>
          <p className="address">
            400 University Drive Suite 200 Coral Gables,<br />
            FL 33134 USA
          </p>
        </div>

        <div className="section">
          <h4 className="section-title">Links</h4>
          <ul className="list">
            <li className="list-item"><a href="/" className="link">Home</a></li>
            <li className="list-item"><a href="/shop" className="link">Shop</a></li>
            <li className="list-item"><a href="/about" className="link">About</a></li>
            <li className="list-item"><a href="/contact" className="link">Contact</a></li>
          </ul>
        </div>

        <div className="section">
          <h4 className="section-title">Help</h4>
          <ul className="list">
            <li className="list-item"><a href="/payment" className="link">Payment Options</a></li>
            <li className="list-item"><a href="/returns" className="link">Returns</a></li>
            <li className="list-item"><a href="/privacy" className="link">Privacy Policies</a></li>
          </ul>
        </div>

        <div className="section">
  <h4 className="section-title">Newsletter</h4>
  <div className="newsletter">
    <input
      type="email"
      placeholder="Enter Your Email Address"
      className="input"
    />
    <button className="button">SUBSCRIBE</button>
  </div>
</div>

      <div className="footer-bottom">
        <p>2025 Funiro. All rights reserved</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
