import React from "react";
import { useEffect, useState } from "react";
import { fetchProducts } from "../api/productApi.ts";
import ProductCard from "./ProductCard.tsx";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
