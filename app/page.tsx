// import Footer from "@/app/components/Footer";
import HeroSection from "@/app/components/HeroSection";
import PopularGadgetsSection from "@/app/components/gadgets/PopularGadgetsSection";
import NewsGrid from "@/app/components/News/NewsGrid";
import EBookCarousel from "@/app/components/eBooks/EBookCarousel";
import SoftwareSection from "./components/softwares/SoftwareSection";
import Link from "next/link";
import { ChevronRight } from 'lucide-react'


export default function Home() {
  return (
    <div>
      <main>
        <HeroSection />
         <section className="py-12 bg-gray-100">
          <div className="container mx-auto ">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-serif text-gray-800 mb-8 px-4">News</h2>
            <Link 
            href="/softwares"
            className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out flex items-center"
          >
            View All
            <ChevronRight className="ml-1" size={20} />
          </Link>
          </div>
            {/* Show only 6 news articles on the homepage */}
            <NewsGrid showViewAllButton={true} limit={3} />
          </div>
        </section> 
         <EBookCarousel /> 
        <PopularGadgetsSection/>
        <section className="py-12 bg-gray-100">
        <div className="flex justify-between items-center px-4">
          <h2 className="text-3xl font-serif text-gray-800">Software</h2>
          <Link 
            href="/softwares"
            className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out flex items-center"
          >
            View All
            <ChevronRight className="ml-1" size={20} />
          </Link>
        </div>
        <SoftwareSection  limit={3}/>
        </section>
        
        {/* <Footer /> */}
      </main>
    </div>
  );
}
