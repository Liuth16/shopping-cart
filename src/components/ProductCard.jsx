import styles from "../styles/productCard.module.css";
import PropTypes from "prop-types";
import { Button } from "./Button";
import { InputField } from "./InputField";
import { useState } from "react";
import { useCart } from "../features/useHooks";
import { Toast } from "./Toast";

export const ProductCard = ({ product }) => {
  const { title, price, image, rating, id, description } = product;
  const { addToCart, cart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [showToast, setShowToast] = useState(false)

  const handleQuantityChange = (e) => {
    const value = e.target.value;

    if (value === "") {
      setQuantity("");
      return;
    }

    const parsed = parseInt(value, 10);

    if (!isNaN(parsed) && parsed > 0) {
      setQuantity(parsed);
    }
  };

  const handleBlur = () => {
    if (!quantity || quantity < 1) {
      setQuantity(1);
    }
  };

  const handleAddToCart = () => {
    const productToCart = {
      id,
      title,
      price,
      description,
      image,
    };
    addToCart(productToCart, quantity);
    setShowToast(true)
    setTimeout(() => {
      setShowToast(false)
    }, 1500);
    console.log(cart)
  };

  return (
    <>
    <Toast message={"Added to cart!"} show={showToast}/>
    <div className={styles.productCard}>
      <img src={image} alt={title} width="100" />
      <h3>{title}</h3>
      <p className={styles.price}>${price}</p>
      <p className={styles.rating}>
        Rating: {rating.rate} ⭐ ({rating.count} reviews)
      </p>
      <InputField
        id={id}
        value={quantity}
        label={"Quantity"}
        type={"number"}
        min={1}
        step={1}
        onChange={handleQuantityChange}
        onBlur={handleBlur}
        inputClass={"productInput"}
        labelClass={"productLabel"}
      />
      <Button text={"Add to cart"} onClick={handleAddToCart} buttonClass="addToCart" />
    </div>
    </>
  );
};
