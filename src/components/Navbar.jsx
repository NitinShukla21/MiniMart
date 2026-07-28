import {
  useContext,
  useState
} from "react";

import {
  Link,
  useNavigate
} from "react-router-dom";

import {
  CartContext
} from "../context/CartContext";

function Navbar({
  search,
  setSearch
}) {

  const {
    totalItems
  } = useContext(CartContext);

  const navigate = useNavigate();

  const [
    userName,
    setUserName
  ] = useState(
    localStorage.getItem("userName")
  );

  function handleLogout() {
    localStorage.removeItem(
      "userName"
    );

    setUserName(null);

    navigate("/");
  }

  return (
    <nav>

      <Link to="/">
        <h2>
          🛒 FreshMart
        </h2>
      </Link>

      <input
        type="text"
        placeholder="Search groceries..."
        value={search}
        onChange={(event) =>
          setSearch(
            event.target.value
          )
        }
      />

      <div>

        {userName ? (
          <>
            <span>
              Hello, {userName} 👋
            </span>

            <button
              onClick={
                handleLogout
              }
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

        <Link to="/cart">
          <button>
            Cart 🛍️ (
            {totalItems}
            )
          </button>
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;