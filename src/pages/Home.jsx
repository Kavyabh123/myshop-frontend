import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Home() {
  const [backendProducts, setBackendProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        setBackendProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Welcome To ElectroMart
          </h1>

          <p className="text-xl mb-8">
            Discover the latest electronics, gadgets,
            laptops, mobiles and accessories.
          </p>

          <Link
            to="/products"
            className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-500 transition"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Shop By Category
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white shadow-md rounded-xl p-8 text-center">
            💻
            <h3 className="font-bold mt-3">Laptops</h3>
          </div>

          <div className="bg-white shadow-md rounded-xl p-8 text-center">
            📱
            <h3 className="font-bold mt-3">Mobiles</h3>
          </div>

          <div className="bg-white shadow-md rounded-xl p-8 text-center">
            🎧
            <h3 className="font-bold mt-3">Audio</h3>
          </div>

          <div className="bg-white shadow-md rounded-xl p-8 text-center">
            ⌚
            <h3 className="font-bold mt-3">Smart Watches</h3>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Featured Products ({backendProducts.length} from Backend)
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {backendProducts.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-4">
                <h2 className="text-lg font-bold">
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

                <Link
                  to={`/product/${product._id}`}
                  className="block mt-4 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-lg"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Why Choose ElectroMart?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow">
              🚚
              <h3 className="font-bold mt-3">
                Fast Delivery
              </h3>
              <p className="mt-2 text-gray-600">
                Get your products delivered quickly.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow">
              🔒
              <h3 className="font-bold mt-3">
                Secure Payments
              </h3>
              <p className="mt-2 text-gray-600">
                Safe and secure transactions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow">
              ⭐
              <h3 className="font-bold mt-3">
                Premium Quality
              </h3>
              <p className="mt-2 text-gray-600">
                Trusted brands and products.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;