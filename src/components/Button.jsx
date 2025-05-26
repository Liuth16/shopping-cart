import styles from "../styles/Button.module.css";

export const Button = ({ onClick, text, buttonClass }) => {
  return (
    <button onClick={onClick} className={styles[buttonClass]}>
      {text}
    </button>
  );
};
