import React from "react";
import { useCartStore } from "../store/cartStore.ts";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

const Cart = () => {
  const { items, addToCart, removeOneFromCart, removeFromCart } =
    useCartStore();

  // Calculate total price
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Your Cart</h1>

      {items.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div className="row">
          {/* Cart Items Section */}
          <div className="col-md-8">
            {items.map((item) => (
              <div key={item.id} className="card mb-3">
                <div className="card-body d-flex align-items-center">
                  {/* Product Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="me-3 rounded"
                    style={{
                      width: "70px",
                      height: "70px",
                      objectFit: "contain",
                    }}
                  />

                  <div className="flex-grow-1">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">
                      Ksh {item.price} × {item.quantity} ={" "}
                      <strong>Ksh {item.price * item.quantity}</strong>
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="d-flex align-items-center">
                    <button
                      className="btn btn-outline-secondary me-2"
                      onClick={() => removeOneFromCart(item.id)}
                      disabled={item.quantity === 1} // Prevent going below 1
                    >
                      <FaMinus />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="btn btn-outline-secondary ms-2"
                      onClick={() => addToCart(item)}
                    >
                      <FaPlus />
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    className="btn btn-danger ms-3"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary Section */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Order Summary</h5>
                <p className="card-text">
                  Total: <strong>Ksh {totalPrice.toFixed(2)}</strong>
                </p>
                <button className="btn btn-primary w-100">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
