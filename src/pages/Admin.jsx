import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import products from "../data/products";

function Admin() {
return (
<> <Navbar />

  <div className="max-w-7xl mx-auto p-8">

    <h1 className="text-4xl font-bold mb-8">
      Admin Dashboard
    </h1>

    <div className="bg-white rounded-xl shadow-lg overflow-hidden">

      <table className="w-full">

        <thead className="bg-slate-900 text-white">

          <tr>
            <th className="p-4">
              Image
            </th>

            <th className="p-4">
              Product
            </th>

            <th className="p-4">
              Category
            </th>

            <th className="p-4">
              Price
            </th>

            <th className="p-4">
              Rating
            </th>
          </tr>

        </thead>

        <tbody>

          {products.map(
            (product) => (
              <tr
                key={product.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                </td>

                <td className="p-4 font-semibold">
                  {product.name}
                </td>

                <td className="p-4">
                  {product.category}
                </td>

                <td className="p-4 text-green-600 font-bold">
                  ₹{product.price}
                </td>

                <td className="p-4">
                  ⭐ {product.rating}
                </td>
              </tr>
            )
          )}

        </tbody>

      </table>

    </div>

  </div>

  <Footer />
</>


);
}

export default Admin;
