import { useState } from "react";

import "../../static/form.css";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [hasError, setHasError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (formData.username === "") {
      setHasError(() => true);
      return;
    }

    if (formData.password === "") {
      setHasError(true);
      return;
    }

    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then(console.log("login request sent."));
  }

  function handleChange(e) {
    const { name, value } = e.target;

    if (hasError) setHasError(false);

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  return (
    <>
      <div className="form--main">
        <br />
        <br />
        <form onSubmit={handleSubmit} className="form--form" name="form--form">
          <label className="form--title">Login</label>
          {hasError ? (
            <label className="form--error_message">
              Please fill out all the fields.
            </label>
          ) : (
            <label></label>
          )}
          <input
            type="text"
            value={formData.username}
            onChange={handleChange}
            name="username"
            className={
              hasError && formData.username === ""
                ? "form--input_error"
                : "form--input"
            }
            placeholder="Username"
          />
          <input
            type="password"
            value={formData.password}
            onChange={handleChange}
            name="password"
            className={
              hasError && formData.username === ""
                ? "form--input_error"
                : "form--input"
            }
            placeholder="Password"
          />
          <div>
            <button type="submit" className="form--button">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
