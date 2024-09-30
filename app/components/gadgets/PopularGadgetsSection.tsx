import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Info } from 'lucide-react';
import gadgetsData from "@/app/data/gadgetsData";

interface PopularGadgetsSectionProps {
  currentSlug?: string;
}

export default function PopularGadgetsSection({ currentSlug }: PopularGadgetsSectionProps) {
  const filteredGadgets = gadgetsData
    .filter((gadget) => currentSlug ? !gadget.learnMoreLink.includes(currentSlug):true)
    .slice(0, 4); // Limit to 4 gadgets

  return (
    <section className="py-12 bg-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-serif text-gray-800">Gadgets</h2>
          <Link 
            href="/gadgets"
            className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGadgets.map((gadget) => (
            <div key={gadget.id} className="bg-white p-4 border rounded-lg shadow-md flex flex-col h-full transition duration-300 ease-in-out hover:shadow-lg">
              <div className="relative w-full h-48 mb-4 overflow-hidden rounded-md">
                <Link href={gadget.learnMoreLink}>
                  <Image
                    src={gadget.image || "/placeholder.svg"}
                    alt={gadget.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="transition duration-300 ease-in-out hover:scale-105"
                  />
                </Link>
              </div>
              <h3 className="text-lg font-semibold mb-2 line-clamp-2">{gadget.title}</h3>
              <p className="text-gray-600 mb-4 font-bold">{gadget.price}</p>
              <div className="mt-auto space-y-2">
                <Link
                  href={gadget.buyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded transition duration-300 ease-in-out"
                >
                  <ShoppingCart className="mr-2" size={18} />
                  Buy Now
                </Link>
                <Link
                  href={gadget.learnMoreLink}
                  className="flex items-center justify-center text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
                >
                  <Info className="mr-2" size={18} />
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link 
            href="/gadgets"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300 ease-in-out flex items-center"
          >
            View All Gadgets
            <span className="sr-only">(opens gadgets page)</span>
          </Link>
        </div>
      </div>
    </section>
  )
}