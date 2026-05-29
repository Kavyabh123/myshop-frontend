import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import products from "../data/products";

function Products() {
  return (
    <>
      <Navbar />

      <SearchBar />

      <div className="grid md:grid-cols-3 gap-6 p-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-48 w-full object-cover rounded"
            />

            <h3 className="font-bold mt-3">
              {product.name}
            </h3>

            <p>₹{product.price}</p>

            <button className="bg-blue-600 text-white px-4 py-2 rounded mt-3">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}

export default Products;