// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import FeaturedNewsSection from "./components/FeaturedNewsSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import PopularGadgetsSection from "./components/PopularGadgetsSection";
import TopEbooksSection from "./components/TopEbooksSection";

export default function Home() {
  return (
    <div>
      <main >
        <HeroSection />
        <FeaturedNewsSection />
        <TopEbooksSection />
        <PopularGadgetsSection />
        <Footer />
      </main>
    </div>
  );
}
