import React, { useState } from "react";
import axios from "axios";
import "./AuthForm.css";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [border, setBorder] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const toggleForm = () => {
    setIsLogin((prevState) => !prevState);
    setBorder(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      setBorder(false); // Reset border for login
      setError(""); // Reset error message for login
      // API call for login
      try {
        const resp=await axios.post("http://127.0.0.1:8000/api/login", {
          email: formData.email,
          password: formData.password,
        });
        // Handle successful login
        if (resp.data.user.is_admin) { 
          localStorage.setItem("admin", true);
          navigate("/dashboard/orders");
        }
        else {
          navigate("/home");
        }
        localStorage.setItem("token", resp.data.token);
        localStorage.setItem("user", resp.data.user.name);
      } catch (error){
        console.error("Login failed:", error);
        setBorder(true);
      }
    } else {
      // Validate passwords for registration
      if (formData.password !== formData.password_confirmation) {
        setBorder(true);
        return;
      }

      // API call for registration
      try {
        await axios.post("http://127.0.0.1:8000/api/register", formData);
        setIsLogin(true); 
        setBorder(false); 
        setError(""); 
      } catch (error) {
        setError(error.response.data.message);

      }
    }
  };

  return (
    <div className="auth-container">
      <div
        className={`auth-form ${isLogin ? "fade-in-bottom" : "fade-in-top"}`}
      >
        <h2 className="form-title">{isLogin ? "Sign In" : "Sign Up"}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="name"> Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {error && <p className="error-text">{error}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              style={{ border: border ? "1px solid red" : "1px solid #ccc" }}
            />
          </div>

          {!isLogin && (
            <div className="form-group">
              <label htmlFor="password_confirmation">Confirm Password</label>
              <input
                type="password"
                id="password_confirmation"
                name="password_confirmation"
                placeholder="Confirm your password"
                value={formData.password_confirmation}
                onChange={handleChange}
                required
                style={{
                  border: border ? "1px solid red" : "1px solid #ccc",
                }}
              />
            </div>
          )}

          <button type="submit" className="submit-btn">
            {isLogin ? "Sign In" : "Create Account"}
          </button>
        </form>

        <button className="toggle-btn" onClick={toggleForm}>
          {isLogin
            ? "Need an account? Sign Up"
            : "Already have an account? Sign In"}
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
