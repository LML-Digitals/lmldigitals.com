import React from "react";
import SectionHeader from "../shared/SectionHeader";

const DividerSection = () => {
  return (
    <div className=" h-[600px] justify-center flex flex-col md:gap-10 gap-5 pt-10 items-center w-full">
      <SectionHeader
        Title={
          <>
            Unleash <span className="text-red-500"> Growth</span> with
            Innovative Digital <span className="text-red-500"> Solutions</span>
          </>
        }
        Description={
          " Accelerate your business with cutting-edge software and digital marketing strategies that are dynamic, scalable, and tailored to your unique vision and goals."
        }
      />
    </div>
  );
};

export default DividerSection;
