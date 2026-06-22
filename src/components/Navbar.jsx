import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaHeart,
  FaUser,
} from "react-icons/fa";

import { useContext, useState } from "react";

import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import { ThemeContext } from "../context/ThemeContext";

import products from "../data/products";

function Navbar() {
  const { cart } = useContext(CartContext);

  const { wishlist } =
    useContext(WishlistContext);

  const [search, setSearch] =
    useState("");

  const themeContext =
    useContext(ThemeContext);

  const darkMode =
    themeContext?.darkMode || false;

  const toggleTheme =
    themeContext?.toggleTheme ||
    (() => {});

  const filteredProducts =
    products.filter((product) =>
      product.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <>
      <nav className="bg-[#131921] text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-6">

          <Link to="/">
            <h1 className="text-3xl font-bold text-yellow-400">
              ElectroMart
            </h1>
          </Link>

          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search Electronics..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="w-full px-5 py-3 rounded-md text-black outline-none"
            />

            {search && (
              <div className="absolute bg-white text-black w-full mt-1 rounded shadow-lg max-h-60 overflow-y-auto">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map(
                    (product) => (
                      <Link
                        key={product.id}
                        to={`/product/${product.id}`}
                        className="block px-4 py-3 hover:bg-gray-100"
                        onClick={() =>
                          setSearch("")
                        }
                      >
                        {product.name}
                      </Link>
                    )
                  )
                ) : (
                  <p className="p-3">
                    No Products Found
                  </p>
                )}
              </div>
            )}
          </div>

          <Link
            to="/products"
            className="hover:text-yellow-400 font-medium"
          >
            Products
          </Link>

          <Link
            to="/wishlist"
            className="relative hover:text-red-400"
          >
            <FaHeart size={22} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 rounded-full">
              {wishlist.length}
            </span>
          </Link>

          <Link
            to="/cart"
            className="relative hover:text-yellow-400"
          >
            <FaShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 bg-blue-500 text-xs px-2 rounded-full">
              {cart.length}
            </span>
          </Link>

          <button
            onClick={toggleTheme}
            className="text-xl"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <Link
            to="/login"
            className="hover:text-yellow-400"
          >
            <FaUser size={22} />
          </Link>

        </div>
      </nav>

      {/* Categories Bar */}

      <div className="bg-[#232F3E] text-white px-6 py-3 flex gap-8 overflow-x-auto">

        <Link
          to="/products?category=Mobiles"
          className="hover:text-yellow-400"
        >
          Mobiles
        </Link>

        <Link
          to="/products?category=Laptops"
          className="hover:text-yellow-400"
        >
          Laptops
        </Link>

        <Link
          to="/products?category=Audio"
          className="hover:text-yellow-400"
        >
          Audio
        </Link>

        <Link
          to="/products?category=Tablets"
          className="hover:text-yellow-400"
        >
          Tablets
        </Link>

        <Link
          to="/products?category=Watches"
          className="hover:text-yellow-400"
        >
          Watches
        </Link>

        <Link
          to="/products?category=Streaming"
          className="hover:text-yellow-400"
        >
          Streaming
        </Link>

      </div>
    </>
  );
}

export default Navbar;