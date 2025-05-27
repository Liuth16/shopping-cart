import styles from "../styles/contentCard.module.css";

export const ContentCard = ({ icon, title, text, contentClass }) => {
  return (
    <div className={styles[contentClass]}>
      <img src={icon} alt={`${title} icon`} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};
