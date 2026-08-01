import {
  useContext,
  useState
} from "react";

import {
  useNavigate
} from "react-router-dom";

import axios from "axios";

import {
  CartContext
} from "../context/CartContext";

function Checkout() {

  const {
    cartItems,
    setCartItems
  } = useContext(CartContext);

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  async function placeOrder(event) {

    event.preventDefault();

    if (!name || !address || !phone) {
      alert("Please fill all details");
      return;
    }

    try {

      await axios.post(
        ""https://minimart-1-epl4.onrender.com/api/orders"",
        {
          userName: name,
          items: cartItems,
          totalAmount: totalPrice
        }
      );

      alert("Order placed successfully! 🎉");

      setCartItems([]);

      navigate("/");

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Order Failed"
      );

    }

  }

  return (
    <div className="form-page">

      <form onSubmit={placeOrder}>

        <h1>Checkout 🛒</h1>

        <input
          placeholder="Your name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <textarea
          placeholder="Delivery address"
          value={address}
          onChange={(e) =>
            setAddress(e.target.value)
          }
        />

        <input
          type="tel"
          placeholder="Phone number"
          value={phone}
          onChange={(e) =>
            setPhone(e.target.value)
          }
        />

        <h2>Total: ₹{totalPrice}</h2>

        <button type="submit">
          Place Order
        </button>

      </form>

    </div>
  );
}

export default Checkout;