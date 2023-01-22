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
  console.log(
    `token: ${localStorage.getItem("token")}\nauthenticated: ${authenticated}`
  );
  console.log(JSON.stringify(localStorage.getItem("user")));

  return (
    <>
      <Routes>
        <Route path="/" element={authenticated ? <Home /> : <Hero />} />
        <Route
          path="/:todoList"
          element={authenticated ? <Home /> : <Hero />}
        />
        <Route
          path="/login"
          element={authenticated ? <Navigate to="/" /> : loginComponent}
        />
        <Route
          path="/register"
          element={authenticated ? <Navigate to="/" /> : registerComponent}
        />
      </Routes>
    </>
  );
}
