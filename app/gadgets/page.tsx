'use client'

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import gadgetsData from "@/app/data/gadgetsData"

export default function GadgetsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredGadgets = gadgetsData.filter((gadget) =>
    gadget.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Explore Our Gadgets
        </h1>
        <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search gadgets..."
              className="w-full px-4 py-2 rounded-full border-2 border-gray-300 focus:outline-none focus:border-blue-500 transition duration-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mx-9">
          {filteredGadgets.map((gadget) => (
            <div
              key={gadget.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <Link href={gadget.learnMoreLink}>
                <div className="relative h-48 w-full">
                  <Image
                    src={gadget.image || "/placeholder.svg"}
                    alt={gadget.title}
                    fill
                    // objectFit="cover"
                    className="transition-opacity duration-300 hover:opacity-80"
                  />
                </div>
              </Link>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{gadget.title}</h3>
                <p className="text-2xl font-bold text-blue-600 mb-4">{gadget.price}</p>
                <div className="flex justify-between items-center">
                  <Link href={gadget.buyLink} target="_blank" passHref>
                    <span className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out">
                      <svg
                        className="mr-2 h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      Buy Now
                    </span>
                  </Link>
                  <Link href={gadget.learnMoreLink} passHref>
                    <span className="inline-flex items-center text-blue-500 hover:text-blue-600 font-medium">
                      <svg
                        className="mr-1 h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Details
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {filteredGadgets.length === 0 && (
          <p className="text-center text-gray-600 mt-8">No gadgets found. Try a different search term.</p>
        )}
      </div>
    </section>
  )
}