import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const ReadMoreButton = () => {
  return (
    <Link
      href="services"
      className="group font-medium border hover:cursor-pointer border-red-500 hover:border-black duration-200 text-lg rounded-full w-fit flex gap-2 items-center justify-center h-8 px-4 py-6"
    >
      <span className="group-hover:text-red-500 text-black duration-200">
        What We Offer
      </span>{" "}
      |{" "}
      <span className="text-[#8c8983] group-hover:text-red-400 duration-200">
        Read more
      </span>{" "}
      <span className="text-[#8c8983] group-hover:text-red-400 duration-200">
        <FaArrowRightLong />
      </span>
    </Link>
  );
};

export default ReadMoreButton;
