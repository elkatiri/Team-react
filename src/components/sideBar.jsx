// src/components/SideBar.jsx

import { NavLink } from "react-router-dom";
import image1 from "../images/Vector.png";
import image2 from "../images/achat.png";
import image3 from "../images/badg.png";
import image4 from "../images/logout.png";
import image5 from "../images/Group.png";
import "./sideBar.css";

export default function SideBar() {
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
          <div className="active">
            <NavLink to="/orders">
              <img src={image3} alt="orders" />
              <span>Orders</span>
            </NavLink>
          </div>
          <div>
            <NavLink to="/products">
              <img src={image2} alt="products" />
              <span>Products</span>
            </NavLink>
          </div>
        </nav>
      </div>

      {/* Logout Section */}
      <div className="logout">
        <NavLink to="/logout">
          <img src={image4} alt="logout" />
          <span>LogOut</span>
        </NavLink>
      </div>
    </div>
  );
}
