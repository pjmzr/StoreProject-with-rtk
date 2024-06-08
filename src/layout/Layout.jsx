import { Link } from "react-router-dom";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { useSelector } from "react-redux";

import styles from "./Layout.module.css";

function Layout({ children }) {

  const state = useSelector(store => store.cart)
  return (
    <>
      <header className={styles.header}>
        <Link to="/products">PJMZRShop</Link>
        <Link to="/checkout">
          <div>
            <PiShoppingCartSimpleBold />
           {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
          </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed By Pejman With Love</p>
      </footer>
    </>
  );
}

export default Layout;
