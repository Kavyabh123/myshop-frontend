import ProductCard from "./ProductCard";

function ProductGrid({ products = [] }) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <h2 className="text-3xl font-bold mb-8 text-center">
        Featured Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
          />
        ))}

      </div>

    </div>
  );
}

export default ProductGrid;