import React, { useState } from "react";
import "./login.css";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin123") {
      onLogin();
    } else {
      alert("Invalid credentials. Try admin/admin123");
    }
  };

  return (
    <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
        <h3>Login Here</h3>

        <label htmlFor="username">Username</label>
        <input
            type="text"
            placeholder="Email or Phone"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Log In</button>
        <p className="social-text">Login with a social media account</p>
        <div className="social-icons">
            <button className="social-icon fb">
            <i className="fa-brands fa-facebook"></i>
            </button>
            <button className="social-icon tw">
            <i className="fa-brands fa-twitter"></i>
            </button>
            <button className="social-icon in">
            <i className="fa-brands fa-instagram"></i>
            </button>
        </div>
        </form>
    </div>
  );
};

export default Login;
