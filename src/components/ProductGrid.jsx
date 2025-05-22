import { useData } from "../features/useData";
import { ProductCard } from "./ProductCard";
import styles from "../styles/productCard.module.css";

export const ProductGrid = () => {
  const { data, error, loading } = useData();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={styles.productGrid}>
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
