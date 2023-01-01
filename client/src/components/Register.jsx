import "../../static/register.css";

export default function Register() {
  return (
    <>
      <div className="register--main">
        <br />
        <br />
        <form
          method="post"
          action="/api/register"
          className="register--form"
          name="register--form"
          id="register--form"
        >
          <label htmlFor="username" className="register--title">
            Register
          </label>
          <input
            type="text"
            name="username"
            className="register--input"
            placeholder="Username"
            required={true}
          />
          <input
            type="email"
            name="email"
            className="register--input"
            placeholder="Email"
            required={true}
          />
          <input
            type="password"
            name="password"
            className="register--input"
            placeholder="Password"
            required={true}
          />
          <input
            type="password"
            name="confirmPassword"
            className="register--input"
            placeholder="Confirm Password"
            required={true}
          />
          <div>
            <button
              type="submit"
              form="register--form"
              className="register--button"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
