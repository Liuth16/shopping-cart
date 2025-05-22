import styles from "../styles/productCard.module.css";

export const ProductCard = ({ product }) => {
  const { title, price, image, rating } = product;

  return (
    <div className={styles.productCard}>
      <img src={image} alt={title} width="100" />
      <h3>{title}</h3>
      <p className={styles.price}>${price}</p>
      <p className={styles.rating}>
        Rating: {rating.rate} ⭐ ({rating.count} reviews)
      </p>
    </div>
  );
};
