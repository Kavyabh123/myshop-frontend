import { useParams } from "react-router-dom";
import products from "../data/products";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === parseInt(id)
  );

  if (!product) {
    return (
      <>
        <Navbar />
        <div
          style={{
            textAlign: "center",
            padding: "100px",
          }}
        >
          <h1>Product Not Found</h1>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div
        style={{
          display: "flex",
          gap: "50px",
          padding: "50px",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "400px",
            maxWidth: "100%",
            borderRadius: "10px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          }}
        />

        <div style={{ maxWidth: "500px" }}>
          <h1>{product.name}</h1>

          <h2 style={{ color: "green" }}>
            ₹{product.price}
          </h2>

          <p
            style={{
              lineHeight: "1.8",
              color: "#444",
            }}
          >
            {product.description}
          </p>

          <div style={{ marginTop: "25px" }}>
            <button className="add-cart-btn">
              Add To Cart
            </button>

            <button className="buy-now-btn">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ProductDetails;