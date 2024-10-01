import { Metadata } from "next";

import React from "react";
import AboutChandamama from "@/app/components/about/aboutChandamama"; // Adjust the import path as needed
import HeroSection from "../components/HeroSection";

// import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: 'about',
};

const AboutPage = () => {
  return (
    <main>
      <HeroSection />
      <AboutChandamama />
      {/* <Footer /> */}
    </main>
  );
};

export default AboutPage;
