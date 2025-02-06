import React from "react";
import { Link } from "react-router-dom";

interface ProductProps {
  product: {
    id: number;
    title: string;
    price: number;
    image: string;
  };
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price.toFixed(2)}</p>
      <Link to={`/product/${product.id}`} className="view-details">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
