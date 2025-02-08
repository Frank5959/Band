import React from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore.ts";

const ProductCard = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent navigation when clicking "Add to Cart"
    addToCart(product);
  };

  return (
    <div className="card h-100 d-flex flex-column">
      <Link to={`/product/${product.id}`} className="text-decoration-none">
        {/* Image Container */}
        <div className="overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="card-img-top"
            style={{ height: "200px", objectFit: "cover", width: "100%" }}
          />
        </div>

        {/* Product Info */}
        <div className="card-body flex-grow-1">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">${product.price}</p>
        </div>
      </Link>

      {/* Add to Cart Button */}
      <div className="card-footer text-center">
        <button className="btn btn-primary w-100" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
