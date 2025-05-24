import styles from "../styles/productCard.module.css";
import PropTypes from "prop-types";

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

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
