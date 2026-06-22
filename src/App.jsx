import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import Register from "./pages/Register";
// Context Providers
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <ThemeProvider>

              <Routes>

                {/* Home */}
                <Route path="/" element={<Home />} />

                {/* Products */}
                <Route path="/products" element={<Products />} />
                <Route
                  path="/product/:id"
                  element={<ProductDetails />}
                />

                {/* Cart */}
                <Route
                  path="/cart"
                  element={<Cart />}
                />

                {/* Wishlist */}
                <Route
                  path="/wishlist"
                  element={<Wishlist />}
                />

                {/* Checkout */}
                <Route
                  path="/checkout"
                  element={<Checkout />}
                />

                {/* Login */}
                <Route
                  path="/login"
                  element={<Login />}
                />

                 <Route path="/register" element={<Register />} />

                <Route path="/success" element={<OrderSuccess />} />

              </Routes>

              <ToastContainer
        position="top-right"
        autoClose={2000}
      />

            </ThemeProvider>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;