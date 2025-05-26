import "./App.css";
import { DataProvider } from "./features/DataProvider";
import CartProvider from "./features/CartProvider";
import { ProductGrid } from "./components/ProductGrid";
import { CartItemsList } from "./components/CartItemsList";
import Layout from "./Layout";

function App() {
  return (
    <DataProvider>
      <CartProvider>
        <ProductGrid />
        <CartItemsList />
      </CartProvider>
    </DataProvider>
  );
}

export default App;
