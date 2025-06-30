import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useContext } from "react";
import CartProvider from "../features/CartProvider";
import { CartContext } from "../features/allContext";
import { describe, expect, it } from "vitest";

// Dummy product
const product = {
  id: 1,
  title: "Test Product",
  price: 10,
  description: "desc",
  image: "img.jpg",
};

function Consumer() {
  const { cart, addToCart, removeFromCart, updateQuantity } =
    useContext(CartContext);
  return (
    <div>
      <div data-testid="cart">{JSON.stringify(cart)}</div>
      <button onClick={() => addToCart(product, 2)}>Add</button>
      <button onClick={() => addToCart(product, 1)}>AddOne</button>
      <button onClick={() => removeFromCart(product.id)}>Remove</button>
      <button onClick={() => updateQuantity(product.id, 5)}>Set5</button>
      <button onClick={() => updateQuantity(product.id, 0)}>Set0</button>
    </div>
  );
}

describe("CartProvider", () => {
  it("cart is empty by default", () => {
    render(
      <CartProvider>
        <Consumer />
      </CartProvider>
    );
    expect(screen.getByTestId("cart").textContent).toBe("[]");
  });

  it("adds a product to the cart", async () => {
    const user = userEvent.setup();
    render(
      <CartProvider>
        <Consumer />
      </CartProvider>
    );
    await user.click(screen.getByText("Add"));
    const cart = JSON.parse(screen.getByTestId("cart").textContent);
    expect(cart).toHaveLength(1);
    expect(cart[0].quantity).toBe(2);
    expect(cart[0].total).toBe(20);
  });

  it("increments quantity if product is added again", async () => {
    const user = userEvent.setup();
    render(
      <CartProvider>
        <Consumer />
      </CartProvider>
    );
    await user.click(screen.getByText("Add"));
    await user.click(screen.getByText("AddOne"));
    const cart = JSON.parse(screen.getByTestId("cart").textContent);
    expect(cart).toHaveLength(1);
    expect(cart[0].quantity).toBe(3);
    expect(cart[0].total).toBe(30);
  });

  it("removes a product from the cart", async () => {
    const user = userEvent.setup();
    render(
      <CartProvider>
        <Consumer />
      </CartProvider>
    );
    await user.click(screen.getByText("Add"));
    await user.click(screen.getByText("Remove"));
    const cart = JSON.parse(screen.getByTestId("cart").textContent);
    expect(cart).toHaveLength(0);
  });

  it("updates quantity and total", async () => {
    const user = userEvent.setup();
    render(
      <CartProvider>
        <Consumer />
      </CartProvider>
    );
    await user.click(screen.getByText("Add"));
    await user.click(screen.getByText("Set5"));
    const cart = JSON.parse(screen.getByTestId("cart").textContent);
    expect(cart[0].quantity).toBe(5);
    expect(cart[0].total).toBe(50);
  });

  it("does not set quantity below 1", async () => {
    const user = userEvent.setup();
    render(
      <CartProvider>
        <Consumer />
      </CartProvider>
    );
    await user.click(screen.getByText("Add"));
    await user.click(screen.getByText("Set0"));
    const cart = JSON.parse(screen.getByTestId("cart").textContent);
    expect(cart[0].quantity).toBe(1);
    expect(cart[0].total).toBe(10);
  });
});
