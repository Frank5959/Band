import React from "react";
import "../styles/global.css";

const PromotionalBanner: React.FC = () => {
  return (
    <section className="promotional-banner">
      <div className="banner-content">
        <h1>Exclusive Offers Just for You!</h1>
        <p>Get up to 50% off on selected products. Limited time only!</p>
        <button className="shop-now">Shop Now</button>
      </div>
    </section>
  );
};

export default PromotionalBanner;
