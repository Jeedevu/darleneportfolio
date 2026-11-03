import { useState } from 'react'
import { IMAGES, GALLERY_FILTERS } from '../data/images'
import Lightbox from '../components/Lightbox'

export default function PhotoPortfolio() {
  const [filter, setFilter] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filtered = filter === 'all' ? IMAGES.gallery : IMAGES.gallery.filter(img => img.category === filter)

  const openLightbox = (i) => { setLightboxIndex(i) }
  const closeLightbox = () => setLightboxIndex(null)
  const prevImage = () => setLightboxIndex(i => (i - 1 + filtered.length) % filtered.length)
  const nextImage = () => setLightboxIndex(i => (i + 1) % filtered.length)

  return (
    <section id="photo-portfolio" className="bg-rose-blush border-b-2 border-brown py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-10">
          <span className="section-label mb-4 block w-fit mx-auto">Photo Gallery</span>
          <h2 className="section-heading mb-4">A Closer Look</h2>
          <p className="text-taupe max-w-2xl mx-auto leading-relaxed">
            A collection of moments, styles, and creative projects that reflect my personality and versatility
            in front of the camera.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-8" role="group" aria-label="Filter gallery">
          {GALLERY_FILTERS.map(f => (
            <button key={f.key} onClick={() => setFilter(f.key)}
              className={`text-[0.8rem] font-semibold px-4 py-2 border-2 border-brown shadow-brutal transition-all duration-150
                hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg
                ${filter === f.key ? 'bg-rose text-white' : 'bg-white text-brown'}`}>
              {f.label}
            </button>
          ))}
        </div>

        {/* Masonry Gallery */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3">
          {filtered.map((img, i) => (
            <div key={`${filter}-${i}`}
              className="break-inside-avoid mb-3 border-2 border-brown shadow-brutal overflow-hidden relative group cursor-pointer
                         hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg transition-all duration-150"
              onClick={() => openLightbox(i)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && openLightbox(i)}
              aria-label={`View ${img.caption}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy"
                className="w-full block group-hover:scale-[1.04] transition-transform duration-500" />
              <div className="absolute inset-0 bg-rose/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200
                              flex items-end justify-between p-3">
                <span className="text-white text-[0.72rem] font-semibold tracking-wide uppercase">{img.label}</span>
                <div className="w-8 h-8 bg-white border-2 border-brown flex items-center justify-center">
                  <i className="fas fa-expand text-brown text-xs" aria-hidden="true" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-taupe mb-4">Interested in working together? Let's talk.</p>
          <a href="#contact"
            onClick={e => { e.preventDefault(); const el = document.querySelector('#contact'); if(el) window.scrollTo({top: el.offsetTop-74, behavior:'smooth'}) }}
            className="btn-primary">Contact Me</a>
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </section>
  )
}
