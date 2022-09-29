import type { NextPage } from "next";
import Head from "next/head";

import AboutBG from "../components/AboutBG";

import MainLayout from "../layouts/MainLayout";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <div className="fixed h-screen w-full pt-24 z-0 ">
        <div className="w-full h-full">
          <AboutBG></AboutBG>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
