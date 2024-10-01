// pages/ebooks/index.tsx
import EBookSearchFilter from '@/app/components/eBooks/EBookSearchFilter';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Courses',
};

const EBookPage: React.FC = () => {
  return (
    <div>
      {/* <h1 className="text-center text-3xl font-bold my-8">Browse Our eBooks</h1> */}
      {/* EBook Search and Filter Component */}
      <EBookSearchFilter />
    </div>
  );
};

export default EBookPage;
