import { useCart, useData } from "../features/useHooks";
import { useEffect } from "react";

export const CartItemsList = () => {
  const cart = useCart();
  const data = useData();

  useEffect(() => {}, []);
  console.log(cart);
  console.log(data);

  return <div>Test</div>;
};
