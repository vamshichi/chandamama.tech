import { useEffect } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { Metadata } from 'next';
import Link from "next/link";
import { ChevronRight } from 'lucide-react';
import HeroSection from "@/app/components/HeroSection";
import PopularGadgetsSection from "@/app/components/gadgets/PopularGadgetsSection";
import NewsGrid from "@/app/components/News/NewsGrid";
import EBookCarousel from "@/app/components/eBooks/EBookCarousel";
import SoftwareSection from "@/app/components/softwares/SoftwareSection";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || '';

export const metadata: Metadata = {
  title: 'Chandamama.tech - Your Tech News, Gadgets, and Courses Hub',
  description: 'Discover the latest in technology, gadget reviews, and online courses at Chandamama.tech. Stay informed and enhance your digital experience.',
  openGraph: {
    title: 'Chandamama.tech - Your Tech News, Gadgets, and Courses Hub',
    description: 'Discover the latest in technology, gadget reviews, and online courses at Chandamama.tech. Stay informed and enhance your digital experience.',
    url: 'https://www.chandamama.tech',
    siteName: 'Chandamama.tech',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Chandamama.tech - Your Tech Hub',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chandamama.tech - Your Tech News, Gadgets, and Courses Hub',
    description: 'Discover the latest in technology, gadget reviews, and online courses at Chandamama.tech. Stay informed and enhance your digital experience.',
    images: ['/og-image.png'],
  },
}

export default function Home() {
  const router = useRouter();

  // Handle pageview tracking with Google Analytics
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (typeof window.gtag !== 'undefined') {
        window.gtag('config', GA_ID, {
          page_path: url,
        });
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Google Analytics Script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      <main>
        <HeroSection />
        
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-serif text-gray-800">News</h2>
              <Link 
                href="/news"
                className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out flex items-center"
              >
                View All
                <ChevronRight className="ml-1" size={20} />
              </Link>
            </div>
            <NewsGrid showViewAllButton={true} limit={3} />
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-serif text-gray-800">Courses</h2>
              <Link 
                href="/ebooks"
                className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out flex items-center"
              >
                View All
                <ChevronRight className="ml-1" size={20} />
              </Link>
            </div>
            <EBookCarousel />
          </div>
        </section>

        <PopularGadgetsSection />

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-serif text-gray-800">Software</h2>
              <Link 
                href="/softwares"
                className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out flex items-center"
              >
                View All
                <ChevronRight className="ml-1" size={20} />
              </Link>
            </div>
            <SoftwareSection limit={3} />
          </div>
        </section>
      </main>
    </div>
  );
}
