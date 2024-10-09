'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Download } from 'lucide-react'
import softwareData from '@/app/data/softwareDara'
import SoftwareSection from '@/app/components/softwares/SoftwareSection'

interface SoftwareDetailClientProps {
  slug: string
}

export default function SoftwareDetailClient({ slug }: SoftwareDetailClientProps) {
  const software = softwareData.find((s) => s.slug.split('/').pop() === slug)

  if (!software) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Software Not Found</h1>
          <p className="text-gray-600 mb-8">Sorry, we couldn't find the software you're looking for.</p>
          <Link 
            href="/softwares" 
            className="text-blue-500 hover:text-blue-700 transition duration-300 flex items-center justify-center"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Softwares
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-12 px-4">
        <Link 
          href="/softwares" 
          className="text-blue-500 hover:text-blue-700 transition duration-300 flex items-center mb-8"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Softwares
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <div className="relative w-full md:w-96 h-96">
                <Image
                  src={software.image || '/placeholder.svg'}
                  alt={software.title}
                  fill
                  className="rounded-t-lg md:rounded-l-lg md:rounded-t-none object-cover"
                />
              </div>
            </div>
            <div className="p-8 flex flex-col justify-between">
              <div>
                <h1 className="text-3xl leading-8 font-serif tracking-tight text-gray-900 sm:text-4xl mb-4">{software.title}</h1>
                <p className="text-xl text-gray-500 whitespace-pre-wrap mb-6">
                  {software.description}
                </p>
              </div>
              <div className="mt-6">
                <a
                  href={software.downloadLink}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
                >
                  <Download className="mr-2" size={20} />
                  Download Software
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SoftwareSection limit={3} currentSlug={slug} />
    </div>
  )
}