import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Nav.module.scss";
const Nav = () => {
  const router = useRouter();

  return (
    <div className={styles.navGrid}>
      <nav className={styles.navStyle}>
        <Link passHref={true} href="/">
          <span className={styles.logoName}>D.</span>
        </Link>
        <div className="flex flex-row">
          <ul className="list-none flex flex-row">
            <li
              className={`${
                router.pathname === "/about" ? "text-sky-600" : ""
              }`}
            >
              <Link href="/about">About me</Link>
            </li>
            <li
              className={`${
                router.pathname === "/contacts" ? "text-sky-600" : ""
              }`}
            >
              <Link href="/contacts">Contacts</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
