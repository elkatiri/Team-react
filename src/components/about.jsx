import "./style/about.css"
import location from "../images/location.png";
import phone from "../images/phone.png";
import time from "../images/time.png";
import BfrFooter from "./bfr_footer";
import Footer from "./footer";
import Navbar from "./navbar";
export default function About() {
    return (
      <div className="container_about">
        <Navbar/>
        <div className="bg_about"></div>
        <div className="special_header">
          <h1>Get In Touch With Us</h1>
          <p>
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>
        <div className="all_contact">
          <div className="details_about">
            <div className="all">
              <img src={location} alt=""></img>
              <div>
                <p>Address</p>
                <span>236 5th SE Avenue, New York NY10000, United States</span>
              </div>
            </div>
            <div className="all">
              <img src={phone} alt=""></img>
              <div>
                <p>Phone</p>
                <span>Mobile: +(84) 546-6789<br></br>Hotline: +(84) 456-6789</span>
              </div>
            </div>
            <div className="all">
              <img src={time} alt=""></img>
              <div>
                <p>Working-Time</p>
                <span>236 5th SE Avenue, New York NY10000, United States</span>
              </div>
            </div>
          </div>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="text_area">Message:</label>
            <textarea id="text_area" name="text_area" rows={10} required />
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
            </div>
        <BfrFooter />
        <Footer />
      </div>
    );
}