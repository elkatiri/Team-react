import { NavLink, useLocation } from "react-router-dom";
import image1 from "../../images/Vector.png";
import image2 from "../../images/achat.png";
import image3 from "../../images/badg.png";
import image4 from "../../images/logout.png";
import image5 from "../../images/Group.png";
import "./sideBar.css";
import axios from "axios";
import { CheckCircle, LogOut, MessageSquareMore, ShoppingCart, Store } from "lucide-react";
import { useEffect, useState } from "react";

export default function SideBar() {
  const [newMessagesCount, setNewMessagesCount] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const checkNewMessages = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/messages");
        const messages = response.data;
        
        // Get read message IDs from localStorage
        const readMessageIds = JSON.parse(localStorage.getItem('readMessageIds') || '[]');
        
        // Count messages that haven't been read
        const newCount = messages.filter(msg => !readMessageIds.includes(msg.id)).length;
        
        setNewMessagesCount(newCount);
      } catch (error) {
        console.error("Error checking messages:", error);
      }
    };

    // Check for new messages if not on messages page
    if (location.pathname !== '/dashboard/messages') {
      checkNewMessages();
      
      // Check for new messages every minute
      const interval = setInterval(checkNewMessages, 60000);
      return () => clearInterval(interval);
    } else {
      // Reset count when on messages page
      setNewMessagesCount(0);
    }
  }, [location.pathname]);

  function logout() {
    const token = localStorage.getItem("token");
    axios.post("http://127.0.0.1:8000/api/logout", { headers: { Authorization: `Bearer ${token}` } });
    localStorage.removeItem("token");
    localStorage.setItem("admin", false);
    localStorage.removeItem("user");
    window.location.href = "/";
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
          <div className={location.pathname === "/dashboard/orders" ? "active" : ""}>
            <NavLink to="/dashboard/orders">
            <ShoppingCart size={40} color="#2A4178" />
            <CheckCircle
              size={20}
              color="#7e521b"
              style={{
                position: "absolute",
                top: 0,
                right: 0,
              }}
            />    
              <span>Orders</span>
            </NavLink>
          </div>
          <div className={location.pathname === "/dashboard/products" ? "active" : ""}>
            <NavLink to="/dashboard/products">
             <Store />
              <span>Products</span>
            </NavLink>
          </div>
          <div className={location.pathname === "/dashboard/messages" ? "active" : ""}>
            <NavLink to="/dashboard/messages">
              <MessageSquareMore />
              <span>Messages</span>
              {newMessagesCount > 0 && (
                <span className="notification-badge">{newMessagesCount}</span>
              )}
            </NavLink>
          </div>
        </nav>
      </div>

      {/* Logout Section */}
      <div className="logout">
        <NavLink to="" onClick={logout}>
        <LogOut />
          <span>LogOut</span>
        </NavLink>
      </div>
    </div>
  );
}