import { Suspense } from 'react'
import GadgetsContent from '@/app/components/gadgets/GadgetsContent'

export default function GadgetsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GadgetsContent />
    </Suspense>
  )
}