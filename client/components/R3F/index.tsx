import type { NextPage } from "next";
import Box from "../Box";
import CameraController from "../CameraController";
import { Canvas } from "@react-three/fiber";

const Home: NextPage = () => {
  return (
    <div className="h-screen w-full">
      <div className="absolute z-10 font-bold text-lg text-white p-10">
        <p className="hover:text-cyan-500 cursor-pointer">Diogo Mota</p>
      </div>
      <Canvas className="h-full w-full bg-slate-800">
        <CameraController />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[0, 0, 0]} />
      </Canvas>
    </div>
  );
};

export default Home;
