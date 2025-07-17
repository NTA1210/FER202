import React from "react";
import { useSelector } from "react-redux";

export default function Cart() {
  const items = useSelector((state) => state.cart.items);
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>Cart</h2>
      {items.length === 0 && <p>Your cart is empty.</p>}
      {items.map((item) => (
        <div className="cart-item" key={item.id}>
          <p>
            {item.name} - Quantity: {item.quantity} - ${item.price}
          </p>
        </div>
      ))}
      <div className="cart-total">Total: ${total.toFixed(2)}</div>
    </div>
  );
}
