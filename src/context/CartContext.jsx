import { createContext, useState, useEffect} from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
  const savedCart = localStorage.getItem("cartItems");
  return savedCart ? JSON.parse(savedCart) : [];
});
  function addToCart(product) {
    const existingItem = cartItems.find(
      (item) => item.id === product.id
    );

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1
        }
      ]);
    }
  }

  function increaseQuantity(id) {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )
    );
  }

  function decreaseQuantity(id) {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity > 1
                  ? item.quantity - 1
                  : 1
            }
          : item
      )
    );
  }

  function removeFromCart(id) {
    setCartItems(
      cartItems.filter(
        (item) => item.id !== id
      )
    );
  }

  useEffect(() => {
  localStorage.setItem(
    "cartItems",
    JSON.stringify(cartItems)
  );
}, [cartItems]);

  const totalItems = cartItems.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        totalItems
      }}
    >
      {children}
    </CartContext.Provider>
  );
}