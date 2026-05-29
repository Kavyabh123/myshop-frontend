import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#1e3a8a",
        color: "white",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>ElectroMart</h2>

      <div>
        <Link
          to="/"
          style={{ color: "white", marginRight: "20px" }}
        >
          Home
        </Link>

        <Link
          to="/login"
          style={{ color: "white" }}
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;