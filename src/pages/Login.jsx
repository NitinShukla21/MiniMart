import { useState } from "react";
import {
  useNavigate
} from "react-router-dom";

function Login() {

  const [
    email,
    setEmail
  ] = useState("");

  const [
    password,
    setPassword
  ] = useState("");

  const navigate =
    useNavigate();

  function handleLogin(
    event
  ) {

    event.preventDefault();

    if (
      email === "" ||
      password === ""
    ) {
      alert(
        "Please enter email and password"
      );

      return;
    }

    const userName =
      email.split("@")[0];

    localStorage.setItem(
      "userName",
      userName
    );

    alert(
      "Login successful!"
    );

    navigate("/");
  }

  return (
    <div className="form-page">

      <form
        onSubmit={handleLogin}
      >

        {/* Back button */}
        <button
          type="button"
          onClick={() =>
            navigate("/")
          }
          style={{
            width: "auto",
            marginBottom: "20px"
          }}
        >
          ← Back to Home
        </button>

        <h1>
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) =>
            setEmail(
              event.target.value
            )
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) =>
            setPassword(
              event.target.value
            )
          }
        />

        <button
          type="submit"
        >
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;