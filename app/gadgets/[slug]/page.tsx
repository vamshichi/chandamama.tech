import { Metadata } from 'next'
import GadgetDetailClient from '@/app/components/gadgets/GadgetDetailClient'
import gadgetsData from '@/app/data/gadgetsData'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const gadget = gadgetsData.find((g) => g.learnMoreLink.includes(params.slug))

  if (!gadget) {
    return {
      title: 'Gadget Not Found',
      description: 'The requested gadget could not be found.',
    }
  }

  // Convert StaticImageData to string URL if necessary
  const imageUrl = typeof gadget.image === 'string' 
    ? gadget.image 
    : gadget.image.src

  return {
    title: `${gadget.title} - Chandamama.tech`,
    description: gadget.description.slice(0, 160) + '...',
    openGraph: {
      title: gadget.title,
      description: gadget.description.slice(0, 160) + '...',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: gadget.title,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: gadget.title,
      description: gadget.description.slice(0, 160) + '...',
      images: [imageUrl],
    },
  }
}

export default function GadgetDetail({ params }: Props) {
  return <GadgetDetailClient slug={params.slug} />
}