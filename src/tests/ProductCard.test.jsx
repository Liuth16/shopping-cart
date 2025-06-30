import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ProductCard } from "../components/ProductCard";
import { CartContext } from "../features/allContext";
import { describe, expect, it, vi } from "vitest";
import React from "react";

// Dummy product
const product = {
  id: 1,
  title: "Test Product",
  price: 10,
  description: "desc",
  image: "img.jpg",
  rating: { rate: 4.5, count: 20 },
};

function renderWithCartContext(ui, cartValue = {}, onAddToCart = () => {}) {
  return render(
    <CartContext.Provider value={cartValue}>
      {React.cloneElement(ui, { onAddToCart })}
    </CartContext.Provider>
  );
}

describe("ProductCard", () => {
  it("renders product info", () => {
    renderWithCartContext(<ProductCard product={product} />, {
      addToCart: () => {},
      cart: [],
    });
    expect(screen.getByText(product.title)).toBeInTheDocument();
    expect(screen.getByText(`$${product.price}`)).toBeInTheDocument();
    expect(screen.getByText(/rating: 4.5/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/quantity/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /add to cart/i })
    ).toBeInTheDocument();
  });

  it("changes quantity with input", async () => {
    const user = userEvent.setup();
    renderWithCartContext(<ProductCard product={product} />, {
      addToCart: () => {},
      cart: [],
    });
    const input = screen.getByLabelText(/quantity/i);
    await user.clear(input);
    await user.type(input, "3");
    expect(input).toHaveValue(3);
  });

  it("resets quantity to 1 if input is empty or less than 1 on blur", async () => {
    const user = userEvent.setup();
    renderWithCartContext(<ProductCard product={product} />, {
      addToCart: () => {},
      cart: [],
    });
    const input = screen.getByLabelText(/quantity/i);
    await user.clear(input);
    await user.tab(); // triggers blur
    expect(input).toHaveValue(1);

    await user.clear(input);
    await user.type(input, "0");
    await user.tab();
    expect(input).toHaveValue(1);
  });

  it("calls addToCart and onAddToCart with correct arguments", async () => {
    const user = userEvent.setup();
    const addToCart = vi.fn();
    const onAddToCart = vi.fn();
    renderWithCartContext(
      <ProductCard product={product} />,
      {
        addToCart,
        cart: [],
      },
      onAddToCart
    );

    const input = screen.getByLabelText(/quantity/i);
    await user.clear(input);
    await user.type(input, "2");
    await user.click(screen.getByRole("button", { name: /add to cart/i }));

    expect(addToCart).toHaveBeenCalledWith(
      expect.objectContaining({ id: product.id }),
      2
    );
    expect(onAddToCart).toHaveBeenCalled();
  });
});
