import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function CheckoutForm() {
const navigate = useNavigate();

const [formData, setFormData] =
useState({
name: "",
email: "",
phone: "",
address: "",
city: "",
pincode: "",
});

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]:
e.target.value,
});
};

const handleSubmit = (e) => {
e.preventDefault();

```
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

setTimeout(() => {
  navigate("/success");
}, 1500);
```

};

return ( <div className="bg-white p-8 rounded-xl shadow-lg">

```
  <h2 className="text-3xl font-bold mb-6">
    Shipping Details
  </h2>

  <form
    onSubmit={handleSubmit}
    className="space-y-4"
  >
    <input
      type="text"
      name="name"
      placeholder="Full Name"
      value={formData.name}
      onChange={handleChange}
      className="w-full border p-3 rounded-lg"
    />

    <input
      type="email"
      name="email"
      placeholder="Email"
      value={formData.email}
      onChange={handleChange}
      className="w-full border p-3 rounded-lg"
    />

    <input
      type="text"
      name="phone"
      placeholder="Phone Number"
      value={formData.phone}
      onChange={handleChange}
      className="w-full border p-3 rounded-lg"
    />

    <textarea
      name="address"
      placeholder="Address"
      value={formData.address}
      onChange={handleChange}
      className="w-full border p-3 rounded-lg"
      rows="3"
    />

    <input
      type="text"
      name="city"
      placeholder="City"
      value={formData.city}
      onChange={handleChange}
      className="w-full border p-3 rounded-lg"
    />

    <input
      type="text"
      name="pincode"
      placeholder="Pincode"
      value={formData.pincode}
      onChange={handleChange}
      className="w-full border p-3 rounded-lg"
    />

    <div>
      <h3 className="font-semibold mb-2">
        Payment Method
      </h3>

      <select className="w-full border p-3 rounded-lg">
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
    </div>

    <button
      type="submit"
      className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold"
    >
      Place Order
    </button>
  </form>

</div>


);
}

export default CheckoutForm;
