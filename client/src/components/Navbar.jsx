import { useNavigate } from "react-router-dom";
import "../../static/navbar.css";
import ProgressBar from "./ProgressBar";

export default function Navbar(props) {
  const navigate = useNavigate();

  const user = localStorage.getItem("token");
  const authenticated = user !== null;

  return (
    <>
      <nav className="navbar">
        <h3 className="nav--text">
          <span style={{ color: "#51AFEF" }}>Todo</span>Loo
        </h3>
        {authenticated ? (
          <>
            <button className="nav--button" onClick={logout}>
              Log out
            </button>
          </>
        ) : (
          <>
            <div className="nav--login">
              <button
                className="nav--button"
                onClick={() => navigate("/login")}
              >
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
      {props.loading && <ProgressBar progress={0} />}
    </>
  );

  function logout() {
    localStorage.removeItem("token");
    window.history.replaceState(null, "", "/");
    window.location.href = "/";
  }
}
