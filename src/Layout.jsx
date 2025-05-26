import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
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
        <p>© 2025 My Store</p>
      </footer>
    </>
  );
};

export default Layout;
