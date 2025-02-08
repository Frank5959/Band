import { create } from "zustand";

export const useCartStore = create((set) => ({
  items: [],

  // Add to Cart (if product exists, increase quantity instead of adding duplicate)
  addToCart: (product) =>
    set((state) => {
      const existingItem = state.items.find((item) => item.id === product.id);
      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        return { items: [...state.items, { ...product, quantity: 1 }] };
      }
    }),

  // Remove one quantity from the cart
  removeOneFromCart: (productId) =>
    set((state) => ({
      items: state.items
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0), // Remove if quantity reaches 0
    })),

  // Remove entire product from cart
  removeFromCart: (productId) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== productId),
    })),
}));
