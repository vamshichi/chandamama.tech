'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import eBooksData from '@/app/data/eBooksData'
import EBookCarousel from '@/app/components/eBooks/EBookCarousel'
import EBookMetaTags from '@/app/components/eBooks/EBookMetaTags'

export default function EBookDetailClient() {
  const params = useParams()
  const slug = params.slug as string

  const book = eBooksData.find((b) => b.link.split('/').pop() === slug)

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Book Not Found</h1>
          <p className="text-gray-600 mb-8">Sorry, we couldn't find the book you're looking for.</p>
          <Link 
            href="/ebooks" 
            className="text-blue-500 hover:text-blue-700 transition duration-300 flex items-center justify-center"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to eBooks
          </Link>
        </div>
      </div>
    )
  }

  const fullUrl = `https://www.chandamama.tech${book.link}`

  return (
    <>
      <EBookMetaTags
        title={book.title}
        category={book.category}
        image={book.image}
        content={book.content}
        url={fullUrl}
      />
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto py-12 px-4">
          <Link 
            href="/ebooks" 
            className="text-blue-500 hover:text-blue-700 transition duration-300 flex items-center mb-8"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to eBooks
          </Link>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <div className="relative w-full md:w-64 h-96">
                  <Image
                    src={book.image || '/placeholder.svg'}
                    alt={book.title}
                    fill
                    style={{ objectFit: "cover" }}  
                    className="rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                  />
                </div>
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{book.category}</div>
                <h1 className="mt-2 text-3xl leading-8 font-serif tracking-tight text-gray-900 sm:text-4xl">{book.title}</h1>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 whitespace-pre-wrap">
                  {book.content}
                </p>
                <div className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <a
                    href={book.pdfLink}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <EBookCarousel />
      </div>
    </>
  )
}