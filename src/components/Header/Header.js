import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">🎬 Movie Admin Panel</h1>
      <button className="logout-btn">logout</button>
    </header>
  );
};

export default Header;
