import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
      />

      <h3>{product.name}</h3>

      <h4>₹{product.price}</h4>

      <Link to={`/product/${product.id}`}>
        <button className="view-btn">
          View Product
        </button>
      </Link>
    </div>
  );
}

export default ProductCard;