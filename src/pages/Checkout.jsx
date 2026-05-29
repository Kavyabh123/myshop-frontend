import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Checkout() {
  const { cart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Checkout</h2>
      <p>Total: ₹{total}</p>
      <button className="bg-purple-600 text-white px-4 py-2 rounded mt-4">
        Place Order
      </button>
    </div>
  );
}

export default Checkout;
