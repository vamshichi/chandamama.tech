"use client"

// pages/news/index.tsx
import { useState } from "react";
import CategoryNavigation from "@/app/components/CategoryNavigation";
import NewsList from "@/app/components/News/NewsList";
import Sidebar from "@/app/components/News/Sidebar";

// Sample data (you would fetch this from an API or database)
const newsArticles = [
  { id: 1, title: "Tech News 1", slug: "tech-news-1", date: "Sep 21, 2024", snippet: "Brief description of news 1", image: "/path/to/image1.jpg", category: "Technology" },
  { id: 2, title: "Business News 1", slug: "business-news-1", date: "Sep 20, 2024", snippet: "Brief description of news 2", image: "/path/to/image2.jpg", category: "Business" },
  // Add more articles...
];

const trendingNews = [
  { id: 3, title: "Trending News 1", slug: "trending-news-1" },
  { id: 4, title: "Trending News 2", slug: "trending-news-2" },
  // Add more trending articles...
];

const NewsPage = () => {
  const [category, setCategory] = useState("All");

  // Filter news by category
  const filteredArticles = newsArticles.filter(article =>
    category === "All" || article.category === category
  );

  return (
    <div className="flex flex-col lg:flex-row lg:space-x-8">
      <div className="lg:w-2/3">
        <CategoryNavigation onCategoryChange={setCategory} />
        <NewsList newsArticles={filteredArticles} />
      </div>
      <Sidebar trendingNews={trendingNews} />
    </div>
  );
};

export default NewsPage;
