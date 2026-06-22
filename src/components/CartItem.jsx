import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartItem({ item }) {
const { removeItem } =
useContext(CartContext);

return ( <div className="flex flex-col md:flex-row items-center justify-between bg-white p-4 rounded-xl shadow mb-4">

```
  <div className="flex items-center gap-4">

    <img
      src={item.image}
      alt={item.name}
      className="w-24 h-24 object-cover rounded-lg"
    />

    <div>
      <h2 className="text-xl font-semibold">
        {item.name}
      </h2>

      <p className="text-gray-500">
        Category: {item.category}
      </p>

      <p className="text-yellow-500">
        ⭐ {item.rating}
      </p>

      <p className="text-green-600 font-bold">
        ₹{item.price}
      </p>

      <p>
        Quantity: {item.quantity}
      </p>
    </div>

  </div>

  <div className="mt-4 md:mt-0">

    <button
      onClick={() =>
        removeItem(item.id)
      }
      className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg"
    >
      Remove
    </button>

  </div>

</div>


);
}

export default CartItem;
