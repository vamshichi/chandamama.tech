import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics } from './components/GoogleAnalytics'
import Navbar from "@/app/components/Header";
import Footer from "./components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: 'Chandamama.tech',
    template: '%s - Chandamama.tech'
  },
  description: "With Chandamama.tech, you'll find a blend of information, entertainment, and convenience, all while accessing affiliate links to help you make informed decisions when purchasing eBooks and gadgets.",
  keywords: ['chandamama', 'chandamama news', 'chandamama gadgets', 'chandamama softwares', 'affiliate marketing', 'blogging', 'blogs', 'blog', 'tech news', 'articles','chandamama.in','chandamama.com','chanda','chan','chand'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.chandamama.tech/',
    siteName: 'Chandamama.tech',
    images: [
      {
        url: 'https://www.chandamama.tech/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Chandamama.tech - Your Tech News, Gadgets, and Courses Hub',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@chandamamatech',
    creator: '@chandamamatech',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    other: {
      'msvalidate.01': 'your-bing-verification-code',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}