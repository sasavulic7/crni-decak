import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        <div className={styles.logo}>Crni Dečak</div>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
          <li>
            <Link to="/">Početna</Link>
          </li>
          <li>
            <Link to="/price">Priče</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/kontakt">Kontakt</Link>
          </li>
        </ul>

        {/* Hamburger dugme za mobilne uređaje */}
        <div className={styles.hamburger} onClick={toggleMenu}>
          &#9776;
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
