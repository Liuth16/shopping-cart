import { Button } from "./Button";
import { InputField } from "./InputField";
import styles from "../styles/cartItemsList.module.css";

export const CartItemsList = ({ cart, removeFromCart, updateQuantity }) => {
  const handleQuantityChange = (e, productId) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1) {
      updateQuantity(productId, value);
    }
  };

  if (cart.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <p>Your cart is empty. Start shopping to add items!</p>
      </div>
    );
  }

  return (
    <div className={styles.cartList}>
      {cart.map((item) => (
        <div key={item.id} className={styles.cartItem}>
          <img src={item.image} alt={item.title} />
          <div className={styles.details}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p className={styles.price}>${item.price}</p>
            <div className={styles.quantityContainer}>
              <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
              <InputField
                id={`quantity-${item.id}`}
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(e, item.id)}
              />
            </div>
            <p>
              <b>Total: ${item.total.toFixed(2)}</b>
            </p>
            <Button text="Remove" onClick={() => removeFromCart(item.id)} />
          </div>
        </div>
      ))}
    </div>
  );
};
