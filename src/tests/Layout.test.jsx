import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Layout from "../Layout";

// Dummy component for nested routes
function DummyPage({ text }) {
  return <div>{text}</div>;
}

describe("Layout", () => {
  it("matches snapshot", () => {
    const { container } = render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  it("renders navigation links", () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );
    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /products/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /cart/i })).toBeInTheDocument();
  });

  it("renders footer links and social icons", () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );
    expect(screen.getByText(/about us/i)).toBeInTheDocument();
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
    expect(screen.getByText(/shipping policy/i)).toBeInTheDocument();
    expect(screen.getByText(/returns & refunds/i)).toBeInTheDocument();
    expect(screen.getByAltText(/twitter/i)).toBeInTheDocument();
    expect(screen.getByAltText(/instagram/i)).toBeInTheDocument();
    expect(screen.getByAltText(/facebook/i)).toBeInTheDocument();
  });

  it("renders children via Outlet", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<DummyPage text="Nested Content" />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(/nested content/i)).toBeInTheDocument();
  });

  it("navigates to Home, Products, and Cart when links are clicked", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<DummyPage text="Home Page" />} />
            <Route path="products" element={<DummyPage text="Products Page" />} />
            <Route path="cart" element={<DummyPage text="Cart Page" />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    // Home link
    await userEvent.click(screen.getByRole("link", { name: /home/i }));
    expect(screen.getByText(/home page/i)).toBeInTheDocument();

    // Products link
    await userEvent.click(screen.getByRole("link", { name: /products/i }));
    expect(screen.getByText(/products page/i)).toBeInTheDocument();

    // Cart link
    await userEvent.click(screen.getByRole("link", { name: /cart/i }));
    expect(screen.getByText(/cart page/i)).toBeInTheDocument();
  });
});