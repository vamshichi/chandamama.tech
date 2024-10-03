'use client'

import React from "react";

const AboutChandamama = () => {
  return (
    <div className="container mx-auto py-12 px-6 bg-white rounded-lg shadow-lg">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-serif text-gray-800 mb-8">Welcome to Chandamama.tech</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Chandamama.tech is your trusted platform for staying updated with the latest in technology, discovering trending gadgets, and exploring a wide collection of courses across multiple categories. Our mission is to blend knowledge and entertainment to enhance your digital experience.
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

        {/* Courses Section */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-serif text-gray-800 mb-8">Explore Courses</h2>
          <p className="text-gray-600 mb-4">
            Discover our curated course library that spans topics like technology, education, self-help, and more. Whether you're looking for skill development or educational resources, we have something for everyone.
          </p>
          <a
            href="/ebooks"
            className="inline-block text-blue-600 hover:underline font-medium"
          >
            Browse Courses &rarr;
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
          Our platform is designed to provide you with a seamless experience when it comes to discovering new information, exploring the latest gadgets, and enjoying a wide variety of courses. At Chandamama.tech, we ensure that you have access to accurate, insightful, and engaging content, all while enjoying the convenience of affiliate links for easy purchases.
        </p>

        {/* Meet the Team Section */}
        <div className="mt-12">
          <h3 className="text-3xl font-serif text-gray-800 mb-8">Meet the Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Founder */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-2xl font-serif text-gray-800 mb-2">Vamshi CH</h4>
              <p className="text-lg text-gray-600 mb-4">Founder</p>
              <p className="text-gray-600">
                Vamshi is the visionary behind Chandamama.tech, passionate about technology and digital innovation. With years of experience, he leads the platform with a focus on quality content and seamless user experience.
              </p>
            </div>

            {/* Co-founder 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-2xl font-serif text-gray-800 mb-2">K Mohan Rao</h4>
              <p className="text-lg text-gray-600 mb-4">Co-Founder</p>
              <p className="text-gray-600">
                Mohan Rao brings extensive expertise in business and strategy, helping to shape the growth and direction of Chandamama.tech. He ensures that the platform aligns with the needs of tech enthusiasts and learners.
              </p>
            </div>

            {/* Co-founder 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-2xl font-serif text-gray-800 mb-2">Jagdish</h4>
              <p className="text-lg text-gray-600 mb-4">Co-Founder</p>
              <p className="text-gray-600">
                Jagdish is a tech expert with a keen eye for innovation and detail. As a co-founder, he plays a pivotal role in content development and ensuring the quality of tech reviews and news on the platform.
              </p>
            </div>

            {/* Digital Marketing Team */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-2xl font-serif text-gray-800 mb-2">Chaithra N</h4>
              <p className="text-lg text-gray-600 mb-4">Digital Marketing</p>
              <p className="text-gray-600">
                Chaithra drives the digital marketing efforts at Chandamama.tech, ensuring the brand reaches a wider audience through strategic campaigns and social media engagement.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-2xl font-serif text-gray-800 mb-2">Abhinand</h4>
              <p className="text-lg text-gray-600 mb-4">Digital Marketing</p>
              <p className="text-gray-600">
                Abhinand specializes in content marketing and SEO, helping Chandamama.tech rank higher in search engines and attract the right audience for tech news, reviews, and courses.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-2xl font-serif text-gray-800 mb-2">Harish S</h4>
              <p className="text-lg text-gray-600 mb-4">Digital Marketing</p>
              <p className="text-gray-600">
                Harish manages paid advertising and partnerships, working to ensure Chandamama.tech's content is promoted effectively across multiple platforms and channels.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-2xl font-serif text-gray-800 mb-2">James Vinay</h4>
              <p className="text-lg text-gray-600 mb-4">Digital Marketing</p>
              <p className="text-gray-600">
                James focuses on analytics and insights, helping Chandamama.tech make data-driven decisions to improve content strategy and digital growth.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-2xl font-serif text-gray-800 mb-2">Navya BKP</h4>
              <p className="text-lg text-gray-600 mb-4">Digital Marketing</p>
              <p className="text-gray-600">
                Navya plays a key role in expanding Chandamama.tech's online presence through influencer marketing and brand collaborations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutChandamama;
