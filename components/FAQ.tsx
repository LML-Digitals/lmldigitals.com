"use client";
import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What services does LML Digitals offer?",
    answer:
      "LML Digitals offers a variety of digital marketing services, including search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, content marketing, web design and development, and email marketing.",
  },
  {
    question: "What is the difference between SEO and PPC?",
    answer:
      "SEO is the process of optimizing your website and online content to improve its ranking in search engine results pages (SERPs). PPC advertising is a paid marketing strategy where you pay to display your ads to users searching for specific keywords.",
  },
  {
    question: "Do you offer custom packages?",
    answer:
      "Yes, we offer custom packages to fit your specific needs and budget. We will work with you to understand your goals and develop a strategy that is right for you.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "The cost of our services varies depending on the specific services you need and the scope of your project. We will provide you with a free quote after we discuss your needs.",
  },
  {
    question: "How can SEO help my business?",
    answer:
      "SEO can help your business attract more website traffic, leads, and sales by improving your ranking in search results for relevant keywords.",
  },
  {
    question: "How quickly will I see results from SEO?",
    answer:
      "SEO is an ongoing process, but you can typically start to see results within a few months. However, it can take up to a year to see the full impact of your SEO efforts.",
  },
  {
    question: "What is the difference between social media marketing and content marketing?",
    answer:
      "Social media marketing is the process of creating and sharing content on social media platforms to promote your brand and products or services. Content marketing is the process of creating and sharing valuable content (such as blog posts, articles, infographics, and videos) to attract and engage your target audience.",
  },
  {
    question: "Do you offer design services?",
    answer:
      "Yes, we offer web design and development services. We can help you create a website that is user-friendly, visually appealing, and optimized for search engines.",
  },
  {
    question: "Do you have experience working with businesses in my industry?",
    answer:
      "Yes, we have experience working with businesses in a variety of industries. Please contact us to discuss your specific needs.",
  },
  {
    question: "What is your process for working with clients?",
    answer:
      "We take a collaborative approach to working with clients. We will start by getting to know your business and your goals. Then, we will develop a customized strategy and keep you informed throughout the process.",
  },
  {
    question: "How do I get started with LML Digitals?",
    answer:
      "Contact us today for a free consultation. We will discuss your needs and goals and answer any questions you may have.",
  },
  {
    question: "Do you offer long-term contracts?",
    answer:
      "Yes, we offer both project-based and ongoing retainer contracts to suit your needs.", 
  },
  {
    question: "What are your payment terms?",
    answer:
      "We typically require a deposit upfront and offer flexible payment options for the remaining balance.",
  },
  {
    question: "How do you track and report on results?",
    answer:
      "We use a variety of tools to track and report on the performance of your campaigns, including Google Analytics, Google Search Console, and social media analytics platforms.",
  },
  {
    question: "What is your process for handling client feedback?",
    answer:
      "We encourage open communication and value your feedback. We will regularly review your campaign performance and make adjustments as needed based on your input.",
  },
];

const FaqQuestions: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <section className="py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="accordion-group">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`accordion mb-3 py-8 px-6 transition-all duration-500 rounded-2xl bg-[#dddddd]`}
              >
                <button
                  className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-indigo-600"
                  onClick={() => toggleAccordion(index)}
                >
                  <h5 className="text-black">{faq.question}</h5>
                  <HiChevronDown
                    className={`text-gray-700 transition-transform duration-500 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                    size={22}
                  />
                </button>
                <div
                  className={`accordion-content w-full px-0 overflow-hidden transition-max-height duration-500 ${
                    activeIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="text-base text-gray-800 leading-6 mt-4">
                    {faq.answer} 
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqQuestions;
