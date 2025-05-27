import styles from "../styles/hero.module.css";
import { useEffect } from "react";

export const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const parallax = document.querySelector(`.${styles["hero-bg"]}`);
      if (parallax) {
        parallax.style.transform = `translateY(${scrolled * -0.8}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className={styles["heroText"]}>
      <div className={styles["hero-bg"]}></div>
      <div className={styles["content"]}>
        <h1>Hero Section</h1>
        <p>Some cool text over the image</p>
      </div>
    </section>
  );
};
