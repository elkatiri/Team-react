import React, { useEffect, useState } from 'react';
import { Star, Facebook, Linkedin, Twitter, ChevronRight } from 'lucide-react';
import './style/productdetails.css';
import Navbar from './navbar';
import Footer from './footer';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('purple');
  const [activeTab, setActiveTab] = useState('description');

  const colors = [
    { id: "purple", value: "#6B4CE6" },
    { id: "black", value: "#000000" },
    { id: "brown", value: "#964B00" },
    { id: "white", value: "#968f8f" },
    { id: "red", value: "#b50000" },
    { id: "green", value: "#355c3e" },
    { id: "pink", value: "#FFC0CB" },
  ];

  const sizes = ['S', 'M', 'L'];
useEffect(() => {
  const fetchProduct = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  fetchProduct();
}, [id]);

  return (
    <div>
      <div className="main-nav">
        <Navbar />
      </div>
      <div className="BreadcrumbNav">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <span>
              <ChevronRight />
            </span>
            <li>
              <Link to="/shop">Products</Link>
            </li>
            <span>
              <ChevronRight />
            </span>
            <li>
              <Link to="/productdetails" className="product-name">
                {product.name}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="product-details">
        <div className="product-image">
          <img
            src={`http://localhost:8000/storage/${product.image}`}
            alt={product.name}
          />
        </div>

        <div className="product-info">
          <h1>{product.name}</h1>
          <div className="price">{product.price} DH</div>

          <div className="rating">
            {Array.from({ length: 5 }, (_, index) => (
              <Star
                key={index}
                className="star"
                fill="#FFC107"
                color="#FFC107"
                size={20}
              />
            ))}
            <span className="review-count">(5 Customer Review)</span>
          </div>

          <p className="description">
            {product.description}
          </p>

          <div className="options">
            <div className="colors">
              <span className="label">Color:</span>
              <div className="color-options">
                {colors.map((color) => (
                  <button
                    key={color.id}
                    className={`color-btn ${
                      selectedColor === color.id ? "selected" : ""
                    }`}
                    style={{ backgroundColor: color.value }}
                    onClick={() => setSelectedColor(color.id)}
                  />
                ))}
              </div>
            </div>

            <div className="sizes">
              <span className="label">Size:</span>
              <div className="size-options">
                {sizes.map((size) => (
                  <button key={size} className="size-btn">
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="quantity">
              <span className="label">Quantity:</span>
              <div className="quantity-selector">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  -
                </button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>
          </div>

          <div className="actions">
            <button className="add-to-cart">Add To Cart</button>
          </div>
          <div className="social-share">
            <span>Share:</span>
            <div className="share-buttons">
              <button className="share-btn">
                <Facebook size={20} />
              </button>
              <button className="share-btn">
                <Linkedin size={20} />
              </button>
              <button className="share-btn">
                <Twitter size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="product-tabs">
          <div className="tab-buttons">
            <button
              className={`tab-btn ${
                activeTab === "description" ? "active" : ""
              }`}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
            <button
              className={`tab-btn ${
                activeTab === "additional" ? "active" : ""
              }`}
              onClick={() => setActiveTab("additional")}
            >
              Additional Information
            </button>
            <button
              className={`tab-btn ${activeTab === "reviews" ? "active" : ""}`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews (5)
            </button>
          </div>

          <div className="tab-content">
            {activeTab === "description" && (
              <div className="description-content">
                <p>
                  Embodying the raw, wayward spirit of rock 'n' roll, the Killam
                  parlor sofa chair speaks against these the standardizable look
                  and sound of identical, package-tour bands and takes the show
                  on the road.
                </p>
                <p>
                  Weighing in under 7 pounds, the Killam is a lightweight piece
                  of vintage styled engineering. Setting the bar as one of the
                  loudest speakers in its class, the Killam is a compact, dual
                  channel combo with headphone out & built-in reverb. Like a
                  musician's favorite instrument, it becomes better with age and
                  can be relied on to perform after years of heavy use.
                  Personalize your sound to your personal preferences via the
                  pre-gain influenced leather strap enables easy and stylish
                  travel.
                </p>
                <div className="product-images">
                  <img
                    src={`http://localhost:8000/storage/${product.image}`}
                    alt={product.name}
                  />
                  <img
                    src={`http://localhost:8000/storage/${product.image}`}
                    alt={product.name}
                  />
                </div>
              </div>
            )}
            {activeTab === "additional" && (
              <div className="additional-content">
                <table>
                  <tbody>
                    <tr>
                      <th>Weight</th>
                      <td>7 pounds</td>
                    </tr>
                    <tr>
                      <th>Dimensions</th>
                      <td>80 × 40 × 35 cm</td>
                    </tr>
                    <tr>
                      <th>Material</th>
                      <td>Cotton, Leather</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            {activeTab === "reviews" && (
              <div className="reviews-content">
                <p>No reviews yet.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetails;