"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./page.module.css";

function Layout({ children }) {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.logo}>Asana's Market</div>
        <div className={styles.navLinks}>
          <Link
            className={`${styles.link} ${
              pathname.includes("/products") ? styles.activeLink : ""
            }`}
            href="/products"
          >
            Products
          </Link>
          <Link
            className={`${styles.link} ${
              pathname.includes("/profile") ? styles.activeLink : ""
            }`}
            href="/profile"
          >
            Profile
          </Link>
          <Link
            className={`${styles.link} ${
              pathname.includes("/cart") ? styles.activeLink : ""
            }`}
            href="/cart"
          >
            Cart
          </Link>
        </div>
      </nav>
      {children}
    </div>
  );
}

export default Layout;
