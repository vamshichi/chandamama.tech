import Image from 'next/image';
import Link from 'next/link';
import gadgetsData from "@/app/data/gadgetsData";

interface PopularGadgetsSectionProps {
  currentSlug: string;
}

export default function PopularGadgetsSection({ currentSlug }: PopularGadgetsSectionProps) {
  const filteredGadgets = gadgetsData
    .filter((gadget) => !gadget.learnMoreLink.includes(currentSlug))
    .slice(0, 4); // Limit to 4 gadgets

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <Link href="/gadgets">
          <h2 className="text-3xl font-serif text-gray-800 mb-8">Popular Gadgets</h2>
        </Link>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGadgets.map((gadget) => (
            <div key={gadget.id} className="bg-white p-4 border rounded-lg shadow-md flex flex-col h-full">
              <div className="relative w-full h-48 mb-4">
                <Link href={gadget.learnMoreLink}>
                  <Image
                    src={gadget.image || "/placeholder.svg"}
                    alt={gadget.title}
                    fill
                    className="rounded-md"
                  />
                </Link>
              </div>
              <h3 className="text-lg font-semibold mb-2">{gadget.title}</h3>
              <p className="text-gray-600 mb-4">{gadget.price}</p>
              <div className="mt-auto space-y-2">
                <Link
                  href={gadget.buyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded transition duration-300 ease-in-out"
                >
                  Buy Now
                </Link>
                <Link
                  href={gadget.learnMoreLink}
                  className="block text-center text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link 
            href="/gadgets"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300 ease-in-out"
          >
            View All Gadgets
          </Link>
        </div>
      </div>
    </section>
  )
}