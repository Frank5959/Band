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
    <div className="container my-5">
      <h2 className="text-center mb-4">Our Products</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product) => (
          <div key={product.id} className="col">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
