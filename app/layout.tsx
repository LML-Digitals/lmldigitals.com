import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Footer from "@/components/shared/footer/Footer";
import "./globals.css";
import Navbar from "./Navbar";
import Script from "next/script";
import ChatbotIcon from "@/components/shared/ChatBotIcon";

const inter = Inter({ subsets: ["latin"] });
// Import Poppins from Google Fonts
const poppins = Poppins({
  subsets: ["latin"], // Add the required subsets
  weight: ["100", "300", "400", "500", "700", "900"], // Specify the required weights
});

export const metadata: Metadata = {
  title: "LML Digitals | Marketing and Software Development",
  description:
    "LML Digitals is a leading marketing and software development company dedicated to transforming businesses with innovative digital solutions.",
  keywords:
    "marketing, software development, digital solutions, business transformation, LML Digitals",
  authors: [{ name: "LML Digitals", url: "https://www.lmldigitals.com" }],
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "LML Digitals | Marketing and Software Development",
    description:
      "Transform your business with innovative digital solutions from LML Digitals, a leader in marketing and software development.",
    type: "website",
    url: "https://www.lmldigitals.com",
    images: [
      {
        url: "/app/opengraph-image.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@LMLDigitals",
    title: "LML Digitals | Marketing and Software Development",
    description:
      "Transform your business with innovative digital solutions from LML Digitals, a leader in marketing and software development.",
    images: ["/images/twitter-image.jpg"], // Relative path to the image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main>
          <Navbar />
          {children}
          <ChatbotIcon />
          <Footer />
        </main>
      </body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-DR17LYS00W"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DR17LYS00W');
          `,
        }}
      />
    </html>
  );
}
