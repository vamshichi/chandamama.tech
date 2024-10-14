// import { Suspense } from 'react'
import HomePageContent from '@/app/page-metadata'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Chandamama.tech - Your Tech News, Gadgets, and Courses Hub',
  description: 'Discover the latest in technology, gadget reviews, and online courses at Chandamama.tech. Stay informed and enhance your digital experience.',
  openGraph: {
    title: 'Chandamama.tech - Your Tech News, Gadgets, and Courses Hub',
    description: 'Discover the latest in technology, gadget reviews, and online courses at Chandamama.tech. Stay informed and enhance your digital experience.',
    url: 'https://www.chandamama.tech',
    siteName: 'Chandamama.tech',
    images: [
      {
        url: 'https://www.chandamama.tech/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Chandamama.tech - Your Tech Hub',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chandamama.tech - Your Tech News, Gadgets, and Courses Hub',
    description: 'Discover the latest in technology, gadget reviews, and online courses at Chandamama.tech. Stay informed and enhance your digital experience.',
    images: ['https://www.chandamama.tech/og-image.png'],
  },
}

export default function Home() {
  return (
    <div >
      <HomePageContent />
    </div>
  )
}