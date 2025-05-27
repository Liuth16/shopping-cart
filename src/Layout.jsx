import { Outlet, Link } from "react-router-dom";
import styles from "./styles/layout.module.css";

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <ul className={styles["testList"]}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet /> {/* This renders the matched child route */}
      </main>
      <footer>
        <div className="footerLinksContainer">
          <a href="#">Link 1</a>
          <a href="#">Link 1</a>
          <a href="#">Link 1</a>
          <a href="#">Link 1</a>
        </div>
        <div className="footerSocialsContainer">
          <a href="">
            <img src="../src/assets/twitter.svg" alt="" />
          </a>
          <a href="">
            <img src="../src/assets/instagram.svg" alt="" />
          </a>
          <a href="">
            <img src="../src/assets/facebook.svg" alt="" />
          </a>
        </div>
        <p>© 2025 My Store</p>
      </footer>
    </>
  );
};

export default Layout;
