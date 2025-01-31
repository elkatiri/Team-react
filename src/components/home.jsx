import Header from "./header";
import ProductsList from "./listeproducts";
import Navbar from "./navbar";
import Footer from "./footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Spinner from "./spinner";

export default function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]); 

  const fetchedProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/limitedProducts"
      );
      const data = response.data;
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  function handelShowMore() {
    navigate("shop");
  }

  function Search(searchQuery) {
    if (searchQuery === "") {
      fetchedProducts();
    } else {
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setProducts(filteredProducts);
    }
  }

  // Add product to cart
  function handelAddToCart(product) {
    setCart((prevCart) => [...prevCart, product]);
  }
  //remove product from cart
  const removeFromCart = (index) => {
      setCart((prevCart) => prevCart.filter((_, i) => i !== index));
    }; 

  useEffect(() => {
    fetchedProducts();
  }, []);

  return (
    <>
      <Navbar Search={Search} cart={cart} removeFromCart={removeFromCart} />
      <Header />
      {loading ? (
        <Spinner />
      ) : (
        <ProductsList
          products={products}
          handelShowMore={handelShowMore}
          handelAddToCart={handelAddToCart}
        />
      )}
      <Footer />
    </>
  );
}
