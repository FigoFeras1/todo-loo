import { useState } from "react";
import "../../static/register.css";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (formData.username === "") {
      console.log("username cannot be empty.");
      return;
    }

    if (formData.password === "") {
      console.log("password cannot be empty.");
      return;
    }

    fetch("http://localhost:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then(console.log("register request sent."));
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    console.log(formData);
  }
  return (
    <>
      <div className="form--main">
        <br />
        <br />
        <form
          onSubmit={handleSubmit}
          className="form--form"
          name="form--form"
        >
          <label htmlFor="username" className="form--title">
            Register
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="form--input"
            placeholder="Username"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form--input"
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="register--input"
            placeholder="Password"
          />
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="register--input"
            placeholder="Confirm Password"
          />
          <div>
            <button form="register--form" className="register--button">
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
