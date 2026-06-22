import { useContext } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { CartContext } from "../context/CartContext";

function Cart() {
  const {
    cart,
    removeItem,
    clearCart,
    addToCart,
  } = useContext(CartContext);

  const decreaseQty = (id) => {
    const item = cart.find(
      (item) => item.id === id
    );

    if (!item) return;

    if (item.quantity === 1) {
      removeItem(id);
      return;
    }

    item.quantity -= 1;

    localStorage.setItem(
      "cart",
      JSON.stringify([...cart])
    );

    window.location.reload();
  };

  const totalPrice = cart.reduce(
    (total, item) =>
      total +
      item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">

        <h1 className="text-4xl font-bold mb-8">
          Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <div className="text-center py-20">

            <h2 className="text-3xl font-bold mb-4">
              Your Cart is Empty 🛒
            </h2>

            <p className="text-gray-500 mb-6">
              Looks like you haven't added anything yet.
            </p>

            <Link
              to="/products"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg"
            >
              Continue Shopping
            </Link>

          </div>
        ) : (
          <>
            <div className="grid gap-6">

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-md p-5 flex flex-col md:flex-row justify-between items-center"
                >

                  <div className="flex items-center gap-5">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-32 h-32 object-cover rounded-lg"
                    />

                    <div>

                      <h2 className="text-xl font-bold">
                        {item.name}
                      </h2>

                      <p className="text-gray-500">
                        {item.category}
                      </p>

                      <p className="text-yellow-500">
                        ⭐ {item.rating}
                      </p>

                      <p className="text-green-600 font-bold text-xl">
                        ₹{item.price}
                      </p>

                    </div>

                  </div>

                  <div className="flex flex-col items-center gap-4 mt-4 md:mt-0">

                    <div className="flex items-center gap-3">

                      <button
                        onClick={() =>
                          decreaseQty(item.id)
                        }
                        className="bg-gray-200 px-3 py-1 rounded"
                      >
                        -
                      </button>

                      <span className="font-bold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          addToCart(item)
                        }
                        className="bg-gray-200 px-3 py-1 rounded"
                      >
                        +
                      </button>

                    </div>

                    <p className="font-semibold">
                      ₹
                      {item.price *
                        item.quantity}
                    </p>

                    <button
                      onClick={() =>
                        removeItem(item.id)
                      }
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                    >
                      Remove
                    </button>

                  </div>

                </div>
              ))}

            </div>

            <div className="mt-10 bg-gray-100 rounded-xl p-8 shadow">

              <h2 className="text-2xl font-bold mb-4">
                Order Summary
              </h2>

              <div className="flex justify-between mb-2">
                <span>Total Items</span>

                <span>
                  {cart.reduce(
                    (total, item) =>
                      total +
                      item.quantity,
                    0
                  )}
                </span>
              </div>

              <div className="flex justify-between mb-4">
                <span>Total Amount</span>

                <span className="font-bold text-green-600 text-xl">
                  ₹{totalPrice}
                </span>
              </div>

              <div className="flex flex-wrap gap-4">

                <button
                  onClick={clearCart}
                  className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg"
                >
                  Clear Cart
                </button>

                <Link
                  to="/checkout"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg"
                >
                  Proceed To Checkout
                </Link>

              </div>

            </div>
          </>
        )}

      </div>

      <Footer />
    </>
  );
}

export default Cart;