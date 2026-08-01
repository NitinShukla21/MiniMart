import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Category from "./components/Category";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import Wishlist from "./pages/Wishlist";
import ProductDetails from "./pages/ProductDetails";

function App() {

  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("All");

 

  return (
    <BrowserRouter>

      <Navbar
  search={search}
  setSearch={setSearch}
/>
      <Routes>

        <Route
          path="/"
          element={
            <>
              <Hero />

              <Category
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />

              <ProductCard
                search={search}
                selectedCategory={selectedCategory}
              />
            </>
          }
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/checkout"
          element={<Checkout />}
        />

        <Route
  path="/wishlist"
  element={<Wishlist />}
/>
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;