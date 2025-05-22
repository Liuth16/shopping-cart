import "./App.css";
import { DataProvider } from "./features/DataProvider";
import { ProductCard } from "./components/ProductCard";
import { ProductGrid } from "./components/ProductGrid";

function App() {
  return (
    <DataProvider>
      <ProductGrid />
    </DataProvider>
  );
}

export default App;
