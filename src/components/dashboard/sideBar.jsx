// src/components/SideBar.jsx

import { NavLink } from "react-router-dom";
import image1 from "../../images/Vector.png";
import image2 from "../../images/achat.png";
import image3 from "../../images/badg.png";
import image4 from "../../images/logout.png";
import image5 from "../../images/Group.png";
import "./sideBar.css";
import axios from "axios";

export default function SideBar() {
  function logout() { 
  const token = localStorage.getItem("token");
  axios.post("http://127.0.0.1:8000/api/logout", { headers: { Authorization: `Bearer ${token}` } });
    localStorage.removeItem("token");
    localStorage.setItem("admin",false);
    localStorage.removeItem("userName");

    window.location.href = "/home";
  }
  return (
    <div className="sideBar">
      {/* Sidebar Header */}
      <div>
        <img src={image5} alt="group image" className="top-img" />
      </div>
      <div className="dashbord">
        <img src={image1} alt="Dashboard Logo" />
        Dashboard
      </div>
      <hr style={{ width: "100%", border: "1px solid #2A4178" }} />

      {/* Sidebar Menu */}
      <div className="sideBarMenu">
        <nav>
          <div
            className={
              window.location.pathname === "/dashboard/orders" ? "active" : ""
            }
          >
            <NavLink to="/dashboard/orders">
              <img src={image3} alt="orders" />
              <span>Orders</span>
            </NavLink>
          </div>
          <div
            className={
              window.location.pathname === "/dashboard/products" ? "active" : ""
            }
          >
            <NavLink to="/dashboard/products">
              <img src={image2} alt="products" />
              <span>Products</span>
            </NavLink>
          </div>
        </nav>
      </div>

      {/* Logout Section */}
      <div className="logout">
        <NavLink to=""onClick={logout}>
          <img src={image4} alt="logout" />
          <span>LogOut</span>
        </NavLink>
      </div>
    </div>
  );
}
