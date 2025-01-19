import Link from "next/link";
import { AnimatedLMLDigitalsBadge } from "../LmlDigitalsBadge";
import SocialsProfiles from "../SocialsProfiles";
import { Button } from "../ui/button";
import LearnMoreButton from "../shared/LearnMoreButton";
import PrimaryButton from "../shared/PrimaryButton";

function Hero() {
  return (
    <div className="flex flex-col-reverse lg:flex-row lg:mt-10 2xl:mt-10 lg:mx-20 xl:mx-16 2xl:bg-transparent 2xl:mx-60 items-center justify-center transition-all">
      {/* Left Section */}
      <div className="flex-1 flex flex-col items-center text-center  gap-6 w-full p-6 lg:p-0">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-medium">
          Transform your <span className="text-red-500">business</span> with our
          innovative digital marketing and software{" "}
          <span className="text-red-500">solutions</span>
        </h1>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row w-full justify-center  gap-4 mt-6">
          <PrimaryButton text="Browse Our Services" to="/services" />
          <LearnMoreButton to="/about" />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex justify-center items-center gap-6 mt-6 lg:mt-0 p-6">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-3/4 "
        >
          <source src="/video2.mp4" type="video/mp4" />
        </video>

        <div className="mt-4 lg:mt-0">
          <SocialsProfiles />
        </div>
      </div>
    </div>
  );
}

function MediumSizeHero() {
  return (
    <div className="hidden mt-8 sm:mx-28 sm:flex sm:flex-col sm:items-center sm:justify-center space-y-10 lg:hidden transition-all">
      <div className="flex items-center justify-between  ">
        <video className="w-96" autoPlay loop muted>
          <source src={"/video2.mp4"} type="video/mp4" />
        </video>

        <SocialsProfiles />
      </div>
      <div className="flex flex-col items-center gap-8">
        <AnimatedLMLDigitalsBadge />
        <h1 className="sm:text-4xl  lg:text-4xl xl:text-5xl  2xl:text-6xl text-center lg:text-start  2xl:w-3/4 leading-tight font-bold">
          Transform your <span className="text-red-500">business</span> with our
          innovative digital marketing and software{" "}
          <span className="text-red-500">solutions</span>
          <span className="text-yellow-500">.</span>
        </h1>

        <div className="flex items-center">
          <Link href={"/services"}>
            <Button className="h-11 w-56 transition-all hover:bg-red-500">
              Browse Our Services
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
function MobileHeroSize() {
  return (
    <div className=" mt-10 mx-2 flex flex-col items-center justify-center   sm:hidden  transition-all ">
      <div className="flex flex-col items-center justify-center gap-8">
        <AnimatedLMLDigitalsBadge />
        <h1 className="text-3xl leading-tight font-bold text-center ">
          Transform your <span className="text-red-500">business</span> with our
          innovative digital marketing and software{" "}
          <span className="text-red-500">solutions</span>
          <span className="text-yellow-500">.</span>
        </h1>

        <div className="flex flex-col justify-center ">
          <Link href={"/services"}>
            <Button className="h-11 w-56 transition-all hover:bg-red-500">
              Browse Our Services
            </Button>
          </Link>
        </div>
      </div>
      <div>
        <video className="w-96" autoPlay loop muted>
          <source src={"/video2.mp4"} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Hero;
