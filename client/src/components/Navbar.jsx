import { useNavigate } from "react-router-dom";
import "../../static/navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  const user = localStorage.getItem("token");
  const authenticated = user !== null;

  return (
    <nav className="navbar">
      <h3 className="nav--text">
        <span style={{ color: "#51AFEF" }}>Todo</span>Loo
      </h3>
      {authenticated ? (
        <>
          <label>Logged In</label>
          <button onClick={logout}>Log out</button>
        </>
      ) : (
        <>
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
        </>
      )}
    </nav>
  );

  function logout() {
    localStorage.removeItem("token");
    navigate("/logout");
  }
}
