import { useEffect, useState } from "react";
import Footer from "./footer";
import ProductsList from "./listeproducts";
import Navbar from "./navbar";
import "./style/shope.css";
import axios from "axios";
import Creatable from "react-select/creatable";
import { SlidersHorizontal } from "lucide-react";
import Spinner from "./spinner"; 

export default function Shop() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 

  // Fonction pour récupérer tous les produits
  const fetchProducts = async () => {
    setLoading(true); // Start loading
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Fonction pour filtrer les produits par prix ou date
  const fetchFilteredProducts = async (filterType) => {
    setLoading(true); // Start loading
    try {
      const url =
        filterType === "price"
          ? "http://127.0.0.1:8000/api/filterByPrice"
          : "http://127.0.0.1:8000/api/filterByTime";

      const response = await axios.get(url);
      setProducts(response.data);
    } catch (error) {
      console.error("Error filtering products:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Gérer le changement de filtre
  const handleChange = (newValue) => {
    setSelectedOption(newValue);
  };

  // Filtrer les produits quand selectedOption change
  useEffect(() => {
    if (selectedOption?.value) {
      fetchFilteredProducts(selectedOption.value);
    } else {
      fetchProducts(); // Charger tous les produits par défaut
    }
  }, [selectedOption]);

  return (
    <>
      <Navbar />
      <div className="shope_bg"></div>
      <div className="filter">
        <h2>
          <SlidersHorizontal size={25} strokeWidth={3} className="icon" />
          Filter:
        </h2>
        <Creatable
          id="custom-select"
          isClearable
          value={selectedOption}
          onChange={handleChange}
          options={[
            { label: "Price", value: "price" },
            { label: "New", value: "new" },
          ]}
        />
      </div>

      {loading ? <Spinner /> : <ProductsList products={products} />}

      <Footer />
    </>
  );
}
