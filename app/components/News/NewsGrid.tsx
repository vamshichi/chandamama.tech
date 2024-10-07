'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import NewsCard from './NewsCard'

interface NewsArticle {
  id: number
  title: string
  date: string
  content: string
  image: string
  slug: string
  readTime?: number
  snippet: string
}

interface NewsGridProps {
  showViewAllButton?: boolean
  limit?: number
  currentSlug?: string
  titleLimit?: number
}

export default function NewsGrid({ 
  showViewAllButton = false, 
  limit, 
  currentSlug,
  titleLimit = 60 // Default title limit
}: NewsGridProps) {
  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/api/news');
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const data = await response.json();
        
        // Sort articles by date (newest first)
        const sortedArticles = data.sort((a: NewsArticle, b: NewsArticle) => {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        });

        setNewsArticles(sortedArticles);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
        setError('Failed to load news articles. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  // Filter out the current article by slug if currentSlug is provided
  let displayedNews = currentSlug 
    ? newsArticles.filter(news => news.slug !== currentSlug) 
    : newsArticles;

  // Limit the news if the `limit` prop is provided
  displayedNews = limit ? displayedNews.slice(0, limit) : displayedNews;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Function to truncate title
  const truncateTitle = (title: string, limit: number) => {
    if (title.length <= limit) return title;
    return title.slice(0, limit) + '...';
  };

  if (isLoading) {
    return <div className="py-12 bg-gray-50 text-center">Loading news articles...</div>;
  }

  if (error) {
    return <div className="py-12 bg-gray-50 text-center text-red-500">{error}</div>;
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedNews.map((news: NewsArticle) => (
            <NewsCard 
              key={news.id}
              id={news.id}
              title={truncateTitle(news.title, titleLimit)}
              date={formatDate(news.date)} // Apply your formatDate function here
              snippet={news.snippet}
              image={news.image}
              slug={news.slug}
              readTime={news.readTime}
            />
          ))}
        </div>

        {showViewAllButton && (
          <div className="flex justify-center mt-12">
            <Link 
              href="/news"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300 ease-in-out"
            >
              View All News
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
