import { Navigate, useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import Hero from "./components/Hero";
import Home from "./components/Home";

export function Router() {
  const loginComponent = (
    <Form type="login" formData={{ username: "", password: "" }} />
  );
  const registerComponent = (
    <Form
      type="register"
      formData={{ username: "", email: "", password: "", confirmPassword: "" }}
    />
  );

  const authenticated = localStorage.getItem("token") !== null;

  return (
    <>
      <Routes>
        <Route path="/" element={authenticated ? <Home /> : <Hero />} />
        <Route
          path="/login"
          element={authenticated ? <Navigate to="/" /> : loginComponent}
        />
        <Route
          path="/register"
          element={authenticated ? <Navigate to="/" /> : registerComponent}
        />
        <Route path="/logout" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
