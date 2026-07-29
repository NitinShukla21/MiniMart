import products from "../data/products";
import { Link } from "react-router-dom";
import { useContext } from "react";
import toast from "react-hot-toast";

import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";


function ProductCard({ search, selectedCategory }) {

  const { addToCart } = useContext(CartContext);

  const {
    addToWishlist,
    removeFromWishlist,
    isWishlisted
  } = useContext(WishlistContext);


  const filteredProducts = products.filter((product) => {

    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;

  });

  function handleWishlist(product) {

    if (isWishlisted(product.id)) {

      removeFromWishlist(product.id);

      toast.error("Removed from Wishlist");

    } else {

      addToWishlist(product);

      toast.success("Added to Wishlist ❤️");

    }

  }

  function handleCart(product) {

    addToCart(product);

    toast.success("Added to Cart 🛒");

  }

  return (
    <section
      id="products"
      className="products"
    >

      <h2>Featured Products</h2>

      <div className="product-list">

        {filteredProducts.map((product) => (

          <div
            key={product.id}
            className="product-card"
          >

            <Link to={`/product/${product.id}`}>

  <img
    src={product.image}
    alt={product.name}
  />

  <h3>{product.name}</h3>

</Link>
            <p>₹{product.price}</p>

            <p className="rating">
              ⭐ {product.rating} / 5
            </p>

            <button
              onClick={() =>
                handleWishlist(product)
              }
            >
              {isWishlisted(product.id)
                ? "❤️ Wishlisted"
                : "🤍 Add to Wishlist"}
            </button>

            <button
              onClick={() =>
                handleCart(product)
              }
            >
              🛒 Add to Cart
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default ProductCard;