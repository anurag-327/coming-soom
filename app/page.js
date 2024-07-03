"use client";
import Image from "next/image";
// import Countdown from "react-countdown";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


export default function Home() {
  const Completionist = () => <span>You are good to go!</span>;
  return (<>
    <header className="flex rounded-md text-black bg-white  items-center p-2 z-[100] border-b justify-between w-full">
      <a href="/" className="flex items-center gap-2 text-lg sm:ml-4">
        <Image src="/codolio.svg" alt="Codolio" width={30} height={30} />
        <div>
          <span className="font-bold">Cod</span>
          <span className="font-bold text-orange-400">
            olio{" "}
          </span>
        </div>
      </a>
    </header>
    <main className="overflow-hidden mx-auto  :bg-dark bg-white dark:text-white min-h-[90vh] lg:min-h-[86vh] xl:p-8 ">
      <div className="flex relative flex-col items-center w-full min-h-[90vh] lg:min-h-[86vh] gap-4 font-sans sm:gap-2 xl:flex-row">
        <div className="flex z-[100] text-black dark mt-2 lg:mt-0 items-center md:items-start flex-col lg:min-w-[600px]  w-full gap-2 p-0 sm:gap-4 sm:p-8">
          <div className="flex flex-wrap gap-1 mt-4 text-xl font-bold sm:gap-2 sm:mt-0 sm:text-3xl md:text-4xl lg:text-4xl">
            <span>Coding</span>
            <span>+</span>
            <span className="text-orange-400">Portfolio</span>
            <span>=</span>
            <div>
              <span>Cod</span>
              <span className="text-orange-400">olio</span>
            </div>
          </div>
          <div className="flex flex-col items-center font-bold md:items-start text-7xl sm:text-8xl">
            <span>Coming</span>
            <span className="italic">Soon..</span>
          </div>
          <div>
            <p className="text-2xl font-bold text-center text-gray-500 md:text-start sm:text-3xl">
              We are currently cooking your <br /> <span className="text-gray-800">All in one</span> Portfolio Tracker.
            </p>
          </div>
          <div>

          </div>
        </div>
        {/* <div className="flex items-center justify-center w-[50rem] min-h-[80vh]">
          <DotLottieReact
            src="https://lottie.host/8d62dcef-758e-485f-aeb3-1875a885c203/WZ3Gc3T49h.json"
            background="transparent"
            speed="1"
            loop
            autoplay
            style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center" }}
          />
        </div> */}
        <div className="top-0 flex items-center justify-center w-full bg-no-repeat bg-contain xl:absolute xl:w-fit -right-10">
          <img src="/blob-2.PNG" alt="blob" className="absolute w-full scale-[2] right-[50%]" />
          <img
            src="/codolio_logo.svg"
            rendering="crispEdges"
            alt="codolio"
            className=" w-[24rem] h-[24rem] mt-10 md:mt-20 ml-8 sm:ml-0 sm:mr-8 md:w-[30rem] md:h-[30rem] lg:w-[45rem] -rotate-12 lg:h-[45rem] "
          />
        </div>
      </div>
    </main>
  </>
  );
}
