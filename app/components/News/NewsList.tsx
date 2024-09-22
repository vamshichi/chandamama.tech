import Link from "next/link";

interface NewsArticle {
    id: number;
    title: string;
    slug: string;
    date: string;
    snippet: string;
    image: string;
  }
  

// Define the type for the newsArticles prop
interface NewsListProps {
  newsArticles: NewsArticle[];  // Array of NewsArticle objects
}

const NewsList: React.FC<NewsListProps> = ({ newsArticles }) => {
  return (
    <div className="grid grid-cols-1 gap-6">
      {newsArticles.map((article: NewsArticle) => (
        <div key={article.id} className="flex border-b border-gray-300 pb-4">
          <img
            src={article.image}
            alt={article.title}
            className="w-32 h-24 object-cover rounded-md mr-4"
          />
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                <Link href={`/news/${article.slug}`}>
                  {article.title}
                </Link>
              </h3>
              <p className="text-sm text-gray-500">{article.date}</p>
              <p className="text-gray-600">{article.snippet}</p>
            </div>
            <Link href={`/news/${article.slug}`} className="text-blue-600 hover:underline mt-2">
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
