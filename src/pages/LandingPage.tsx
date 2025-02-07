import React from "react";
import Navbar from "../components/Navbar.tsx";
import Banner from "../components/Banner.tsx";
import ProductList from "../components/ProductList.tsx";
import Testimonials from "../components/Testimonials.tsx";
import Footer from "../components/Footer.tsx";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <ProductList />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default LandingPage;
