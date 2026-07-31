import { createContext, useState, useEffect } from "react";

export const WishlistContext = createContext();

export function WishlistProvider({ children }) {

  const [wishlistItems, setWishlistItems] = useState(() => {
    const saved = localStorage.getItem("wishlistItems");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "wishlistItems",
      JSON.stringify(wishlistItems)
    );
  }, [wishlistItems]);

  function addToWishlist(product) {

    const exists = wishlistItems.find(
      (item) => item.id === product.id
    );

    if (!exists) {
      setWishlistItems([
        ...wishlistItems,
        product
      ]);
    }

  }

  function removeFromWishlist(id) {

    setWishlistItems(
      wishlistItems.filter(
        (item) => item.id !== id
      )
    );

  }

  function isWishlisted(id) {

    return wishlistItems.some(
      (item) => item.id === id
    );

  }

  return (

    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        isWishlisted
      }}
    >

      {children}

    </WishlistContext.Provider>

  );

}