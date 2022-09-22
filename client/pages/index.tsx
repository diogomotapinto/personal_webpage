import type { NextPage } from "next";
import Center from "../components/Center";
import Cols from "../components/Cols/Cols";
import Console from "../components/Console";
import Container from "../components/Container/Container";
import MainLayout from "../layouts/MainLayout";
import styles from "../styles/index.module.scss";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <div className={styles.firstSection}>
        <div className={styles.rightContent}>
          <div className={styles.textCont}>
            <div className={styles.spanCol}>
              <span>👋 Hi! I&apos;m Diogo </span>
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
            <button className={styles.hireMe}>Contact me</button>
            <button className={styles.timeline}>Timeline </button>
          </div>
          <Console></Console>
          <div className={styles.mouseCont}>
            <div className={styles.movingmouseholder}>
              <div className={styles.mouse}>
                <div className={styles.mousebutton}>&nbsp;</div>
              </div>
              <div className={styles.text}>SCROLL DOWN TO EXPLORE MORE</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.firstSection}>as</div>
    </MainLayout>
  );
};

export default Home;
