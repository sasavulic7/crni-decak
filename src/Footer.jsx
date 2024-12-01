import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faInstagram,
  faTiktok
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerLeft}>
            <h2>Crni Decak</h2>
            <p>&copy; {year}. Sva prava zadržana.</p>
          </div>
          <div className={styles.footerRight}>
            <ul>
              <li>
                <Link to="/">Pocetna</Link>
              </li>
              <li>
                <Link to="/Price">Price</Link>
              </li>
              <li>
                <Link to="/o-nama">O nama</Link>
              </li>
              <li>
                <Link to="Blog">Blog</Link>
              </li>
              <li>
                <Link to="/kontakt">Kontakt</Link>
              </li>
            </ul>
            <div className={styles.socialMedia}>
              <a
                href="https://www.youtube.com/@CrniDecak"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faYoutube} className={styles.icon} />
              </a>
              <a
                href="https://www.instagram.com/crnidecak.horor_price/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
              </a>
              <a
                href="https://www.tiktok.com/@crnidecak"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTiktok} className={styles.icon} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
