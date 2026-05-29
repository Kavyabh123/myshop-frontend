import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import products from "../data/products";

function Home() {
  return (
    <>
      <Navbar />

      <div
        style={{
          background:
            "linear-gradient(to right,#2563eb,#1e40af)",
          color: "white",
          textAlign: "center",
          padding: "80px",
        }}
      >
        <h1>Welcome To ElectroMart</h1>
        <h3>Best Electronics At Best Prices</h3>
      </div>

      <SearchBar />

      <h2 style={{ textAlign: "center" }}>
        Featured Products
      </h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        {products.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}
<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    padding: "20px 40px",
  }}
>
  {products.map((item) => (
    <ProductCard
      key={item.id}
      product={item}
    />
  ))}
</div>


export default Home;