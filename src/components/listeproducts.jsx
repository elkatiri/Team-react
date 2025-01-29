import { FaEye, FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";  
import './style/ProductsListes.css'; 
import { BiChevronRight } from "react-icons/bi";

const ProductsList = ({ products, handelShowMore }) => {
  return (
    <>
      <div className="allProducts">
        <div className="title">Our products</div>
        <div className="products-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              {/* Eye Icon */}
              <Link
                to={`/product/${product.id}`}
                className="product-eye-icon"
                title="View Product Details"
              >
                <FaEye />
              </Link>
              {/* Product Image */}
              <div className="product-image-container">
                <img
                  src={`http://localhost:8000/storage/${product.image}`}
                  alt={product.name}
                  className="product-image"
                />
                <div className="add-to-cart-btn">
                  <FaCartPlus /> Add to Cart
                </div>
              </div>
              {/* Product Info */}
              <div className="product-info">
                <h2 className="product-name">{product.name}</h2>
                <p className="product-description">{product.description}</p>
                <p className="product-price">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {products.length < 9 && (
        <div className="show-more-button-container">
          <button className="show-more-button" onClick={handelShowMore}>
            Show More
            <span className="icon">
              <BiChevronRight className="arrow" />
              <BiChevronRight className="arrow" />
            </span>
          </button>
        </div>
      )}
    </>
  );
};

export default ProductsList;
