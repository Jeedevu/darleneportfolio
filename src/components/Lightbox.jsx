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
    return () => { document.removeEventListener('keydown', handleKey); document.body.style.overflow = '' }
  }, [handleKey])

  if (!current) return null

  return (
    <>
      <div className="fixed inset-0 bg-espresso/96 z-[2000]" onClick={onClose} />
      <div className="fixed inset-0 z-[2001] flex items-center justify-center gap-6 p-4"
        role="dialog" aria-modal="true">

        <button onClick={onClose} aria-label="Close"
          className="fixed top-6 right-6 w-10 h-10 border border-cream/20 flex items-center justify-center
                     text-cream/60 hover:text-gold hover:border-gold transition-all duration-300 z-[2002]">
          <i className="fas fa-times text-sm" />
        </button>

        <button onClick={onPrev} aria-label="Previous"
          className="flex-shrink-0 w-11 h-11 border border-cream/15 flex items-center justify-center
                     text-cream/40 hover:text-gold hover:border-gold transition-all duration-300">
          <i className="fas fa-chevron-left text-sm" />
        </button>

        <div className="flex flex-col items-center max-w-[85vw]">
          <img src={current.src} alt={current.cap}
            className="max-h-[82vh] max-w-full object-contain" />
          <div className="flex items-center gap-4 mt-4">
            <div className="rule-gold" />
            <span className="text-overline text-cream/40 tracking-widest">{current.cap}</span>
            <span className="text-cream/20 font-sans text-xs">{currentIndex+1} / {images.length}</span>
          </div>
        </div>

        <button onClick={onNext} aria-label="Next"
          className="flex-shrink-0 w-11 h-11 border border-cream/15 flex items-center justify-center
                     text-cream/40 hover:text-gold hover:border-gold transition-all duration-300">
          <i className="fas fa-chevron-right text-sm" />
        </button>
      </div>
    </>
  )
}
