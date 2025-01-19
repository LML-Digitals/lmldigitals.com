import FaqQuestions from "@/components/FAQ";
import ReadMoreButton from "@/components/shared/ReadMoreButton";
import SectionHeader from "@/components/shared/SectionHeader";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="h-fit w-full flex flex-col py-20 gap-14 items-center">
        <ReadMoreButton />
        {/* <div className="felx flex-col items-center justify-center text-black md:text-8xl text-4xl  font-medium">
          <h1 className="text-center">Find Answers to</h1>
          <h1 className="text-center">
            Your <span className="text-red-500">Questions</span>
          </h1>
        </div> */}
        <SectionHeader
          Description=""
          Title={
            <>
              Find Answers to Your{" "}
              <span className="text-red-500">Questions</span>
            </>
          }
        />
        <FaqQuestions />
      </div>
    </div>
  );
};

export default page;
