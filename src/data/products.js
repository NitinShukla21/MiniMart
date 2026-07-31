import apple from "../assets/products/apple.png";
import milk from "../assets/products/milk.png";
import vegetables from "../assets/products/vegetables.png";
import snacks from "../assets/products/snacks.png";
import rice from "../assets/products/rice.png";
import oil from "../assets/products/oil.png";
import bread from "../assets/products/bread.png";
import egg from "../assets/products/egg.png";

const products = [
  {
    id: 1,
    name: "Fresh Apples",
    price: 120,
    image: apple,
    category: "Fruits",
    rating: 4.5,
    description:
      "Fresh and juicy apples directly from the farm."
  },
  {
    id: 2,
    name: "Fresh Milk",
    price: 60,
    image: milk,
    category: "Dairy",
    rating: 4.7,
    description:
      "Pure and healthy dairy milk."
  },
  {
    id: 3,
    name: "Vegetables Pack",
    price: 80,
    image: vegetables,
    category: "Vegetables",
    rating: 4.2,
    description:
      "Fresh vegetables for your daily cooking."
  },
  {
    id: 4,
    name: "Snacks Combo",
    price: 150,
    image: snacks,
    category: "Snacks",
    rating: 4.0,
    description:
      "Tasty snacks for your evening."
  },
  {
    id: 5,
    name: "Basmati Rice",
    price: 90,
    image: rice,
    category: "Daily Essentials",
    rating: 4.3,
    description:
      "Premium quality basmati rice."
  },
  {
    id: 6,
    name: "Cooking Oil",
    price: 140,
    image: oil,
    category: "Daily Essentials",
    rating: 4.1,
    description:
      "Healthy refined cooking oil."
  },
  {
    id: 7,
    name: "Fresh Bread",
    price: 45,
    image: bread,
    category: "Daily Essentials",
    rating: 4.0,
    description:
      "Soft and freshly baked bread."
  },
  {
    id: 8,
    name: "Farm Eggs",
    price: 75,
    image: egg,
    category: "Daily Essentials",
    rating: 4.5,
    description:
      "Farm fresh eggs rich in protein."
  }
];

export default products;