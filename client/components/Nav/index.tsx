import styles from "./Nav.module.scss";
const Nav = () => {
  return (
    <div className={styles.navGrid}>
      <nav className={styles.navStyle}>
        <span className={styles.logoName}>D.</span>
        <div className="flex flex-row">
          <p>About me.</p>
          <p>Contacts.</p>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
