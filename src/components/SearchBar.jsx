import { useState } from "react";
import { Link } from "react-router-dom";

import products from "../data/products";

function SearchBar() {
const [search, setSearch] =
useState("");

const filteredProducts =
products.filter((product) =>
product.name
.toLowerCase()
.includes(
search.toLowerCase()
)
);

return ( <div className="relative w-full">

```
  <input
    type="text"
    placeholder="Search products..."
    value={search}
    onChange={(e) =>
      setSearch(
        e.target.value
      )
    }
    className="w-full px-4 py-3 rounded-md border text-black outline-none focus:ring-2 focus:ring-blue-500"
  />

  {search && (
    <div className="absolute left-0 right-0 bg-white shadow-lg rounded-md mt-1 max-h-64 overflow-y-auto z-50">

      {filteredProducts.length >
      0 ? (
        filteredProducts.map(
          (product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              onClick={() =>
                setSearch("")
              }
              className="flex items-center gap-3 p-3 hover:bg-gray-100"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-12 h-12 object-cover rounded"
              />

              <div>
                <p className="font-medium">
                  {product.name}
                </p>

                <p className="text-green-600 text-sm">
                  ₹{product.price}
                </p>
              </div>

            </Link>
          )
        )
      ) : (
        <p className="p-4 text-gray-500">
          No products found
        </p>
      )}

    </div>
  )}

</div>

);
}

export default SearchBar;
