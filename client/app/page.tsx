import { MainCanvas } from "./shared/main-canvas";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <div className="h-screen w-full relative">
        <MainCanvas />
        {/* <Overlay /> */}
      </div>
      {/* <div className="h-screen w-full bg-white"></div> */}
    </div>
  );
}

function Overlay() {
  return (
    <div className="top-0 absolute w-full">
      <div className="border-b-2 border-slate-500 hover:underline hover:cursor-pointer font-medium text-xl">
        ABS
      </div>
    </div>
  );
}
