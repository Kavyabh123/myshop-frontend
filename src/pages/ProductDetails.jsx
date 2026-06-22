import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="text-center py-20 text-2xl font-bold">
          Loading...
        </div>
        <Footer />
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="text-center py-20 text-2xl font-bold">
          Product Not Found
        </div>
        <Footer />
      </>
    );
  }

  const activeColor =
    product.colors?.[selectedColor];

  const activeImages =
    activeColor?.images?.length > 0
      ? activeColor.images
      : [product.image];

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Added To Cart 🛒");
  };

  const handleWishlist = () => {
    addToWishlist(product);
    toast.success("Added To Wishlist ❤️");
  };

  const handleBuyNow = () => {
    addToCart(product);
    navigate("/checkout");
  };

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LEFT SIDE */}
        <div className="md:col-span-2">

          <div className="bg-white p-4 rounded-xl shadow">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
            >
              {activeImages.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    alt={product.name}
                    className="w-full h-[450px] object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="mt-6 bg-white p-5 rounded-xl shadow">
            <h2 className="text-3xl font-bold">
              {product.name}
            </h2>

            <p className="text-gray-500 mt-2">
              {product.category}
            </p>

            <div className="mt-3">
              <span className="bg-green-600 text-white px-3 py-1 rounded">
                ⭐ {product.rating}
              </span>
            </div>

            <p className="mt-4 text-gray-700">
              {product.description}
            </p>

            {product.offer && (
              <p className="mt-4 text-green-600 font-semibold">
                {product.offer}
              </p>
            )}
          </div>

          {product.reviews?.length > 0 && (
            <div className="mt-6 bg-white p-5 rounded-xl shadow">
              <h3 className="font-bold text-xl mb-3">
                Reviews
              </h3>

              {product.reviews.map((review, index) => (
                <div
                  key={index}
                  className="border-b py-2"
                >
                  ⭐ {review.rating} —{" "}
                  {review.comment}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT SIDE */}
        <div>
          <div className="sticky top-20 bg-white p-6 rounded-xl shadow-lg">

            <h2 className="text-3xl font-bold text-green-600">
              ₹{product.price}
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Free Delivery
            </p>

            {product.colors?.length > 0 && (
              <div className="mt-4">
                <h4 className="font-semibold">
                  Colors
                </h4>

                <div className="flex gap-2 mt-2">
                  {product.colors.map(
                    (color, index) => (
                      <button
                        key={index}
                        onClick={() =>
                          setSelectedColor(index)
                        }
                        className={`w-8 h-8 rounded-full border ${
                          selectedColor === index
                            ? "ring-2 ring-black"
                            : ""
                        }`}
                        style={{
                          backgroundColor:
                            color.hex,
                        }}
                        title={color.name}
                      />
                    )
                  )}
                </div>
              </div>
            )}

            <div className="bg-yellow-50 p-3 mt-4 rounded">
              <p className="font-semibold">
                Offers
              </p>

              <ul className="text-sm mt-2">
                <li>✔ 10% Instant Discount</li>
                <li>✔ No Cost EMI</li>
                <li>✔ Bank Offers</li>
              </ul>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <button
                onClick={handleAddToCart}
                className="bg-yellow-400 py-3 rounded-lg font-bold hover:bg-yellow-500"
              >
                Add To Cart
              </button>

              <button
                onClick={handleBuyNow}
                className="bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600"
              >
                Buy Now
              </button>

              <button
                onClick={handleWishlist}
                className="bg-pink-600 text-white py-3 rounded-lg font-bold"
              >
                Wishlist ❤️
              </button>
            </div>

          </div>
        </div>

      </div>

      <Footer />
    </>
  );
}

export default ProductDetails;