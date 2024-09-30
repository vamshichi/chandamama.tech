'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { DownloadIcon } from 'lucide-react'
import { StaticImageData } from 'next/image'

interface SoftwareCardProps {
  id: number
  title: string
  description: string
  image: string | StaticImageData
  snippet?: string
  downloadLink: string
  slug: string
}

const SoftwareCard: React.FC<SoftwareCardProps> = ({ title, snippet, image, downloadLink,slug}) => {
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  const isExternalImage = typeof image === 'string' && (image.startsWith('http') || image.startsWith('data:'))

  return (
    <div className="border rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl flex flex-col h-full ">
     
      <div className="relative w-full h-48 ">
        {image && !imageError ? (
          isExternalImage ? (
            <Image
              src={image}
              alt={title}
              className="w-full h-full"
              onError={handleImageError}
            />
          ) : (
            <Image
              src={image}
              alt={title}
              fill
              className="transition duration-300 ease-in-out hover:scale-105 "
              // objectFit="cover"
              onError={handleImageError}
            />
          )
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <DownloadIcon className="w-12 h-12 text-gray-400" aria-hidden="true" />
          </div>
        )}
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {title}
        </h3>
        <p className="text-gray-700 flex-grow">{snippet}</p>
        <div className="flex justify-between items-center pt-5">
        <Link 
          href={slug}
          className="text-blue-500 hover:text-blue-700 transition duration-300"
          >
          Read More
          <span className="sr-only"> about {title}</span>
        </Link>
        <Link 
          href={downloadLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
          >
          Download
        </Link>
        </div>
      </div>
    </div>
  )
}

export default SoftwareCard
