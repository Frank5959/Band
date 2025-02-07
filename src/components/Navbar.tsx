import React from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore.ts";

const Navbar = () => {
  const cartCount = useCartStore((state) => state.items.length);
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">MyStore</Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/admin">Admin</Link>
      </div>
      <div className="cart-icon">
        <Link to="/cart">🛒 ({cartCount})</Link>
      </div>
    </nav>
  );
};

export default Navbar;
