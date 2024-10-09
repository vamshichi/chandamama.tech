'use client'

import { useEffect } from 'react'

export default function GoogleAdsense() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.error('Error loading Google AdSense:', err)
    }
  }, [])

  return (
    <script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9428605190190822"
      crossOrigin="anonymous"
    />
  )
}