import Image from 'next/image'
import Link from 'next/link'
import gadgetsData from "@/app/data/gadgetsData"

export default function PopularGadgetsSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <Link href={"/gadgets"}>
        <h2 className="text-3xl font-serif text-gray-800 mb-8">Popular Gadgets</h2>
        </Link>
        
        <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
          {gadgetsData.map((gadget) => (
            <div key={gadget.id} className="min-w-[250px] bg-white p-4 border rounded-lg shadow-md flex flex-col">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={gadget.image || "/placeholder.svg"}
                  alt={gadget.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
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
              href="/news"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300 ease-in-out"
            >
              View All gadgets
            </Link>
      </div>
      </div>
    </section>
  )
}