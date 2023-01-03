import { useNavigate, Link } from "react-router-dom";
import "../../static/navbar.css";
import { useEffect } from "react";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <h3 className="nav--text">
        <span style={{ color: "#51AFEF" }}>Todo</span>Loo
      </h3>
      <div className="nav--login">
        <button className="nav--button" onClick={() => navigate("/login")}>
          Login
        </button>
      </div>
      <div className="nav--register">
        <button
          className="nav--button"
          onClick={() => navigate("/register")}
        >
          Register
        </button>
      </div>
    </nav>
  );
}
