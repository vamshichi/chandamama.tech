// Sidebar.tsx
interface NewsItem {
    id: number;
    title: string;
    slug: string;
  }
  
  interface SidebarProps {
    trendingNews: NewsItem[];
  }
  
  const Sidebar: React.FC<SidebarProps> = ({ trendingNews }) => {
    return (
      <div className="w-full lg:w-1/3 space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Trending News</h3>
          <ul className="mt-4 space-y-4">
            {trendingNews.map((news: NewsItem) => (
              <li key={news.id}>
                <a href={`/news/${news.slug}`} className="text-blue-600 hover:underline">
                  {news.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Subscribe to Newsletter</h3>
          <form className="mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
            />
            <button className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Sidebar;
  