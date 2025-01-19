import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

type LearnMoreButtonProps = {
  to: string;
};

const LearnMoreButton: React.FC<LearnMoreButtonProps> = ({ to }) => {
  return (
    <Link
      href={to}
      className="group flex md:justify-center justify-between md:gap-4 duration-200 hover:border-black items-center border border-red-500 rounded-full py-6 pl-6 pr-1 md:w-fit w-full h-8 "
    >
      {" "}
      <span className="md:hidden"></span>
      <span className=" text-black duration-200">LML Digitals</span>
      <span className="rounded-full text-white bg-red-500 group-hover:ml-2 group-hover:bg-black duration-200 flex items-center justify-center p-3">
        <FaArrowRightLong />
      </span>
    </Link>
  );
};

export default LearnMoreButton;
