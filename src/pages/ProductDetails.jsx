import { useParams, Link } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {

  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (

    <div
      className="form-page"
    >

      <div
        style={{
          maxWidth: "500px",
          textAlign: "center"
        }}
      >

        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "250px"
          }}
        />

        <h1>{product.name}</h1>

        <p>
          ⭐ {product.rating} / 5
        </p>

        <h2>
          ₹{product.price}
        </h2>

        <p>
          {product.description}
        </p>

        <p>
          <b>Category:</b> {product.category}
        </p>

        <Link to="/">
          <button>
            ← Back
          </button>
        </Link>

      </div>

    </div>

  );

}

export default ProductDetails;