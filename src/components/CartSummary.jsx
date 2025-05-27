import { Button } from "./Button";
import styles from "../styles/cartSummary.module.css";

export const CartSummary = ({ cart }) => {
  const subtotal = cart.reduce((sum, current) => sum + current.total, 0);
  const shipping = subtotal > 0 ? 10 : 0;
  const total = subtotal + shipping;

  if (cart.length === 0) return null;

  return (
    <div className={styles.summary}>
      <h3>Order Summary</h3>
      <div className={styles.summaryDetails}>
        <div className={styles.summaryRow}>
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className={styles.summaryRow}>
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className={styles.summaryRow + ' ' + styles.total}>
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      <button className={styles.checkoutButton}>
        Proceed to Checkout
      </button>
    </div>
  );
};
