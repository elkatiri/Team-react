import "./ContainerDashbord.css";
import image1 from "../images/admin.png";

export default function ContainerDashbord() {
  return (
    <>
      <div className="containerDashbord">
        <div className="welcome">
          <span>Welcome Admin 👋</span>
          <img src={image1} alt="admin-img" />
        </div>
        <div className="generalInfo">
          <div className="info">Shipped orders</div>
          <div className="info">Pending orders</div>
          <div className="info">New Orders</div>
        </div>
      </div>
    </>
  );
}
