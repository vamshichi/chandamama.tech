import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
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
  title:{
    default : 'chandamama.tech',
    template : '%s - chandamama.tech'
  },
  description: "With Chandamama.tech, you&apos;ll find a blend of information, entertainment, and convenience, all while accessing affiliate links to help you make informed decisions when purchasing eBooks and gadgets.",
  twitter:{
    card:'summary_large_image'
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <Analytics/>
        
        <main>
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
