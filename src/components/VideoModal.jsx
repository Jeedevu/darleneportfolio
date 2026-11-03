import { useEffect } from 'react'

export default function VideoModal({ videoId, platform, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [onClose])

  const src = platform === 'youtube'
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`
    : `https://www.tiktok.com/embed/${videoId}`

  const isPlaceholder = videoId.startsWith('VIDEO_ID')

  return (
    <>
      <div className="fixed inset-0 bg-brown/95 z-[2000]" onClick={onClose} aria-hidden="true" />
      <div className="fixed inset-0 z-[2001] flex items-center justify-center p-4"
        role="dialog" aria-modal="true" aria-label="Video player">

        <button onClick={onClose} aria-label="Close video"
          className="fixed top-5 right-5 w-10 h-10 bg-white border-2 border-brown flex items-center justify-center hover:bg-rose-pale z-[2002]">
          <i className="fas fa-times text-brown" />
        </button>

        <div className="w-full max-w-4xl border-2 border-brown shadow-brutal-lg bg-brown">
          {isPlaceholder ? (
            <div className="aspect-video flex flex-col items-center justify-center bg-cream text-brown gap-3">
              <i className="fas fa-video text-4xl text-rose" />
              <p className="font-serif text-lg font-bold">Video Coming Soon</p>
              <p className="text-sm text-taupe">Update the video ID in <code className="bg-rose-pale px-1">src/data/content.js</code></p>
            </div>
          ) : (
            <div className="relative pb-[56.25%] h-0">
              <iframe
                src={src}
                title="Darlene Waldrop portfolio video"
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </div>
      </div>
    </>
  )
}
