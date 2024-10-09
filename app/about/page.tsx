import { Suspense } from "react";
import { Metadata } from "next";
import AboutChandamama from "@/app/components/about/aboutChandamama";

export const metadata: Metadata = {
  title: 'About Chandamama.tech | Your Tech News, Gadgets, and Courses Hub',
  description: 'Discover Chandamama.tech, your go-to platform for the latest tech news, gadget reviews, and diverse online courses. Learn about our mission and meet the team behind your favorite tech resource.',
};

export default function AboutPage() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <AboutChandamama />
      </Suspense>
    </main>
  );
}