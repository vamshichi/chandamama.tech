'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'  // Import Link from Next.js
import { ChevronLeft, ChevronRight } from 'lucide-react'

import BreakingNews from "@/app/images/heroScetion/news-section.png"
import Books from "@/app/images/heroScetion/COURSES2.png"
import gadgets from "@/app/images/heroScetion/Your paragraph text.png"

const carouselItems = [
  { src: BreakingNews, alt: "Breaking News", link: "/news" },
  { src: Books, alt: "Books", link: "/ebooks" },
  { src: gadgets, alt: "Gadgets", link: "/gadgets" },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + carouselItems.length) % carouselItems.length)
  }

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length)
  }

  return (
    <section className="relative">
      <div id="hero-carousel" className="relative w-full" data-carousel="slide">
        {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden md:h-96">
          {/* Only render the current slide with a unique Link */}
          <div className="absolute w-full h-full transition-opacity duration-700 ease-in-out opacity-100" data-carousel-item>
            <Link href={carouselItems[currentSlide].link}>
              <Image
                src={carouselItems[currentSlide].src}
                alt={carouselItems[currentSlide].alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </Link>
          </div>
        </div>
        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              aria-current={index === currentSlide}
              aria-label={`Slide ${index + 1}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={goToPrevSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <ChevronLeft className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={goToNextSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <ChevronRight className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </section>
  )
}
