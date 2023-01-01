import { useEffect } from "react";
import { useState } from "react";

import "../../static/login.css";
import { json } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState({
    username: "default",
    password: "default",
  });

  function callApi() {
    console.log(user);
    const res = fetch("http://api:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then(() => console.log("login request sent."))
      .catch((err) => console.log(err));
  }

  function handleSubmit(event) {
    const { username, password } = event.target;

    if (username === "") {
      console.log("no username provided");
      return;
    }

    if (password === "") {
      console.log("no password provided");
      return;
    }

    async function loginUser() {
      const res = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      })
        .then(() => console.log("login request sent."))
        .catch((err) => console.log(err));

      await res
        .json()
        .then((body) => console.log(`login request response body: ${body}`));
    }

    // loginUser();
    callApi();
  }

  function handleChange(event) {
    const { name, value } = event.target;
    console.log(`name: ${name}, value: ${value}`);

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));

    console.log(user);
  }

  return (
    <>
      <div className="login--main">
        <br />
        <br />
        <form
          onSubmit={handleSubmit}
          className="login--form"
          name="login--form"
          // method="POST"
          // action="/api/login"
          id="login--form"
        >
          <label htmlFor="username" className="login--title">
            Login
          </label>
          <input
            type="text"
            value={user.username}
            onChange={handleChange}
            name="username"
            className="login--input"
            placeholder="Username"
            required={true}
          />
          <input
            type="password"
            value={user.password}
            onChange={handleChange}
            name="password"
            className="login--input"
            placeholder="Password"
            required={true}
          />
          <div>
            <button className="login--button">Login</button>
          </div>
        </form>
      </div>
    </>
  );
}
