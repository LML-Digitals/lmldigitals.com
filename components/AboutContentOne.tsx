import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import aboutGroup from "@/public/groupAbout.png";
import aboutImageOne from "@/public/aboutImage1.jpg";
import Image from "next/image";
import SectionHeader from "./shared/SectionHeader";

function AboutContentOne() {
  const words = [
    {
      text: "Transform",
    },
    {
      text: "your",
    },
    {
      text: "digital",
    },
    {
      text: "presence",
    },
    {
      text: "with",
    },
    {
      text: "LML Digitals.",
      className: "text-red-500 dark:text-red-500",
    },
  ];
  return (
    <div className="mx-2 mt-20 flex flex-col gap-12 sm:gap-10">
      <SectionHeader
        Description=" Empowering brands through digital innovation."
        Title={
          <>
            Transform Your <span className="text-red-500">Digital</span>{" "}
            Presence With <span className="text-red-500">LML Digitals</span>
          </>
        }
      />

      <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-8 lg:gap-16 mt-10">
        <Image
          src={aboutImageOne}
          width={500}
          height={500}
          alt="about_image"
          className="rounded-2xl hover:scale-105 transition-all"
        />
        <div className="flex flex-col gap-4 w-full lg:w-1/3 px-4 lg:px-0">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-medium text-neutral-900 dark:text-neutral-100 text-center md:text-left">
            We’re Specialists, Not{" "}
            <span className="text-red-500">Generalists</span>
          </h1>
          <p className="text-sm sm:text-base leading-loose">
            At LML Digitals, we prioritize expertise over quantity. By focusing
            exclusively on marketing and software development, we ensure that
            your brand receives the high-quality service it deserves. Our
            specialists are dedicated to their respective fields, from social
            media strategy to software engineering. This allows us to create
            custom-built teams tailored to your specific needs and challenges,
            providing you with the perfect solutions for your business growth.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutContentOne;
