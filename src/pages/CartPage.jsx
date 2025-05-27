import { CartItemsList } from "../components/CartItemsList";
import { CartSummary } from "../components/CartSummary";
import { useCart } from "../features/useHooks";
import styles from "../styles/cartPage.module.css";

const CartPage = () => {
  const { cart, addToCart, removeFromCart, updateQuantity } = useCart();
  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartHeader}>
        <h1>Your Shopping Cart</h1>
      </div>
      <CartItemsList
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />
      <CartSummary cart={cart} />
    </div>
  );
};

export default CartPage;
