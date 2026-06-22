import { Link } from "react-router-dom";

const categories = [
  {
    name: "Mobiles",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
  },
  {
    name: "Laptops",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500",
  },
  {
    name: "Audio",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
  },
  {
    name: "Tablets",
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500",
  },
  {
    name: "Watches",
    image:
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=500",
  },
  {
    name: "Streaming",
    image:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500",
  },
];

function CategoryCards() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Shop By Category
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={`/products?category=${category.name}`}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >
            <img
              src={category.image}
              alt={category.name}
              className="h-40 w-full object-cover"
            />

            <div className="p-4 text-center">
              <h3 className="font-semibold text-lg">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryCards;