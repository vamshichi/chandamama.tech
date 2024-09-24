import Footer from "@/app/components/Footer";
import HeroSection from "@/app/components/HeroSection";
import PopularGadgetsSection from "@/app/components/gadgets/PopularGadgetsSection";
import NewsGrid from "@/app/components/News/NewsGrid";
import EBookCarousel from "@/app/components/eBooks/EBookCarousel";

export default function Home() {
  return (
    <div>
      <main>
        <HeroSection />
         <section className="py-12 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-6">Latest News</h2>
            {/* Show only 6 news articles on the homepage */}
            <NewsGrid showViewAllButton={true} limit={6} />
          </div>
        </section> 
         <EBookCarousel /> 
        <PopularGadgetsSection />
        <Footer />
      </main>
    </div>
  );
}
