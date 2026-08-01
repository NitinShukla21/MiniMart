function Hero() {

  function goToProducts() {

    const section =
      document.getElementById("products");

    section?.scrollIntoView({
      behavior: "smooth"
    });

  }

  return (

    <section className="hero">

      <h1>
        Welcome to MiniMart 🛒
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

      <button
        onClick={goToProducts}
      >
        Shop Now 🛍️
      </button>

    </section>

  );

}

export default Hero;