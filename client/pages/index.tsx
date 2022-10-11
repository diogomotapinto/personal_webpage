import type { NextPage } from "next";
import Interactive from "../components/Interactive";
import MainLayout from "../layouts/MainLayout";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <div className="h-screen w-full">
        <Interactive></Interactive>
        {/* <div>
          <p className="text-8xl text-bold text-center">
            World&apos;s best full-stack developer
          </p>
        </div> */}
      </div>
    </MainLayout>
  );
};

export default Home;
