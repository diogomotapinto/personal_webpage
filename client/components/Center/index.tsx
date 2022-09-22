import { ReactNode } from "react";
import styles from "./Center.module.scss";

const Center = ({ children }: { children: ReactNode }) => {
  return <div className={styles.center}> {children} </div>;
};

export default Center;
