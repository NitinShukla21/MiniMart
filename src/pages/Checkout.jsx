import {
  useContext,
  useState
} from "react";

import {
  useNavigate
} from "react-router-dom";

import {
  CartContext
} from "../context/CartContext";

function Checkout() {

  const {
    cartItems,
    setCartItems
  } = useContext(CartContext);

  const navigate =
    useNavigate();

  const [
    name,
    setName
  ] = useState("");

  const [
    address,
    setAddress
  ] = useState("");

  const [
    phone,
    setPhone
  ] = useState("");

  const totalPrice =
    cartItems.reduce(
      (total, item) =>
        total +
        item.price *
        item.quantity,
      0
    );

  function placeOrder(
    event
  ) {

    event.preventDefault();

    if (
      !name ||
      !address ||
      !phone
    ) {
      alert(
        "Please fill all details"
      );

      return;
    }

    alert(
      "Order placed successfully! 🎉"
    );

    setCartItems([]);

    navigate("/");
  }

  return (
    <div className="form-page">

      <form
        onSubmit={
          placeOrder
        }
      >

        <h1>
          Checkout 🛒
        </h1>

        <input
          placeholder="Your name"
          value={name}
          onChange={
            (event) =>
              setName(
                event.target.value
              )
          }
        />

        <textarea
          placeholder="Delivery address"
          value={address}
          onChange={
            (event) =>
              setAddress(
                event.target.value
              )
          }
        />

        <input
          type="tel"
          placeholder="Phone number"
          value={phone}
          onChange={
            (event) =>
              setPhone(
                event.target.value
              )
          }
        />

        <h2>
          Total:
          ₹{totalPrice}
        </h2>

        <button
          type="submit"
        >
          Place Order
        </button>

      </form>

    </div>
  );
}

export default Checkout;