import Image from 'next/image'
import Link from 'next/link'
import { StaticImageData } from 'next/image'

interface NewsCardProps {
  id: number
  title: string
  date: string
  snippet: string
  image: string | StaticImageData
  slug: string
  readTime?: number
}

export default function NewsCard({title, date, snippet, image, slug, readTime }: NewsCardProps) {
  // const encodedSlug = encodeURIComponent(slug);
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link href={`/news/${slug}`}>
        <div className="relative h-48">
          <Image
            src={image}
            alt={title}
            fill
            // style={{ objectFit: "cover" }}
          />
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/news/${slug}`}>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
        </Link>
        <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
          <p>{date}</p>
          {readTime && <p>{readTime} min read</p>}
        </div>
        <p className="text-gray-700 mb-4">{snippet}</p>
        <Link href={`/news/${slug}`} className="text-blue-500 hover:text-blue-700 font-semibold">
          Read More
        </Link>
      </div>
    </div>
  )
}