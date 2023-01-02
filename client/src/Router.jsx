import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Form from "./components/Form";

export function Router() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route
          path="/"
          element={<Form formData={{ username: "", password: "" }} />}
        />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route
          path="/register"
          element={
            <Form
              type="Register"
              formData={{
                username: "",
                email: "",
                password: "",
                confirmPassword: "",
              }}
            />
          }
        />
      </Routes>
    </>
  );
}
