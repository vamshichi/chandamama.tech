// components/EBookSearchFilter.tsx
"use client"

import { useState } from 'react';
import eBooksData from '@/app/data/eBooksData';
import Link from 'next/link';

const EBookSearchFilter: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredEBooks = eBooksData.filter((book) => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? book.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto py-8">
      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for eBooks..."
          className="border border-gray-300 rounded-md p-2 w-full"
        />
      </div>

      {/* Category Filter */}
      <div className="flex justify-center space-x-4 mb-8">
        <button
          className={`px-4 py-2 ${!selectedCategory ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setSelectedCategory(null)}
        >
          All
        </button>
        <button
          className={`px-4 py-2 ${selectedCategory === 'Technology' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setSelectedCategory('Technology')}
        >
          Technology
        </button>
        <button
          className={`px-4 py-2 ${selectedCategory === 'Fiction' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setSelectedCategory('Fiction')}
        >
          Fiction
        </button>
        <button
          className={`px-4 py-2 ${selectedCategory === 'Non-fiction' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setSelectedCategory('Non-fiction')}
        >
          Non-fiction
        </button>
      </div>

      {/* eBooks Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredEBooks.map((book) => (
          <div key={book.id} className="border rounded-lg p-4 shadow-md">
            <img src={book.image || '/default-cover.jpg'} alt={book.title} className="w-full h-48 object-cover" />
            <h3 className="mt-4 font-bold text-lg">{book.title}</h3>
            <p className="text-gray-500">{book.category}</p>
            <div className="flex justify-between mt-4">
              <Link href={book.link}>
                <span className="text-blue-500">Read More</span>
              </Link>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Download</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EBookSearchFilter;
