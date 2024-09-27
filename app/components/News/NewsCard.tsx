'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { NewspaperIcon } from 'lucide-react'
import { StaticImageData } from 'next/image'

interface NewsCardProps {
  id: number
  title: string
  date?: string
  snippet: string
  image: string | StaticImageData
  slug: string
}

const NewsCard: React.FC<NewsCardProps> = ({ title, date, snippet, image, slug }) => {
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  const getFormattedDate = (dateString?: string): string => {
    const dateToFormat = dateString ? new Date(dateString) : new Date()
    return dateToFormat.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const isExternalImage = typeof image === 'string' && (image.startsWith('http') || image.startsWith('data:'))

  return (
    <article className="border rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl flex flex-col h-full">
      <div className="relative w-full h-48 bg-gray-200">
        {image && !imageError ? (
          isExternalImage ? (
            <Image
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              onError={handleImageError}
            />
          ) : (
            <Image
              src={image}
              alt={title}
              layout="fill"
              objectFit="cover"
              onError={handleImageError}
            />
          )
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <NewspaperIcon className="w-12 h-12 text-gray-400" aria-hidden="true" />
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          <Link href={`/news/${slug}`} className="hover:underline">
            {title}
          </Link>
        </h3>
        <time dateTime={date} className="text-sm text-gray-500 mb-2">
          {getFormattedDate(date)}
        </time>
        <p className="text-gray-700 flex-grow">{snippet}</p>
        <Link 
          href={`/news/${slug}`}
          className="inline-block mt-4 text-blue-600 hover:text-blue-800 transition-colors duration-200"
        >
          Read More
          <span className="sr-only"> about {title}</span>
        </Link>
      </div>
    </article>
  )
}

export default NewsCard