'use client'

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import eBooksData from "@/app/data/eBooksData";

export default function EBookCarousel() {
  // Sort eBooks by ID to show recent ones first
  const sortedEBooks = [...eBooksData].sort((a, b) => b.id - a.id).slice(0, 6);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <Link href={"/ebooks"}>
          <h2 className="text-3xl font-serif text-gray-800 mb-8">Courses</h2>
        </Link>
        <Slider {...settings}>
          {sortedEBooks.map((book) => (
            <div key={book.id} className="p-4">
              <div className="border rounded-lg shadow-md p-4 bg-white h-full flex flex-col">
                <div className="relative w-full h-48 mb-4">
                  <Link href={book.link}>
                  <Image
                    src={book.image || "/placeholder.svg"}
                    alt={book.title}
                    width={400}  // You can adjust this value as needed
                    height={300} // You can adjust this value as needed
                    // style={{ objectFit: "cover" }} // Replace legacy prop
                    className="rounded-md"
                  />
                  </Link>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{book.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{book.category}</p>
                <Link
                  href={book.link}
                  className="text-blue-500 hover:text-blue-600 transition-colors duration-200 inline-flex items-center"
                >
                  Read More
                  {/* <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg> */}
                </Link>
              </div>
            </div>
          ))}
        </Slider>
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
