import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, setCart } = useContext(CartContext);

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} style={styles.card}>
              <img src={item.image} alt={item.name} style={styles.image} />
              <div>
                <h3>{item.name}</h3>
                <p>₦{item.price}</p>
                <button
                  style={styles.removeBtn}
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <h3 style={styles.total}>Total: ₦{totalAmount}</h3>
        </>
      )}
    </div>
  );
}

const styles = {
  card: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
    border: "1px solid #ddd",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "10px",
  },
  image: {
    width: "70px",
    height: "70px",
    objectFit: "cover",
    borderRadius: "6px",
  },
  removeBtn: {
    background: "red",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
    borderRadius: "5px",
    marginTop: "5px",
  },
  total: { marginTop: "20px", fontSize: "18px" },
};

export default Cart;
