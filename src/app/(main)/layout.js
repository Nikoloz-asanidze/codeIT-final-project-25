"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { usePathname } from "next/navigation";

function layout({ children }) {
  const pathname = usePathname();

    return (
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link
            className={`
              ${styles.link}
              ${
                pathname.includes ("/products") ? styles.activeLink : styles.inActiveLink
              }`
            }
            href="/products"
          >
            Products
          </Link>
          <Link 
            className={`
              ${styles.link}
              ${
                pathname.includes("/profile") ? styles.activeLink : styles.inActiveLink
              }`
            }
            href="/profile"
          >
            Profile
          </Link>
          <Link 
            className={`
              ${styles.link}
              ${
                pathname.includes("/cart") ? styles.activeLink : styles.inActiveLink
              }`
            }
            href="/cart"
          >
            Cart
          </Link>
        </nav>
        {children} 
      </div>
    );
}

export default layout;