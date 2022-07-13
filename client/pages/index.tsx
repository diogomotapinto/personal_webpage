import type { NextPage } from "next";
import Center from "../components/Center";
import Cols from "../components/Cols/Cols";
import Container from "../components/Container/Container";
import MainLayout from "../layouts/MainLayout";
import styles from "../styles/index.module.scss";

const Home: NextPage = () => {
  return (
    <div className="h-screen w-full">
      <MainLayout>
        <div className={styles.rightContent}>
          <div className={styles.text}>
            <div className={styles.spanCol}>
              <span>Hi! I&apos;m</span>
              <span>Diogo Mota</span>
            </div>
            <div className={styles.fullstack}>Full Stack</div>
          </div>
          <div className={styles.midCont}>
            <span>
              Worked as a professional software engineer since 2021 and have
              been developing intelligent solutions for some years prior
            </span>
          </div>
          <div className={styles.rowButton}>
            <button className={styles.hireMe}>Hire me</button>
            <button className={styles.timeline}>Timeline </button>
          </div>
        </div>
        <div></div>
      </MainLayout>
    </div>
  );
};

export default Home;
