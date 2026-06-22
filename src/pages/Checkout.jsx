import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { CartContext } from "../context/CartContext";

function Checkout() {
const navigate = useNavigate();

const { cart, clearCart } =
useContext(CartContext);

const [formData, setFormData] =
useState({
name: "",
email: "",
phone: "",
address: "",
city: "",
pincode: "",
});

const totalPrice =
cart.reduce(
(total, item) =>
total +
item.price *
item.quantity,
0
);

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]:
e.target.value,
});
};

const handleOrder = (e) => {
e.preventDefault();

const {
  name,
  email,
  phone,
  address,
  city,
  pincode,
} = formData;

if (
  !name ||
  !email ||
  !phone ||
  !address ||
  !city ||
  !pincode
) {
  toast.error(
    "Please fill all fields"
  );
  return;
}

toast.success(
  "Order Placed Successfully 🎉"
);

clearCart();

setTimeout(() => {
  navigate("/success");
}, 1500);


};

return (
<> <Navbar />

  <div className="max-w-7xl mx-auto p-8">

    <h1 className="text-4xl font-bold mb-8">
      Checkout
    </h1>

    <div className="grid md:grid-cols-2 gap-8">

      {/* Shipping Form */}

      <div className="bg-white shadow-lg rounded-xl p-6">

        <h2 className="text-2xl font-bold mb-4">
          Shipping Details
        </h2>

        <form
          onSubmit={handleOrder}
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            name="address"
            placeholder="Address"
            rows="3"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <select
            className="w-full border p-3 rounded-lg"
          >
            <option>
              Cash On Delivery
            </option>

            <option>
              UPI
            </option>

            <option>
              Credit Card
            </option>

            <option>
              Debit Card
            </option>
          </select>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold"
          >
            Place Order
          </button>

        </form>

      </div>

      {/* Order Summary */}

      <div className="bg-white shadow-lg rounded-xl p-6">

        <h2 className="text-2xl font-bold mb-4">
          Order Summary
        </h2>

        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between border-b py-3"
          >
            <div>
              <p className="font-semibold">
                {item.name}
              </p>

              <p className="text-sm text-gray-500">
                Qty:
                {" "}
                {item.quantity}
              </p>
            </div>

            <p className="font-bold">
              ₹
              {item.price *
                item.quantity}
            </p>
          </div>
        ))}

        <div className="mt-6">

          <h3 className="text-2xl font-bold">
            Total:
            {" "}
            <span className="text-green-600">
              ₹{totalPrice}
            </span>
          </h3>

        </div>

      </div>

    </div>

  </div>

  <Footer />
</>


);
}

export default Checkout;
