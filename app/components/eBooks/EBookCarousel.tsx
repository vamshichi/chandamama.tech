'use client'

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import eBooksData from "@/app/data/eBooksData";

interface EBookCarouselProps {
  currentSlug?: string;
}

export default function EBookCarousel({ currentSlug }: EBookCarouselProps) {
  // Sort eBooks by ID to show recent ones first
  let sortedEBooks = [...eBooksData].sort((a, b) => b.id - a.id).slice(0, 6);

  // Filter out the current eBook if `currentSlug` is provided
  if (currentSlug) {
    sortedEBooks = sortedEBooks.filter((book) => book.link.split('/').pop() !== currentSlug);
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <Link href={"/ebooks"}>
          {/* <h2 className="text-3xl font-serif text-gray-800 mb-8">Courses</h2> */}
        </Link>
        {sortedEBooks.length > 0 ? (
          <Slider {...settings}>
            {sortedEBooks.map((book) => (
              <div key={book.id} className="px-2">
                <div className="border rounded-lg shadow-md bg-white h-96 flex flex-col">
                  <div className="relative w-full h-48 mb-4 overflow-hidden rounded-md">
                    <Link href={book.link}>
                      <Image
                        src={book.image || "/placeholder.svg"}
                        alt={book.title}
                        fill
                        className="transition duration-300 ease-in-out hover:scale-105"
                      />
                    </Link>
                  </div>
                  <div className="flex-grow p-4 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{book.title}</h3>
                      <p className="text-gray-600 mb-4">{book.category}</p>
                    </div>
                    <Link
                      href={book.link}
                      className="text-blue-500 hover:text-blue-600 transition-colors duration-200 inline-flex items-center"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <p>No other eBooks available to display.</p>
        )}
        <div className="flex justify-center mt-12">
          <Link 
            href="/ebooks"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300 ease-in-out"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
}