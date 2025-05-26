import { CartItemsList } from "../components/CartItemsList";
import { CartSummary } from "../components/CartSummary";
import { useCart } from "../features/useHooks";

const CartPage = () => {
  const { cart, addToCart, removeFromCart, updateQuantity } = useCart();
  return (
    <div>
      <h1>Your Cart</h1>
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
