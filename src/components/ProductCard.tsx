import React from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore.ts";

const ProductCard = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>${product.price}</p>
      </Link>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
