import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">

      <h1>
        Welcome to FreshMart 🛒
      </h1>

      <h2>
        Fresh groceries delivered
        to your doorstep
      </h2>

      <p>
        Shop fresh fruits,
        vegetables, dairy,
        snacks and daily
        essentials.
      </p>

      <Link to="/#products">
        <button>
          Shop Now 🛍️
        </button>
      </Link>

    </section>
  );
}

export default Hero;