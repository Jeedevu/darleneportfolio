import { useEffect } from 'react'

export default function VideoModal({ videoId, platform, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [onClose])

  const isPlaceholder = videoId?.startsWith('VIDEO_ID')
  const src = platform === 'youtube'
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`
    : `https://www.tiktok.com/embed/${videoId}`

  return (
    <>
      <div className="fixed inset-0 bg-espresso/96 z-[2000]" onClick={onClose} />
      <div className="fixed inset-0 z-[2001] flex items-center justify-center p-4">
        <button onClick={onClose} aria-label="Close video"
          className="fixed top-6 right-6 w-10 h-10 border border-cream/20 flex items-center justify-center
                     text-cream/60 hover:text-gold hover:border-gold transition-all duration-300 z-[2002]">
          <i className="fas fa-times text-sm" />
        </button>
        <div className="w-full max-w-4xl">
          {isPlaceholder ? (
            <div className="aspect-video bg-espresso-light flex flex-col items-center justify-center gap-4">
              <i className="fas fa-video text-gold/40 text-4xl" />
              <p className="font-display text-cream/50 text-lg">Video coming soon</p>
              <p className="font-sans text-cream/25 text-xs">
                Update the video ID in <code className="text-gold/50">src/sections/VideoPortfolio.jsx</code>
              </p>
            </div>
          ) : (
            <div className="relative pb-[56.25%] h-0">
              <iframe src={src} title="Darlene Waldrop portfolio video"
                className="absolute inset-0 w-full h-full"
                frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen />
            </div>
          )}
        </div>
      </div>
    </>
  )
}
