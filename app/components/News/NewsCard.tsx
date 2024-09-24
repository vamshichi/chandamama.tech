"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { NewspaperIcon } from 'lucide-react'

interface NewsCardProps {
  id: number
  title: string
  date: string
  snippet: string
  image: string
  slug: string
}

const NewsCard: React.FC<NewsCardProps> = ({ title, date, snippet, image, slug }) => {
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  const isExternalImage = image.startsWith('http') || image.startsWith('data:')

  return (
    <div className="border rounded-lg shadow-lg overflow-hidden">
      <div className="relative w-full h-48 bg-gray-200">
        {image && !imageError ? (
          isExternalImage ? (
            <img
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
            <NewspaperIcon className="w-12 h-12 text-gray-400" />
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-500 text-sm">{date}</p>
        <p className="mt-2 text-gray-700">{snippet}</p>
        <Link href={`/news/${slug}`}>
          <span className="text-blue-500 hover:underline mt-4 block">Read More</span>
        </Link>
      </div>
    </div>
  )
}

export default NewsCard