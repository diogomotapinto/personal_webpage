import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Nav.module.scss";
const Nav = () => {
  const router = useRouter();

  return (
    <div className={styles.navGrid}>
      <nav className={styles.navStyle}>
        <Link passHref={true} href="/">
          <span className={styles.logoName}>DL.</span>
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
                router.pathname === "/contact" ? "text-sky-600" : ""
              }`}
            >
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
