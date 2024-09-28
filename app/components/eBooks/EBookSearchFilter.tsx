'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search } from 'lucide-react'
import eBooksData from '@/app/data/eBooksData'

export default function EBookSearchFilter() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = useMemo(() => {
    const allCategories = eBooksData.map(book => book.category)
    return ['All', ...allCategories.filter((category, index) => allCategories.indexOf(category) === index)]
  }, [])

  const filteredEBooks = useMemo(() => {
    return eBooksData.filter((book) => {
      const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || !selectedCategory ? true : book.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-serif text-gray-800 mb-8 text-center">Course Library</h1>
        
        {/* Search Bar */}
        <div className="mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for eBooks..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${
                selectedCategory === category || (category === 'All' && !selectedCategory)
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setSelectedCategory(category === 'All' ? null : category)}
            >
              {category}
            </button>
          ))}
        </div>
       {/* eBooks Grid */}
{filteredEBooks.length > 0 ? (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {filteredEBooks.map((book) => (
      <div key={book.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-48">
          <Image
            src={book.image || '/default-cover.jpg'}
            alt={book.title}
            layout="fill"
            // objectFit="cover"
          />
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2">{book.title}</h3>
          <p className="text-sm text-gray-500 mb-4">{book.category}</p>
          <div className="flex justify-between items-center">
            <Link 
              href={book.link}
              className="text-blue-500 hover:text-blue-700 transition duration-300"
            >
              Read More
            </Link>
            <div>
              {book.pdfLink ? (
                <Link 
                  href={book.pdfLink} 
                  className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
                  target="_blank" // Opens the link in a new tab
                  rel="noopener noreferrer" // Prevents security risks
                >
                  download
                </Link>
              ) : (
                <span className="text-sm text-gray-500"></span>
              )}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
) : (
  <p className="text-center text-gray-500 text-lg">No eBooks found matching your criteria.</p>
)}

      </div>
    </section>
  )
}