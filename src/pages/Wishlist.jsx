import { useContext } from "react";
import { Link } from "react-router-dom";

import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";

function Wishlist() {

  const {
    wishlistItems,
    removeFromWishlist
  } = useContext(WishlistContext);

  const {
    addToCart
  } = useContext(CartContext);

  return (

    <div className="cart">

      <h1>❤️ My Wishlist</h1>

      {wishlistItems.length === 0 ? (

        <div>

          <h2>Your Wishlist is Empty</h2>

          <Link to="/">
            <button>
              Continue Shopping
            </button>
          </Link>

        </div>

      ) : (

        <>

          {wishlistItems.map((item) => (

            <div
              key={item.id}
              className="cart-item"
            >

              <img
                src={item.image}
                alt={item.name}
              />

              <div>

                <h3>{item.name}</h3>

                <p>₹{item.price}</p>

                <p>
                  ⭐ {item.rating}
                </p>

              </div>

              <button
                onClick={() =>
                  addToCart(item)
                }
              >
                🛒 Add to Cart
              </button>

              <button
                onClick={() =>
                  removeFromWishlist(item.id)
                }
              >
                ❌ Remove
              </button>

            </div>

          ))}

        </>

      )}

    </div>

  );

}

export default Wishlist;