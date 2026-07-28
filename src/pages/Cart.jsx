import { useContext } from "react";

import {
  Link,
  useNavigate
} from "react-router-dom";

import {
  CartContext
} from "../context/CartContext";

function Cart() {

  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart
  } = useContext(CartContext);

  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total +
      item.price * item.quantity,
    0
  );

  return (
    <div className="cart">

      {/* Back to Home button */}
      <button
        onClick={() => navigate("/")}
        style={{
          marginBottom: "20px"
        }}
      >
        ← Back to Home
      </button>

      <h1>
        Your Cart 🛒
      </h1>

      {cartItems.length === 0 ? (

        <div>

          <h2>
            Your cart is empty
          </h2>

          <Link to="/">
            <button>
              Continue Shopping
            </button>
          </Link>

        </div>

      ) : (

        <>

          {cartItems.map(
            (item) => (

              <div
                key={item.id}
                className="cart-item"
              >

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div>

                  <h3>
                    {item.name}
                  </h3>

                  <p>
                    ₹{item.price}
                  </p>

                </div>

                <div>

                  <button
                    onClick={() =>
                      decreaseQuantity(item.id)
                    }
                  >
                    −
                  </button>

                  <span>
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      increaseQuantity(item.id)
                    }
                  >
                    +
                  </button>

                </div>

                <h3>
                  ₹{item.price * item.quantity}
                </h3>

                <button
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                >
                  Remove
                </button>

              </div>

            )
          )}

          <div className="total">

            <h2>
              Total Amount: ₹{totalPrice}
            </h2>

            <button
              onClick={() =>
                navigate("/checkout")
              }
            >
              Proceed to Checkout
            </button>

          </div>

        </>

      )}

    </div>
  );
}

export default Cart;