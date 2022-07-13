import type { NextPage } from "next";
import Center from "../components/Center";
import Cols from "../components/Cols/Cols";
import Container from "../components/Container/Container";
import MainLayout from "../layouts/MainLayout";
import styles from "../styles/index.module.scss";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <div className={styles.firstSection}>
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
              I&apos;m a full stack developer based in Porto with a passion for
              building things that people love. I love to create things that
              make a difference in the world. I&apos;m a fast learner and a team
              player, always looking for new challenges and opportunities to
              learn and grow.
            </span>
          </div>
          <div className={styles.rowButton}>
            <button className={styles.hireMe}>Hire me</button>
            <button className={styles.timeline}>Timeline </button>
          </div>
        </div>
        <div></div>
      </div>
      <div className={styles.firstSection}>as</div>
    </MainLayout>
  );
};

export default Home;
