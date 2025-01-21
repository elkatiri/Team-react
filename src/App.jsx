import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthForm from "./components/Auth/AuthForm";
import Orders from "./components/dashboard/orders";
import Products from "./components/dashboard/products";
import { useEffect, useState } from "react";
import NotFound from "./components/NotFound";



function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState("");
  useEffect(() => {
    setIsAdmin(localStorage.getItem("admin"));
    setUser(localStorage.getItem("user"));
  }, []);
return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AuthForm />} />
      <Route
        path="/dashboard/orders"
        element={isAdmin && <Orders user={user} />}
      />
      <Route
        path="/dashboard/products"
        element={isAdmin && <Products user={user} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
};
export default App;
