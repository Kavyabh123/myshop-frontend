import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function OrderSuccess() {
  return (
    <>
      <Navbar />

      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <div className="bg-white shadow-xl rounded-2xl p-10 max-w-lg">

          <div className="text-7xl mb-4">
            ✅
          </div>

          <h1 className="text-4xl font-bold text-green-600 mb-4">
            Order Placed Successfully!
          </h1>

          <p className="text-gray-600 mb-6">
            Thank you for shopping with ElectroMart.
            Your order has been confirmed and will
            be delivered soon.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <Link
              to="/"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
            >
              Back To Home
            </Link>

            <Link
              to="/products"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg"
            >
              Continue Shopping
            </Link>

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default OrderSuccess;