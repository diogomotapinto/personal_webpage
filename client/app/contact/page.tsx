export default function Contact() {
  return (
    <div className="h-screen w-full grid grid-cols-2">
      <div className="h-full w-full flex flex-col justify-center p-16 sm:hidden"></div>
      <div className="h-full w-full flex flex-col justify-center p-16 ">
        <h1 className="text-[8em] md:text-6xl font-bold">Contacts</h1>
        <h2 className="text-[6em]  md:text-2xl font-semibold">Email</h2>
        <h3 className="sm:text-base md:text-xl font-normal">
          diogomotapinto@gmail.com
        </h3>
        <h2 className="sm:text-base  md:text-2xl font-semibold">Number</h2>
        <h3 className="sm:text-base md:text-xl font-normal">
          +351 915 411 533
        </h3>
        <h2 className="sm:text-base md:text-2xl font-semibold">Github</h2>
        <a
          className=" sm:text-base md:text-xl font-normal text-blue-500 underline"
          href="https://github.com/diogomotapinto"
        >
          https://github.com/diogomotapinto
        </a>
        <h2 className="sm:text-base md:text-2xl font-semibold">LinkedIn</h2>
        <a
          className="sm:text-base md:text-xl font-normal text-blue-500 underline"
          href="https://www.linkedin.com/in/diogo-mota-pinto-a2b961161/"
        >
          https://www.linkedin.com/in/diogo-mota-pinto-a2b961161/
        </a>
      </div>
    </div>
  );
}
