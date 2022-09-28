import type { NextPage } from "next";
import AboutBG from "../components/AboutBG";

import MainLayout from "../layouts/MainLayout";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <div className="fixed h-screen w-full pt-24 z-0 overflow-y-scroll">
        <AboutBG>
          <div>hey</div>
        </AboutBG>
      </div>
    </MainLayout>
  );
};

export default Home;
