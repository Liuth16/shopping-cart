import styles from "../styles/hero.module.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

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
        <h1 className={styles["title"]}>Discover Your Style</h1>
        <p className={styles["subtitle"]}>
          Explore our curated collection of premium products. 
          Quality meets style in every piece we offer.
        </p>
        <Link to="/products" className={styles["ctaButton"]}>
          Shop Now
        </Link>
      </div>
    </section>
  );
};
