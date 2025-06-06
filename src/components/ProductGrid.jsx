import { useData } from "../features/useHooks";
import { ProductCard } from "./ProductCard";
import { Toast } from "./Toast";
import styles from "../styles/productCard.module.css";
import { useState } from "react";

export const ProductGrid = () => {
  const { data, error, loading } = useData();
  const [showToast, setShowToast] = useState(false);

  const handleShowToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 1500);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Toast message="Added to cart!" show={showToast} />
      <div className={styles.productGrid}>
        {data.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={handleShowToast}
          />
        ))}
      </div>
    </>
  );
};