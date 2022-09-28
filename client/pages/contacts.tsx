import type { NextPage } from "next";
import Head from "next/head";

import AboutBG from "../components/AboutBG";

import MainLayout from "../layouts/MainLayout";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="fixed h-screen w-full pt-24 z-0 ">
        <div className="w-full h-full bg-black">
          <AboutBG caption="Github diogomotapinto">
            <div className="text-2xl text-white font-bold">
              Github diogomotapinto
            </div>
          </AboutBG>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
