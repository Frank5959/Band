import React from "react";
import { faker } from '@faker-js/faker';

const generateMockProducts = () => {
  const products = [];
  for (let i = 1; i <= 10; i++) {
    products.push({
      id: i,
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.urlLoremFlickr({ category: 'product' }),
    });
  }
  return products;
};

export const fetchProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(generateMockProducts()), 1000);
  });
};