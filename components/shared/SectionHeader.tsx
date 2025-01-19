import React from "react";

type SectionHeaderProps = {
  Title: React.ReactNode; // Allows JSX elements in the title
  Description: string;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  Title,
  Description,
}) => {
  return (
    <div className="flex flex-col md:gap-10 gap-5 pt-10 items-center w-full">
      <h1 className="md:w-[65%] w-[80%] text-center text-3xl md:text-6xl font-medium">
        {Title}
      </h1>
      <p className="md:w-[45%] w-[80%] text-center text-[#8c8983] ">
        {Description}
      </p>
    </div>
  );
};

export default SectionHeader;
