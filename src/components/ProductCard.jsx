import {
  useContext
} from "react";

import {
  CartContext
} from "../context/CartContext";

import apple from "../assets/products/apple.png";
import milk from "../assets/products/milk.png";
import vegetables from "../assets/products/vegetables.png";
import snacks from "../assets/products/snacks.png";
import rice from "../assets/products/rice.png";
import oil from "../assets/products/oil.png";
import bread from "../assets/products/bread.png";
import egg from "../assets/products/egg.png";

function ProductCard({
  search,
  selectedCategory
}) {

  const {
    addToCart
  } = useContext(CartContext);

  const products = [
    {
      id: 1,
      name: "Fresh Apples",
      price: 120,
      image: apple,
      category: "Fruits"
    },
    {
      id: 2,
      name: "Fresh Milk",
      price: 60,
      image: milk,
      category: "Dairy"
    },
    {
      id: 3,
      name:
        "Vegetables Pack",
      price: 80,
      image: vegetables,
      category:
        "Vegetables"
    },
    {
      id: 4,
      name:
        "Snacks Combo",
      price: 150,
      image: snacks,
      category:
        "Snacks"
    },
    {
      id: 5,
      name:
        "Basmati Rice",
      price: 90,
      image: rice,
      category:
        "Daily Essentials"
    },
    {
      id: 6,
      name:
        "Cooking Oil",
      price: 140,
      image: oil,
      category:
        "Daily Essentials"
    },
    {
      id: 7,
      name:
        "Fresh Bread",
      price: 45,
      image: bread,
      category:
        "Daily Essentials"
    },
    {
      id: 8,
      name:
        "Farm Eggs",
      price: 75,
      image: egg,
      category:
        "Daily Essentials"
    }
  ];

  const filteredProducts =
    products.filter(
      (product) => {

        const matchesSearch =
          product.name
            .toLowerCase()
            .includes(
              search.toLowerCase()
            );

        const matchesCategory =
          selectedCategory ===
            "All" ||
          product.category ===
            selectedCategory;

        return (
          matchesSearch &&
          matchesCategory
        );
      }
    );

  return (
    <section
      id="products"
      className="products"
    >

      <h2>
        Featured Products
      </h2>

      <div className="product-list">

        {filteredProducts.map(
          (product) => (

            <div
              key={product.id}
              className="product-card"
            >

              <img
                src={
                  product.image
                }
                alt={
                  product.name
                }
              />

              <h3>
                {product.name}
              </h3>

              <p>
                ₹{product.price}
              </p>

              <button
                onClick={() =>
                  addToCart(
                    product
                  )
                }
              >
                Add to Cart
              </button>

            </div>

          )
        )}

      </div>

    </section>
  );
}

export default ProductCard;