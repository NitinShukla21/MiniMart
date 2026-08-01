import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const res = await axios.post(
        ""https://minimart-1-epl4.onrender.com/api/users/login"",
        {
          email,
          password
        }
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "userName",
        res.data.user.name
      );

      alert("Login Successful ✅");

      navigate("/");

      window.location.reload();

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Login Failed"
      );

    }
  }

  return (
    <div className="form-page">

      <form onSubmit={handleLogin}>

        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          required
        />

        <button type="submit">
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;