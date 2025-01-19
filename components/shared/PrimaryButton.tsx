import Link from "next/link";
import React from "react";

type PrimaryButtonProps = {
  text: string;
  to: string;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text, to }) => {
  return (
    <Link
      href={to}
      className="bg-black hover:bg-red-500 duration-200 text-sm xl:text-base h-8 flex rounded-full md:w-fit text-white w-full items-center justify-center p-6 font-medium"
    >
      {text}
    </Link>
  );
};

export default PrimaryButton;
