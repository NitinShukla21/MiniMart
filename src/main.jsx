import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { CartProvider } from "./context/CartContext.jsx";
import { WishlistProvider } from "./context/WishlistContext.jsx";

import { Toaster } from "react-hot-toast";

import "./index.css";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>

    <CartProvider>

      <WishlistProvider>

        <Toaster
          position="top-right"
          reverseOrder={false}
        />

        <App />

      </WishlistProvider>

    </CartProvider>

  </React.StrictMode>
);