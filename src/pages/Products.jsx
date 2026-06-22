import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/Navbar";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  const queryParams = new URLSearchParams(
    location.search
  );

  const selectedCategory =
    queryParams.get("category");

  useEffect(() => {
    axios
      .get(
        "http://localhost:5000/api/products"
      )
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const filteredProducts = selectedCategory
    ? products.filter(
        (product) =>
          product.category === selectedCategory
      )
    : products;
   
    console.log("API Products:", products);
    console.log("Filtered Products:", filteredProducts);

  return (
    <>
      <Navbar />

      <div className="bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto py-10">

          <h1 className="text-4xl font-bold text-center mb-8">
            {selectedCategory || "All Products"}
          </h1>

          {loading ? (
            <h2 className="text-center text-xl">
              Loading Products...
            </h2>
          ) : (
            <ProductGrid
              products={filteredProducts}
            />
          )}

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Products;