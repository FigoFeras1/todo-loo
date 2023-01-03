import React from "react";
import { Route, Routes } from "react-router-dom";
import Form from "./components/Form";

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

  return (
    <>
      <Routes>
        <Route path="/" element={loginComponent} />
        <Route path="/login" element={loginComponent} />
        <Route path="/register" element={registerComponent} />
      </Routes>
    </>
  );
}
