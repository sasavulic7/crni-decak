import styles from "./Error.module.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Error() {
  return (
    <div>
      <Navbar />
      <h1 className={styles.title}>Ne postoji stranica koju tražite. 😢</h1>
      <Footer />
    </div>
  );
}

export default Error;
