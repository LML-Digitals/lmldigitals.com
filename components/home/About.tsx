import React from "react";
import ReadMoreButton from "../shared/ReadMoreButton";
import SectionHeader from "../shared/SectionHeader";
import { FaQuoteLeft } from "react-icons/fa6";

const About = () => {
  const approachs = [
    {
      id: "1",
      title: "Thorough Discovery and Tailored Strategy Development",
      description:
        "Understand your unique needs and craft customized software and marketing strategies for optimal results.",
    },
    {
      id: "2",
      title: "Seamless Implementation and Performance Optimization",
      description:
        "Deliver high-quality software solutions and execute data-driven marketing campaigns, ensuring smooth integration and measurable growth.",
    },
    {
      id: "3",
      title: "Scalable Growth and Continuous Innovation",
      description:
        "Empower your business with innovative technologies and adaptive marketing solutions designed for long-term scalability and success.",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center pt-20">
      <div className="w-[80%] flex flex-col items-center">
        <ReadMoreButton />
        <SectionHeader
          Title={"Elevate Your Business with Our Three-Phase AI Approach"}
          Description={
            "Explore our three-phase approach to see how we drive growth and efficiency at every step."
          }
        />
      </div>
      <div className="w-full px-3 md:px-0 flex gap-5 flex-col md:flex-row items-center md:justify-center flex-wrap mt-20">
        {approachs.map((approch) => (
          <div className="group md:w-[30%] flex flex-col" key={approch.id}>
            <div className="h-96 rounded-md  group-hover:bg-[#1f1f1f] duration-200 bg-black flex flex-col items-start justify-around px-10 py-5">
              <h1 className="text-white text-3xl">{approch.title}</h1>
              <p className="text-gray-200 font-light">{approch.description}</p>
            </div>
            <div className="w-full flex justify-center items-center text-[180px] text-[#3f3f40] group-hover:text-[#ed5145] duration-200">
              0{approch.id}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
