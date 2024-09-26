'use client'

import React from "react";
import AboutChandamama from "@/app/components/about/aboutChandamama"; // Adjust the import path as needed
import HeroSection from "../components/HeroSection";
// import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <main className="py-12">
      <HeroSection />
      <AboutChandamama />
      {/* <Footer /> */}
    </main>
  );
};

export default AboutPage;
