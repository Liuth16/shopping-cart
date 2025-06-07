import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CartItemsList } from "../components/CartItemsList";

// Mock cart data
const mockCart = [
  {
    id: 1,
    title: "Test Product 1",
    description: "Description 1",
    price: 10.99,
    image: "test1.jpg",
    quantity: 2,
    total: 21.98
  },
  {
    id: 2,
    title: "Test Product 2",
    description: "Description 2",
    price: 15.99,
    image: "test2.jpg",
    quantity: 1,
    total: 15.99
  }
];

describe("CartItemsList", () => {
  it("renders empty cart message when cart is empty", () => {
    render(
      <CartItemsList 
        cart={[]} 
        removeFromCart={() => {}} 
        updateQuantity={() => {}} 
      />
    );
    
    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
  });

  it("renders cart items when cart has products", () => {
    render(
      <CartItemsList 
        cart={mockCart} 
        removeFromCart={() => {}} 
        updateQuantity={() => {}} 
      />
    );

    // Check if all products are rendered
    mockCart.forEach(item => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.description)).toBeInTheDocument();
 // Look for the individual price within the price element
 const priceElement = screen.getByText(new RegExp(`^\\$${item.price}$`));
 expect(priceElement).toBeInTheDocument();
 
 // Look for the total with the "Total:" prefix
 const totalElement = screen.getByText(new RegExp(`Total: \\$${item.total.toFixed(2)}`));
 expect(totalElement).toBeInTheDocument();
    });

    // Check if all quantity inputs are rendered
    const quantityInputs = screen.getAllByRole("spinbutton");
    expect(quantityInputs).toHaveLength(mockCart.length);
    quantityInputs.forEach((input, index) => {
      expect(input).toHaveValue(mockCart[index].quantity);
    });

    // Check if all remove buttons are rendered
    const removeButtons = screen.getAllByRole("button", { name: /remove/i });
    expect(removeButtons).toHaveLength(mockCart.length);
  });

  // it("calls updateQuantity when quantity is changed", async () => {
  //   const user = userEvent.setup();
  //   const updateQuantity = vi.fn();
    
  //   render(
  //     <CartItemsList 
  //       cart={mockCart} 
  //       removeFromCart={() => {}} 
  //       updateQuantity={updateQuantity} 
  //     />
  //   );

  //   const quantityInput = screen.getAllByRole("spinbutton")[0];
  //   await user.increment(quantityInput)
  //   await user.type(quantityInput, "3");

  //   expect(updateQuantity).toHaveBeenCalledWith(mockCart[0].id, 3);
  // });

  it("calls removeFromCart when remove button is clicked", async () => {
    const user = userEvent.setup();
    const removeFromCart = vi.fn();
    
    render(
      <CartItemsList 
        cart={mockCart} 
        removeFromCart={removeFromCart} 
        updateQuantity={() => {}} 
      />
    );

    const removeButton = screen.getAllByRole("button", { name: /remove/i })[0];
    await user.click(removeButton);

    expect(removeFromCart).toHaveBeenCalledWith(mockCart[0].id);
  });

  // it("does not update quantity when invalid value is entered", async () => {
  //   const user = userEvent.setup();
  //   const updateQuantity = vi.fn();
    
  //   render(
  //     <CartItemsList 
  //       cart={mockCart} 
  //       removeFromCart={() => {}} 
  //       updateQuantity={updateQuantity} 
  //     />
  //   );

  //   const quantityInput = screen.getAllByRole("spinbutton")[0];
  //   await user.clear(quantityInput);
  //   await user.type(quantityInput, "0");

  //   expect(updateQuantity).not.toHaveBeenCalled();
  // });
});