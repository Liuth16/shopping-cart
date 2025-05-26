import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import ErrorPage from "./ErrorPage";

const routes = [
  {
    path: "/",
    element: <Layout />, // Common layout with header/footer/navigation
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, // same as path: ""
        element: <HomePage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
];

export default routes;
