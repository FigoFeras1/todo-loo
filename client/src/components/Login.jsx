import { useEffect } from "react";
import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState({ username: "", password: "" });
  //   useEffect(() => {
  //     // fetch("/api");
  //     fetch("/api/login", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(user),
  //     }).then((res) => {
  //       console.log("Request complete! response:", res);
  //     });
  //   }, []);

  return (
    <main>
      <div>
        <form method="post" action="/api/login">
          <label htmlFor="username">Username:</label>
          <br />
          <input type="text" name="username" />
          <br />
          <label htmlFor="password">Password:</label>
          <br />
          <input type="password" name="password" />
          <br />
          <input type="submit" value="Login" />
        </form>
      </div>
    </main>
  );
}
