import React from "react";
import gadgetsData from "@/app/data/gadgetsData"; // Assuming this is where your data is located
import Link from "next/link"; // Corrected the Link import from next/link
import Image from "next/image";

const GadgetsPage: React.FC = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-serif text-gray-800 mb-8 ">All Gadgets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {gadgetsData.map((gadget) => (
            <div key={gadget.id} className="border rounded-md p-4">
              <Image
                src={gadget.image || "/placeholder.svg"} // Make sure placeholder is in /public
                alt={gadget.title}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">{gadget.title}</h3>
              <p className="text-gray-600">{gadget.price}</p>
              <div className="mt-4 space-x-2">
                {/* Correct Link from Next.js */}
                <Link href={gadget.buyLink} target="_blank" passHref>
                  <span className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300 ease-in-out">
                    Buy Now
                  </span>
                </Link>
                <Link href={gadget.learnMoreLink} passHref>
                  <span className="text-blue-500 hover:underline">View Details</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GadgetsPage;
