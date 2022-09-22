import styles from "./Nav.module.scss";
const Nav = () => {
  return (
    <div className={styles.navGrid}>
      <nav className={styles.navStyle}>
        <span className={styles.logoName}>Diogo</span>
        <span className={styles.dot}>.</span>
      </nav>
    </div>
  );
};

export default Nav;
