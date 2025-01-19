import Image from "next/image";
import React from "react";
import web from "@/public/Svgs/web.svg";
import email from "@/public/Svgs/email.svg";
import marketing from "@/public/Svgs/marketing.svg";
import social from "@/public/Svgs/social.svg";
import seo from "@/public/Svgs/seo.svg";
import maintenance from "@/public/Svgs/maintenance.svg";
import uiux from "@/public/Svgs/uiux.svg";
import PrimaryButton from "../shared/PrimaryButton";
import LearnMoreButton from "../shared/LearnMoreButton";
import SectionHeader from "../shared/SectionHeader";

const Service = () => {
  return (
    <div className="flex flex-col gap-10 pt-10 items-center w-full px-4">
      <SectionHeader
        Title={
          <>
            Unlock Your <span className="text-red-500">Business</span> Potential
            with Tailored <span className="text-red-500">Excellence</span>
          </>
        }
        Description={
          "Our solutions are crafted to meet the unique challenges of your industry, ensuring you stay ahead in a rapidly evolving digital landscape."
        }
      />
      <div className="flex flex-col gap-10 w-full max-w-7xl text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <div className="flex flex-col gap-5 items-center bg-gray-800 tiles-bg shadow-md rounded-2xl p-6">
            <Image alt="service" src={web} className="h-auto w-36 rounded-md" />
            <div className="text-center">
              <h1 className="text-xl font-semibold">Web Development</h1>
              <p className="text-sm text-gray-300">
                At LML Digitals, we design and develop visually appealing
                websites that convert visitors into customers. Whether it&apos;s
                a brochure site, e-commerce platform, or custom web app, we
                ensure seamless user experiences across all devices, reflecting
                your brand and enhancing customer engagement.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center bg-red-500 shadow-md rounded-2xl p-6">
            <Image alt="service" src={seo} className="h-auto w-36 rounded-md" />
            <div className="text-center">
              <h1 className="text-xl font-semibold">SEO Optimization</h1>
              <p className="text-sm text-white">
                Our SEO specialists boost your website&quot;s visibility and
                drive qualified traffic, leading to increased brand awareness,
                lead generation, and more sales.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          <div className="flex flex-col gap-5 items-center tiles-b bg-red-500 shadow-md rounded-2xl p-6">
            <Image
              alt="service"
              src={marketing}
              className="h-auto w-36 rounded-md"
            />
            <div className="text-center">
              <h1 className="text-xl font-semibold">Content Marketing</h1>
              <p className="text-sm text-white">
                Our content marketing team crafts industry-leading
                content—blogs, articles, infographics, videos—to engage your
                audience, build trust, and position your brand as an industry
                leader.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center bg-black shadow-md rounded-2xl p-6">
            <Image
              alt="service"
              src={maintenance}
              className="h-auto w-36 rounded-md"
            />
            <div className="text-center">
              <h1 className="text-xl font-semibold">Software Maintenance</h1>
              <p className="text-sm text-white">
                Our software maintenance services ensure your applications
                remain stable, secure, and perform optimally. We provide bug
                fixes, security updates, performance optimization, and feature
                enhancements to support business continuity and security.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center bg-red-500 shadow-md rounded-2xl p-6">
            <Image
              alt="service"
              src={email}
              className="h-auto w-36 rounded-md"
            />
            <div className="text-center">
              <h1 className="text-xl font-semibold">Email Marketing</h1>
              <p className="text-sm text-gray-300">
                Our email marketing specialists create and manage targeted
                campaigns that nurture leads, promote services, and build
                customer relationships. We design engaging templates, manage
                lists, and track performance for impactful results.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          <div className="flex flex-col md:col-span-2 gap-5 items-center bg-black shadow-md rounded-2xl p-6">
            <Image
              alt="service"
              src={social}
              className="h-auto w-36 rounded-md"
            />
            <div className="text-center">
              <h1 className="text-xl font-semibold">Social Media Management</h1>
              <p className="text-sm text-white">
                Our social media management services build brand awareness,
                engage your audience, and drive traffic with tailored
                strategies, content creation, account management, and
                performance analysis.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:col-span-1 gap-5 items-center bg-black shadow-md rounded-2xl p-6">
            <Image
              alt="service"
              src={uiux}
              className="h-auto w-36 rounded-md"
            />
            <div className="text-center">
              <h1 className="text-xl font-semibold">UX/UI Design</h1>
              <p className="text-sm text-white">
                Our UX/UI design experts create intuitive and visually appealing
                interfaces that enhance user experiences. By combining
                research-driven insights with creative design, we deliver
                solutions that engage users and drive conversions.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:gap-10 gap-4 mt-5">
          <PrimaryButton text={"Get Started"} to="/contact" />
          <LearnMoreButton to="/about" />
        </div>
      </div>
    </div>
  );
};

export default Service;
