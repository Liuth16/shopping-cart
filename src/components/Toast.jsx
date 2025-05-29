import styles from "../styles/toast.module.css";

export const Toast = ({ message, show }) => {
  return (
    <div className={`${styles.toast} ${show ? styles.show : ""}`}>
      <div className={styles.progressBarContainer}>
        <div className={`${styles.progressBar} ${show ? styles.animate : ""}`}></div>
      </div>
      <span>{message}</span>
    </div>
  );
};