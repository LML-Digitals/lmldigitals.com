import React from "react";
import SocialLinks from "./SocialLinks";
import CopyRight from "./CopyRight";
import Link from "next/link";
import { LoginButton } from "@/components/common/auth/auth";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white text-black pt-36 pb-0">
        <div className="container mx-auto max-w-screen-md px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-auto">
            {/* Explore Section */}
            <div className="flex flex-col justify-center items-center">
              <h3 className="font-medium text-black mb-4 text-2xl ">Explore</h3>
              <ul className="space-y-3 text-[#8c8983] flex flex-col justify-center items-center">
                <li className="hover:text-black hover:scale-110 transition-all duration-300">
                  <Link href="/">Home</Link>
                </li>
                <li className="hover:text-black hover:scale-110 transition-all duration-300">
                  <Link href="/about">About</Link>
                </li>
                <li className="hover:text-black hover:scale-110 transition-all duration-300">
                  <Link href="/services">Our Service</Link>
                </li>
              </ul>
            </div>

            {/* Support Section */}
            <div className="flex flex-col justify-center items-center">
              <h3 className="font-medium text-black mb-4 text-2xl">Support</h3>
              <ul className="space-y-3 text-[#8c8983] flex flex-col justify-center items-center">
                <li className="hover:text-black hover:scale-110 transition-all duration-300">
                  <Link href="/contact">Contact</Link>
                </li>
                <li className="hover:text-black hover:scale-110 transition-all duration-300">
                  <Link href="#">Pricing</Link>
                </li>
                <li className="hover:text-black hover:scale-110 transition-all duration-300">
                  <Link href="/faq">FAQ</Link>
                </li>
              </ul>
            </div>

            {/* Others Section */}
            <div className="flex flex-col  items-center">
              <h3 className="font-medium text-black mb-4 text-2xl">Others</h3>
              <ul className="space-y-3 text-[#8c8983] flex flex-col justify-center items-center">
                <li className="hover:text-black hover:scale-110 transition-all duration-300">
                  <Link href="#">Terms of Use</Link>
                </li>
                <li className="hover:text-black hover:scale-110 transition-all duration-300">
                  <Link href="#">Privacy Policy</Link>
                </li>
                <li className="hover:text-black hover:scale-110 transition-all duration-300">
                  <LoginButton />
                </li>
              </ul>
            </div>

            {/* Utility Section
            <div className="flex flex-col justify-center items-center">
              <h3 className="font-medium text-black mb-4 text-2xl">Utility</h3>
              <ul className="space-y-3 text-[#8c8983] flex flex-col justify-center items-center">
                <li className="hover:text-black hover:scale-110 transition-all duration-300">
                  <Link href="#">Password</Link>
                </li>
                <li className="hover:text-black hover:scale-110 transition-all duration-300">
                  <Link href="#">Instruction</Link>
                </li>
                <li className="hover:text-black hover:scale-110 transition-all duration-300">
                  <Link href="#">License</Link>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </footer>
      <SocialLinks />
      <CopyRight />
    </div>
  );
};

export default Footer;
