import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthForm from "./components/Auth/AuthForm";
import Orders from "./components/dashboard/orders";
import Products from "./components/dashboard/products";
import { useEffect, useState } from "react";
import NotFound from "./components/NotFound";
import Blog from "./components/blog";
import About from "./components/about";
import Home from "./components/home";
import Shop from "./components/shope";
import ProductDetails from "./components/productdetails";
import Checkout from "./components/Checkout";
import Card from "./components/card";
function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState("");
  useEffect(() => {
    setIsAdmin(localStorage.getItem("admin"));
    setUser(localStorage.getItem("user"));
  }, []);
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route
            path="/dashboard/orders"
            element={isAdmin && <Orders user={user} />}
          />
          <Route
            path="/dashboard/products"
            element={isAdmin && <Products user={user} />}
          />
          <Route path="/"element={<Home/>}/>
          <Route path="/shop"element={<Shop/>}/>
          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="/about" element={<Blog />} />
          <Route path="/contact" element={<About />} />
          <Route path="/check-out" element={<Checkout />} />
          <Route path="/card" element={<Card />} />
          <Route path="/auth" element={<AuthForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
};
export default App;
