import { useContext } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";

function Wishlist() {
  const {
    wishlist,
    removeFromWishlist,
    clearWishlist,
  } = useContext(WishlistContext);

  const { addToCart } =
    useContext(CartContext);

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10 min-h-screen">

        <h1 className="text-4xl font-bold mb-8">
          My Wishlist ❤️
        </h1>

        {wishlist.length === 0 ? (
          <div className="text-center py-20">

            <h2 className="text-3xl font-bold mb-4">
              Your Wishlist is Empty
            </h2>

            <p className="text-gray-500 mb-6">
              Save your favorite products here.
            </p>

            <Link
              to="/products"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
            >
              Browse Products
            </Link>

          </div>
        ) : (
          <>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

              {wishlist.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
                >

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-56 object-cover"
                  />

                  <div className="p-4">

                    <h2 className="text-lg font-bold">
                      {item.name}
                    </h2>

                    <p className="text-gray-500">
                      {item.category}
                    </p>

                    <p className="text-yellow-500 mt-2">
                      ⭐ {item.rating}
                    </p>

                    <p className="text-green-600 text-xl font-bold mt-2">
                      ₹{item.price}
                    </p>

                    <div className="flex flex-col gap-2 mt-4">

                      <Link
                        to={`/product/${item.id}`}
                        className="bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-lg"
                      >
                        View Product
                      </Link>

                      <button
                        onClick={() =>
                          addToCart(item)
                        }
                        className="bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg"
                      >
                        Add To Cart
                      </button>

                      <button
                        onClick={() =>
                          removeFromWishlist(
                            item.id
                          )
                        }
                        className="bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg"
                      >
                        Remove
                      </button>

                    </div>

                  </div>

                </div>
              ))}

            </div>

            <div className="mt-10 bg-gray-100 rounded-xl p-6">

              <h2 className="text-2xl font-bold mb-4">
                Wishlist Summary
              </h2>

              <p>
                Total Items:
                {" "}
                <span className="font-bold">
                  {wishlist.length}
                </span>
              </p>

              <button
                onClick={clearWishlist}
                className="mt-5 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg"
              >
                Clear Wishlist
              </button>

            </div>
          </>
        )}

      </div>

      <Footer />
    </>
  );
}

export default Wishlist;