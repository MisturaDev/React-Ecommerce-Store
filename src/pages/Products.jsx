import React, { useContext } from "react";
import products from "../data/products";
import { CartContext } from "../context/CartContext";

function Products() {
  const { addToCart } = useContext(CartContext);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Our Products</h2>
      <div style={styles.grid}>
        {products.map((item) => (
          <div key={item.id} style={styles.card}>
            <img src={item.image} alt={item.name} style={styles.image} />
            <h3>{item.name}</h3>
            <p>₦{item.price}</p>
            <button
              style={styles.button}
              onClick={() => addToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { padding: "20px" },
  title: { textAlign: "center", marginBottom: "20px" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  },
  card: {
    border: "1px solid #ddd",
    padding: "15px",
    borderRadius: "8px",
    textAlign: "center",
  },
  image: { width: "100%", height: "150px", objectFit: "cover" },
  button: {
    background: "black",
    color: "white",
    border: "none",
    padding: "10px 15px",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default Products;
