import React from "react";
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} All rights reserved.</p>
      <p>Made with ❤️ by Nikoloz Asanidze</p>
    </footer>
  );
};

export default Footer;
