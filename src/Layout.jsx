import { Outlet, Link } from "react-router-dom";
import styles from "./styles/layout.module.css";

const Layout = () => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <Link to="/" className={styles.navLink}>Home</Link>
            </li>
            <li>
              <Link to="/products" className={styles.navLink}>Products</Link>
            </li>
            <li>
              <Link to="/cart" className={styles.navLink}>Cart</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLinksContainer}>
            <a href="#">About Us</a>
            <a href="#">Contact</a>
            <a href="#">Shipping Policy</a>
            <a href="#">Returns & Refunds</a>
          </div>
          <div className={styles.footerSocialsContainer}>
            <a href="#">
              <img src="../src/assets/twitter.svg" alt="Twitter" />
            </a>
            <a href="#">
              <img src="../src/assets/instagram.svg" alt="Instagram" />
            </a>
            <a href="#">
              <img src="../src/assets/facebook.svg" alt="Facebook" />
            </a>
          </div>
        </div>
        <p className={styles.copyright}>© 2025 My Store</p>
      </footer>
    </>
  );
};

export default Layout;
