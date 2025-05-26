import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import routes from "./routes.jsx";
import { DataProvider } from "./features/DataProvider.jsx";
import CartProvider from "./features/CartProvider.jsx";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </DataProvider>
  </StrictMode>
);
