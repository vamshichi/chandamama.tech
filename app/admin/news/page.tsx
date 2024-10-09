import { Suspense } from 'react'
import AdminNewsContent from '@/app/components/admin/AdminNewsContent'

export default function AdminNewsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AdminNewsContent />
    </Suspense>
  )
}