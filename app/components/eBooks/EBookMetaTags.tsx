import Head from 'next/head'
import { StaticImageData } from 'next/image'

interface EBookMetaTagsProps {
  title: string
  category: string
  image: string | StaticImageData
  content: string
  url: string
}

const EBookMetaTags: React.FC<EBookMetaTagsProps> = ({ title, category, image, content, url }) => {
  const description = content.slice(0, 200) + '...' // Truncate content for description

  return (
    <Head>
      <title>{title} - Chandamama courses</title>
      <meta name="description" content={description} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={`${title} - Chandamama eBooks`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={typeof image === 'string' ? image : image.src} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="book" />
      <meta property="og:site_name" content="Chandamama" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} - Chandamama eBooks`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={typeof image === 'string' ? image : image.src} />

      {/* Additional Meta Tags */}
      <meta name="book:author" content="Chandamama" />
      <meta name="book:category" content={category} />
    </Head>
  )
}

export default EBookMetaTags