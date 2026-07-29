import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

function Navbar({ search, setSearch }) {

  const { totalItems } = useContext(CartContext);
  const { wishlistItems } = useContext(WishlistContext);

  const navigate = useNavigate();

  const [userName, setUserName] = useState(
    localStorage.getItem("userName")
  );

  const [darkMode, setDarkMode] = useState(() => {
  return localStorage.getItem("theme") === "dark";
});

  useEffect(() => {
  document.body.className = darkMode ? "dark" : "";
  localStorage.setItem(
    "theme",
    darkMode ? "dark" : "light"
  );
}, [darkMode]);

  function handleLogout() {
    localStorage.removeItem("userName");
    setUserName(null);
    navigate("/");
  }

  return (
    <nav>

      <Link to="/">
        <h2>🛒 MiniMart</h2>
      </Link>

      <input
        type="text"
        placeholder="Search groceries..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div>

        <button
  onClick={() => setDarkMode(!darkMode)}
>
  {darkMode ? "☀️ Switch to Light" : "🌙 Switch to Dark"}
</button>
        <Link to="/wishlist">
          <button>
            ❤️ Wishlist ({wishlistItems.length})
          </button>
        </Link>

        <Link to="/cart">
          <button>
            🛒 Cart ({totalItems})
          </button>
        </Link>

        {userName ? (
          <>
            <span>
              Hello, {userName} 👋
            </span>

            <button
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">
            <button>
              Login
            </button>
          </Link>
        )}

      </div>

    </nav>
  );
}

export default Navbar;