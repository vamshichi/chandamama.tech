'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import gadgetsData from '@/app/data/gadgetsData'
import { notFound } from 'next/navigation'

export default function GadgetDetailPage() {
  const params = useParams()
  const slug = params.slug as string

  // Find the gadget that matches the slug
  const gadget = gadgetsData.find((g) => g.learnMoreLink.includes(slug))

  if (!gadget) {
    notFound()
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2">
            <div className="relative w-full h-[400px]">
              <Image
                src={gadget.image || "/placeholder.svg"}
                alt={gadget.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl font-bold mb-4">{gadget.title}</h1>
            <p className="text-xl text-gray-700 mb-4">{gadget.price}</p>
            <p className="mb-6">{gadget.description || "Detailed description here."}</p>
            <a
              href={gadget.buyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white bg-green-500 hover:bg-green-700 px-6 py-3 rounded-lg transition duration-300 ease-in-out"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}