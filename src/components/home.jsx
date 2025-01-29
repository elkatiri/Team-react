import Header from "./header"
import ProductsList from "./listeproducts"
import Navbar from "./navbar"
import Footer from "./footer"
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Spinner from "./spinner";

export default function Home() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true); 
    const [products, setProducts] = useState([]);
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

useEffect(() => {
    fetchedProducts();
}, []);
    return (
      <>
        <Navbar />
        <Header />
        {loading ? (
          <Spinner /> 
        ) : (
          <ProductsList products={products} handelShowMore={handelShowMore} />
        )}
        <Footer />
      </>
    );
}