import { Metadata } from "next";
import React from "react";
import AboutPageContent from "@/app/components/about/aboutChandamama";

export const metadata: Metadata = {
  title: 'About Chandamama.tech | Your Tech News, Gadgets, and Courses Hub',
  description: 'Discover Chandamama.tech, your go-to platform for the latest tech news, gadget reviews, and diverse online courses. Learn about our mission and meet the team behind your favorite tech resource.',
  openGraph: {
    title: 'About Chandamama.tech | Your Tech News, Gadgets, and Courses Hub',
    description: 'Explore Chandamama.tech - your source for tech news, gadget reviews, and online courses. Meet our team and learn about our mission to blend knowledge and entertainment.',
    type: 'website',
    url: 'https://www.chandamama.tech/about',
    images: [
      {
        url: 'https://www.chandamama.tech/images/about-chandamama-og.jpg',
        width: 1200,
        height: 630,
        alt: 'About Chandamama.tech',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Chandamama.tech | Your Tech News, Gadgets, and Courses Hub',
    description: 'Discover Chandamama.tech, your go-to platform for tech news, gadget reviews, and online courses. Meet our team and explore our mission.',
    images: ['https://www.chandamama.tech/images/about-chandamama-twitter.jpg'],
  },
};

const AboutPage = () => {
  return (
    <main>
      <AboutPageContent />
    </main>
  );
};

export default AboutPage;