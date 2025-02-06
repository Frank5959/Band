import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard.tsx";
import "../styles/global.css";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortOrder, setSortOrder] = useState<string>("default");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        const uniqueCategories = Array.from(new Set(data.map((p: Product) => p.category)));
        setCategories(uniqueCategories);
      })
      .catch((err) => console.error("Failed to fetch products", err));
  }, []);

  // Handle Category Filter
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((p) => p.category === category));
    }
  };

  // Handle Sorting
  const handleSortChange = (order: string) => {
    setSortOrder(order);
    let sortedProducts = [...filteredProducts];

    if (order === "low-high") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (order === "high-low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(sortedProducts);
  };

  return (
    <section className="product-list-container">
      <div className="filters">
        <select onChange={(e) => handleCategoryChange(e.target.value)} value={selectedCategory}>
          <option value="all">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <select onChange={(e) => handleSortChange(e.target.value)} value={sortOrder}>
          <option value="default">Sort By</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
        </select>
      </div>

      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </section>
  );
};

export default ProductList;
