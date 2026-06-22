import { Link } from "react-router-dom";
import { useContext } from "react";
import { toast } from "react-toastify";

import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
const { addToCart } =
useContext(CartContext);

return ( <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">

```
  {/* Product Image */}

  <div className="overflow-hidden">
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-56 object-cover hover:scale-105 transition duration-300"
    />
  </div>

  {/* Product Details */}

  <div className="p-4">

    <h2 className="text-lg font-bold line-clamp-1">
      {product.name}
    </h2>

    <p className="text-gray-500 text-sm mt-1">
      {product.category}
    </p>

    <div className="flex items-center justify-between mt-3">

      <span className="bg-green-600 text-white text-sm px-2 py-1 rounded">
        ⭐ {product.rating}
      </span>

      <span className="text-green-600 font-bold text-xl">
        ₹{product.price}
      </span>

    </div>

    <p className="text-gray-600 text-sm mt-3 line-clamp-2">
      {product.description}
    </p>

    <div className="flex gap-2 mt-5">

      <Link
        to={`/product/${product._id}`}
        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-lg"
      >
        View Details
      </Link>

      <button
        onClick={() => {
          addToCart(product);

          toast.success(
            "Added To Cart 🛒"
          );
        }}
        className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-lg"
      >
        Add Cart
      </button>

    </div>

  </div>

</div>


);
}

export default ProductCard;
