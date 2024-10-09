interface Window {
  adsbygoogle: any[],
    gtag: (
      command: 'config' | 'event',
      targetId: string,
      config?: Record<string, any>
    ) => void
  }