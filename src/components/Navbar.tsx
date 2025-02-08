import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore.ts";
import "../styles/global.css";

const Navbar = () => {
  const cartCount = useCartStore((state) => state.items.length);
  const [bounce, setBounce] = useState(false);

  useEffect(() => {
    if (cartCount === 0) return;
    setBounce(true);
    const timeout = setTimeout(() => setBounce(false), 300);
    return () => clearTimeout(timeout);
  }, [cartCount]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          MyStore
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                Admin
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                🛒 <span className={bounce ? "bounce" : ""}>({cartCount})</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
