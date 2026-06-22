import { Link } from "react-router-dom";

function Hero() {
return (
<section
className="relative h-[500px] bg-cover bg-center flex items-center"
style={{
backgroundImage:
"url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1600')",
}}
>
{/* Overlay */} <div className="absolute inset-0 bg-black/50"></div>

```
  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-8 text-white">

    <h1 className="text-5xl md:text-6xl font-bold mb-4">
      Welcome to ElectroMart
    </h1>

    <p className="text-xl mb-6 max-w-2xl">
      Discover the latest laptops,
      mobiles, audio devices,
      smartwatches and accessories
      at amazing prices.
    </p>

    <div className="flex gap-4">

      <Link
        to="/products"
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3 rounded-lg"
      >
        Shop Now
      </Link>

      <Link
        to="/products"
        className="border border-white hover:bg-white hover:text-black px-8 py-3 rounded-lg"
      >
        Explore Products
      </Link>

    </div>

  </div>

</section>


);
}

export default Hero;
