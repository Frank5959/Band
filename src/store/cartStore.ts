import React from "react";
import { create } from "zustand";

export const useCartStore = create((set) => ({
  items: [],
  addToCart: (product) =>
    set((state) => ({ items: [...state.items, product] })),
  removeFromCart: (productId) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== productId),
    })),
}));

