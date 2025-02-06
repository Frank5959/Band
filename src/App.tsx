import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import AdminLogin from "./pages/AdminLogin.tsx";
import AdminDashboard from "./pages/AdminDashboard.tsx";
import ProductDetails from "./pages/ProductDetails.tsx";
import Navbar from "./components/Navbar.tsx";
import PromotionalBanner from "./components/PromotionalBanner.tsx";
import Footer from "./components/Footer.tsx";
import CartProvider from "./context/CartContext.tsx";
import ProductList from "./components/ProductList.tsx";

import "./styles/global.css";

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <PromotionalBanner />
         <ProductList />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
