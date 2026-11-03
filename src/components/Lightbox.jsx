import { useEffect, useCallback } from 'react'

export default function Lightbox({ images, currentIndex, onClose, onPrev, onNext }) {
  const current = images[currentIndex]

  const handleKey = useCallback((e) => {
    if (e.key === 'Escape')     onClose()
    if (e.key === 'ArrowLeft')  onPrev()
    if (e.key === 'ArrowRight') onNext()
  }, [onClose, onPrev, onNext])

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  if (!current) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brown/90 z-[2000]"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Lightbox */}
      <div className="fixed inset-0 z-[2001] flex items-center justify-center p-4 gap-4"
        role="dialog" aria-modal="true" aria-label="Image viewer">

        {/* Close */}
        <button onClick={onClose} aria-label="Close"
          className="fixed top-5 right-5 w-10 h-10 bg-white border-2 border-brown flex items-center justify-center
                     hover:bg-rose-pale transition-colors z-[2002]">
          <i className="fas fa-times text-brown" />
        </button>

        {/* Prev */}
        <button onClick={onPrev} aria-label="Previous image"
          className="flex-shrink-0 w-11 h-11 bg-white border-2 border-brown flex items-center justify-center
                     hover:bg-rose-pale transition-colors hover:-translate-x-0.5 hover:shadow-brutal">
          <i className="fas fa-chevron-left text-brown" />
        </button>

        {/* Image */}
        <div className="flex flex-col items-center max-w-[85vw]">
          <img
            src={current.src}
            alt={current.alt}
            className="max-h-[80vh] max-w-full object-contain border-2 border-white shadow-brutal-lg"
          />
          {current.caption && (
            <p className="text-white text-sm mt-3 font-medium tracking-wide">{current.caption}</p>
          )}
          <p className="text-white/50 text-xs mt-1">{currentIndex + 1} / {images.length}</p>
        </div>

        {/* Next */}
        <button onClick={onNext} aria-label="Next image"
          className="flex-shrink-0 w-11 h-11 bg-white border-2 border-brown flex items-center justify-center
                     hover:bg-rose-pale transition-colors hover:translate-x-0.5 hover:shadow-brutal">
          <i className="fas fa-chevron-right text-brown" />
        </button>
      </div>
    </>
  )
}
