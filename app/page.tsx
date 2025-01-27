import BrandsTrustUs from "@/components/home/BrandsTrustUs";
import ContentFive from "@/components/ContentFive";
import ContentFour from "@/components/ContentFour";
import ContentSix from "@/components/ContentSix";
import ContentThree from "@/components/ContentThree";
import Hero from "@/components/home/Hero";
import Service from "@/components/home/Services";
import Head from "next/head";
import Testimonial from "@/components/home/Testimonial";
import About from "@/components/home/About";
import DividerSection from "@/components/home/DividerSection";
import Script from "next/script";
import Navbar from "./Navbar";
import Footer from "@/components/shared/footer/Footer";
import ChatbotIcon from "@/components/shared/ChatBotIcon";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-16648663241"
        strategy="afterInteractive"
      />
      <Script
        id="google-ads"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16648663241');
          `,
        }}
      />

      <Navbar />
      <Hero />
      <BrandsTrustUs />
      <Service />
      <DividerSection />
      <Testimonial />
      <About />
      {/* <ContentThree /> */}
      {/* <ContentFour /> */}
      <ContentFive />
      <ContentSix />
      <ChatbotIcon />
      <Footer />
    </div>
  );
}
