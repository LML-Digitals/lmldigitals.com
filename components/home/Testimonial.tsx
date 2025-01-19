import React from "react";
import ReadMoreButton from "../shared/ReadMoreButton";
import SectionHeader from "../shared/SectionHeader";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import testimonial1 from "@/public/testimonial1.jpeg";

const Testimonial = () => {
  const testimonials = [
    {
      image: testimonial1,
      name: "Marzieh Berihun",
      company: "CEO, Company",
      description:
        "The AI tools from Entropy have revolutionized our workflow. Their adaptability and precision have set a new standard for our operations.",
    },
    {
      image: testimonial1,
      name: "Haile Berihun",
      company: "Marketing Director at RetailPulse",
      description:
        "We’ve seen a significant boost in efficiency since integrating Entropy's AI solutions. The personalized features truly enhance our customer interactions",
    },
    {
      image: testimonial1,
      name: "Dagim Berihun",
      company: "CTO at TechInnovate",
      description:
        "The predictive analytics provided by Entropy have been a game-changer for our strategic planning. We’re making more informed decisions than ever before.",
    },
    {
      image: testimonial1,
      name: "Mikias Berihun",
      company: "Operations Manager at Visionary Studios",
      description:
        "The visual recognition technology has streamlined our processes and provided us with valuable insights. Entropy is a key partner in our success.",
    },
    {
      image: testimonial1,
      name: "Misganaw Berihun",
      company: "Customer Experience Lead at BrightPath",
      description:
        "Thanks to Entropy’s AI-driven personalization, we’ve seen a dramatic increase in customer satisfaction and engagement. It’s truly exceptional.",
    },
    {
      image: testimonial1,
      name: "Edom Berihun",
      company: "IT Director at SecureNet Solutions",
      description:
        "The cybersecurity solutions from Entropy offer unparalleled protection for our data. We feel confident and secure knowing our systems are in good hands.",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <ReadMoreButton />
      <SectionHeader
        Title={
          <>
            Transformative <span className="text-red-500"> Results</span> with
            Profound Impact on <span className="text-red-500"> Success</span>
          </>
        }
        Description={
          "Hear directly from our clients about their experiences and the impact our technology has had on their operations"
        }
      />
      <div className="w-full px-3 md:px-0 flex gap-5 flex-col md:flex-row items-center md:justify-center flex-wrap mt-20">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="md:w-[30%] h-96 rounded-2xl hover:bg-[#1f1f1f] duration-200 bg-black flex flex-col items-start justify-around px-10 py-5"
          >
            <FaQuoteLeft size={30} className="text-red-500" />
            <p className="text-white text-lg font-light">
              {testimonial.description}
            </p>
            <div className="flex gap-4">
              <Image
                src={testimonial.image}
                className="w-14 h-14 rounded-lg"
                alt={`${testimonial.name} image`}
              />
              <div className="flex flex-col justify-center">
                <p className="text-white font-medium">{testimonial.name}</p>
                <p className="text-gray-400 text-sm">{testimonial.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
