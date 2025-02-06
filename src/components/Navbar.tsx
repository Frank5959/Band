import React from "react";
import "../styles/global.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">Company Name</a>
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/admin/login">Admin Login</a></li>
      </ul>
      <div className="cart-icon">
        <a href="/cart">
          🛒 <span className="cart-count">0</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
