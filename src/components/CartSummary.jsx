import { Button } from "./Button";

export const CartSummary = ({ cart }) => {
  const total = cart.reduce((sum, current) => sum + current.total, 0);
  console.log(total);

  if (cart.length > 0) {
    return (
      <div>
        <h3>Total: {total.toFixed(2)}</h3>
        <Button text={"Confirm"} />
      </div>
    );
  }
};
