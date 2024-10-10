'use client'


import { usePathname, useSearchParams } from 'next/navigation'
import Link from "next/link"
import { ChevronRight } from 'lucide-react'
import HeroSection from "@/app/components/HeroSection"
import PopularGadgetsSection from "@/app/components/gadgets/PopularGadgetsSection"
import NewsGrid from "@/app/components/News/NewsGrid"
import EBookCarousel from "@/app/components/eBooks/EBookCarousel"
import SoftwareSection from "@/app/components/softwares/SoftwareSection"

export default function HomePageContent() {
    const pathname = usePathname()
    const searchParams = useSearchParams()
  
    // useEffect(() => {
    //   const url = pathname + searchParams.toString()
    //   const gaId = process.env.NEXT_PUBLIC_GA_ID
  
    //   if (gaId && typeof window !== 'undefined' && window.gtag) {
    //     window.gtag('config', gaId, {
    //       page_path: url,
    //     })
  
    //     // Track page view
    //     window.gtag('event', 'page_view', {
    //       page_title: 'Home Page',
    //       page_location: window.location.href,
    //       page_path: url,
    //     })
    //   }
    // }, [pathname, searchParams])
    
    return (
      <div className="min-h-screen bg-gray-50">
        <main>
          <HeroSection />
          
          <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-serif text-gray-800">News</h2>
                <Link 
                  href="/news"
                  className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out flex items-center"
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.gtag) {
                      window.gtag('event', 'view_all_click', {
                        event_category: 'engagement',
                        event_label: 'News View All',
                      })
                    }
                  }}
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
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.gtag) {
                      window.gtag('event', 'view_all_click', {
                        event_category: 'engagement',
                        event_label: 'Courses View All',
                      })
                    }
                  }}
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
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.gtag) {
                      window.gtag('event', 'view_all_click', {
                        event_category: 'engagement',
                        event_label: 'Software View All',
                      })
                    }
                  }}
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
    )
  }