'use client'

import React from "react";

const AboutChandamama = () => {
  return (
    <div className="container mx-auto py-12 px-6 bg-white rounded-lg shadow-lg">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-serif text-gray-800 mb-8 ">Welcome to Chandamama.tech</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Chandamamma.tech is your trusted platform for staying updated with the latest in technology, discovering trending gadgets, and exploring a wide collection of eBooks across multiple genres. Our mission is to blend knowledge and entertainment to enhance your digital experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* News Section */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-serif text-gray-800 mb-8">Latest News</h2>
          <p className="text-gray-600 mb-4">
            Our news section brings you the latest updates from the world of technology, business, innovation, and beyond. Whether it&apos;s a groundbreaking tech development or business trends, we keep you informed with quality news articles.
          </p>
          <a
            href="/news"
            className="inline-block text-blue-600 hover:underline font-medium"
          >
            Explore News &rarr;
          </a>
        </div>

        {/* eBooks Section */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-serif text-gray-800 mb-8">Explore eBooks</h2>
          <p className="text-gray-600 mb-4">
            Discover our curated eBook library that spans genres like fiction, technology, education, self-help, and more. Whether you're looking for a great read or educational resources, we have something for everyone.
          </p>
          <a
            href="/ebooks"
            className="inline-block text-blue-600 hover:underline font-medium"
          >
            Browse eBooks &rarr;
          </a>
        </div>

        {/* Gadgets Section */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-serif text-gray-800 mb-8">Gadget Reviews & Deals</h2>
          <p className="text-gray-600 mb-4">
            Stay ahead in the tech game with our gadget reviews, detailed specs, and pricing info on the latest electronics. From smartphones to smartwatches, our gadget section helps you make informed decisions.
          </p>
          <a
            href="/gadgets"
            className="inline-block text-blue-600 hover:underline font-medium"
          >
            Discover Gadgets &rarr;
          </a>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-serif text-gray-800 mb-8">Why Choose Chandamama.tech?</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          Our platform is designed to provide you with a seamless experience when it comes to discovering new information, exploring the latest gadgets, and enjoying a wide variety of eBooks. At Chandamama.tech, we ensure that you have access to accurate, insightful, and engaging content, all while enjoying the convenience of affiliate links for easy purchases.
        </p>
        <ul className="list-none text-left max-w-2xl mx-auto space-y-4">
          <li className="flex items-start space-x-3">
            <svg
              className="h-6 w-6 text-green-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-600">Comprehensive reviews and expert opinions on gadgets.</span>
          </li>
          <li className="flex items-start space-x-3">
            <svg
              className="h-6 w-6 text-green-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-600">Up-to-date news and insights from the world of technology and innovation.</span>
          </li>
          <li className="flex items-start space-x-3">
            <svg
              className="h-6 w-6 text-green-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-600">A broad selection of eBooks across multiple categories to satisfy all readers.</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AboutChandamama
