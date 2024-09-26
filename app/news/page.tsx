// pages/news/index.tsx
import NewsGrid from '@/app/components/News/NewsGrid';

const NewsPage: React.FC = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-serif text-gray-800 mb-8 px-4">All News</h1>
      <NewsGrid />
    </div>
  );
};

export default NewsPage;
