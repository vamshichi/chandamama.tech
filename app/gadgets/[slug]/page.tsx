

import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ShoppingCart, Info } from 'lucide-react'
import gadgetsData from '@/app/data/gadgetsData'
import PopularGadgetsSection from '@/app/components/gadgets/PopularGadgetsSection'
// import { notFound } from 'next/navigation'

export default function GadgetDetailPage() {
  const params = useParams()
  const slug = params.slug as string

  const gadget = gadgetsData.find((g) => g.learnMoreLink.includes(slug))

  if (!gadget) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Gadget Not Found</h1>
          <p className="text-gray-600 mb-8">Sorry, we couldn't find the gadget you're looking for.</p>
          <Link 
            href="/gadgets" 
            className="text-blue-500 hover:text-blue-700 transition duration-300 flex items-center justify-center"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Gadgets
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-12 px-4">
        <Link 
          href="/gadgets" 
          className="text-blue-500 hover:text-blue-700 transition duration-300 flex items-center mb-8"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Gadgets
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <div className="relative w-full md:w-96 h-96">
                <Image
                  src={gadget.image || "/placeholder.svg"}
                  alt={gadget.title}
                  fill
                  // style={{ objectFit: "cover" }}  
                  className="rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                />
              </div>
            </div>
            <div className="p-8">
              {/* <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {gadget.category || "Gadget"}
              </div> */}
              <h1 className="mt-2 text-3xl leading-8 font-serif tracking-tight text-gray-900 sm:text-4xl">
                {gadget.title}
              </h1>
              <p className="mt-4 text-2xl font-semibold text-gray-900">{gadget.price}</p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 whitespace-pre-wrap">
                {gadget.description || "No description available for this gadget."}
              </p>
              <div className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href={gadget.buyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
                >
                  <ShoppingCart className="mr-2" size={20} />
                  Buy Now
                </a>
                {/* <Link
                  href={gadget.learnMoreLink}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
                >
                  <Info className="mr-2" size={20} />
                  Learn More
                </Link> */}
              </div>
            </div>
          </div>
        </div>

        {/* Additional sections can be added here, such as specifications, reviews, or related gadgets */}
      </div>
    </div>
    <PopularGadgetsSection currentSlug={slug} />
    </> 
  )
}