'use client'

import softwareData from "@/app/data/softwareDara"
import SoftwareCard from "./SoftwareCard"
import Link from "next/link"
import { ChevronRight } from 'lucide-react'

interface SoftwareSectionProps {
  limit?: number;
  currentSlug?: string; // To exclude the current software article from the list
}

export default function SoftwareSection({ limit = softwareData.length, currentSlug }: SoftwareSectionProps) {
  // Exclude the current software article using the correct slug format
  const displayedSoftware = softwareData
    .filter(software => software.slug.split('/').pop() !== currentSlug) // Ensure slugs are compared correctly
    .slice(0, limit)

  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4 ">
        
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {displayedSoftware.map((software) => (
            <SoftwareCard
              key={software.id}
              id={software.id}
              title={software.title}
              description={software.description}
              image={software.image}
              downloadLink={software.downloadLink}
              slug={software.slug}
            />
          ))}
        </div>

        {softwareData.length > limit && (
          <div className="flex justify-center mt-12">
            <Link 
              href="/softwares"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300 ease-in-out flex items-center"
            >
              View All Software
              <ChevronRight className="ml-2" size={20} />
              <span className="sr-only">(opens software page)</span>
            </Link>
          </div>
        )}
        
      </div>
    </section>
  )
}
