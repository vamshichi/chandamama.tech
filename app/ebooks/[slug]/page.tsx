'use client'

import { useParams } from 'next/navigation'
import eBooksData from '@/app/data/eBooksData'
import Image from 'next/image'

export default function EBookDetailClient() {
  const params = useParams()
  const slug = params.slug as string

  const book = eBooksData.find((b) => b.link.includes(slug))

  if (!book) {
    return <div>Book not found</div>
  }

  return (
    <div className="container mx-auto py-8">
      {/* Title and Category */}
      <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
      <p className="text-gray-600 mb-8">{book.category}</p>

      {/* Image: Fixed size and cover */}
      <div className="relative w-full h-96 mb-8"> {/* h-96 sets the height */}
        <Image
          src={book.image || '/placeholder.svg'}
          alt={book.title}
          fill
          style={{ objectFit: "cover" }}  
          className="rounded-md"
        />
      </div>

      {/* Content */}
      <div className="mb-8">
        <p>{book.content || 'No content available for this eBook.'}</p>
      </div>

      {/* Download or Read More */}
      <div className="mt-4">
        <a
          href={book.link}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Download 
        </a>
      </div>
    </div>
  )
}
