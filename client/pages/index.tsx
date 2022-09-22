import type { NextPage } from "next";
import Interactive from "../components/Interactive";
import MainLayout from "../layouts/MainLayout";
import styles from "../styles/index.module.scss";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <div className="h-screen pt-24 grid justify-items-center content-center">
        <div>
          <p className="text-8xl text-bold text-center">
            World&apos;s best full-stack developer
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
