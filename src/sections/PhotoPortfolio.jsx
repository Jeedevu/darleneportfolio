import { useState } from 'react'
import { useRevealGroup } from '../hooks/useReveal'
import Lightbox from '../components/Lightbox'

const FILTERS = ['All','Fashion','Lifestyle','Home & Kitchen','Beauty','Events']

const GALLERY = [
  { src:'/images/IMG_5814.JPEG',      cat:'Fashion',       cap:'Luxury Faux Fur',          tall:true  },
  { src:'/images/IMG_5817.JPEG',      cat:'Fashion',       cap:'Black Leather Dress',       tall:false },
  { src:'/images/IMG_3563.JPEG',      cat:'Fashion',       cap:'Editorial Leather Look',    tall:true  },
  { src:'/images/IMG_5338.JPEG',      cat:'Fashion',       cap:'Brown Lace Dress',          tall:false },
  { src:'/images/IMG_5385 (2).JPEG',  cat:'Fashion',       cap:'Leopard & Gucci',           tall:false },
  { src:'/images/IMG_5389.JPEG',      cat:'Fashion',       cap:'White Crop & Leather',      tall:true  },
  { src:'/images/IMG_5392.JPEG',      cat:'Fashion',       cap:'Casual Edgy Vibes',         tall:false },
  { src:'/images/COUNTY CONCERT OUTFIT.jpg', cat:'Fashion',cap:'Country Concert Look',      tall:false },
  { src:'/images/IMG_5815.JPEG',      cat:'Fashion',       cap:'Paisley Maxi Gown',         tall:true  },
  { src:'/images/denim pic.JPEG',     cat:'Lifestyle',     cap:'Cozy Lifestyle Moment',     tall:false },
  { src:'/images/IMG_0002.JPEG',      cat:'Lifestyle',     cap:'Portrait in Black Hat',     tall:false },
  { src:'/images/IMG_0004.JPEG',      cat:'Lifestyle',     cap:'Hallway Style',             tall:true  },
  { src:'/images/MORGAN WALLEN CONCERT.jpg', cat:'Events', cap:'Morgan Wallen Concert',    tall:false },
  { src:'/images/BACK STREET BOYS CONCERT.jpg', cat:'Events',cap:'Backstreet Boys Concert',tall:false },
  { src:'/images/FEEDING GOATS.jpg',  cat:'Lifestyle',     cap:'Farm Adventures',           tall:true  },
  { src:'/images/BEST MAI TAI.jpg',   cat:'Lifestyle',     cap:'Best Mai Tai',              tall:false },
  { src:'/images/IMG_3885.JPEG',      cat:'Home & Kitchen',cap:'Kitchen Style',             tall:true  },
  { src:'/images/IMG_4643.JPEG',      cat:'Home & Kitchen',cap:'Cleaning Product Demo',     tall:false },
  { src:'/images/IMG_4644.JPEG',      cat:'Home & Kitchen',cap:'Kitchen Clean UGC',         tall:false },
  { src:'/images/IMG_4647.JPEG',      cat:'Home & Kitchen',cap:'Floor Mop Demo',            tall:true  },
  { src:'/images/refrigerator pic.JPEG', cat:'Home & Kitchen',cap:'Refrigerator Feature',  tall:false },
  { src:'/images/IMG_5340.JPEG',      cat:'Beauty',        cap:'Natural Beauty Portrait',   tall:true  },
  { src:'/images/IMG_5205.JPEG',      cat:'Beauty',        cap:'Effortless Glow',           tall:false },
  { src:'/images/IMG_0573.JPEG',      cat:'Beauty',        cap:'Hat & Waves',               tall:false },
  { src:'/images/08_04_2026(4).jpg',  cat:'Lifestyle',     cap:'Active Lifestyle',          tall:true  },
  { src:'/images/08_04_2026.jpg',     cat:'Lifestyle',     cap:'Casual Chic',               tall:false },
  { src:'/images/08_04_2026(1).jpg',  cat:'Fashion',       cap:'Linen & Navy',              tall:false },
  { src:'/images/08_04_2026(2).jpg',  cat:'Lifestyle',     cap:'Everyday Casual',           tall:true  },
  { src:'/images/red top pic.JPEG',   cat:'Beauty',        cap:'Red Satin Glow',            tall:false },
  { src:'/images/IMG_0868.JPEG',      cat:'Lifestyle',     cap:'Editorial Floor Pose',      tall:true  },
]

export default function PhotoPortfolio() {
  const [filter,        setFilter]        = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const ref = useRevealGroup()

  const filtered = filter === 'All' ? GALLERY : GALLERY.filter(g => g.cat === filter)

  return (
    <section id="photo-portfolio" className="bg-cream relative overflow-hidden py-section">
      <span className="watermark watermark-dark bottom-0 right-[-2%] pointer-events-none z-0" aria-hidden="true">PHOTOS</span>

      <div className="relative z-10 max-w-[1340px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <span className="overline-label mb-5 block" style={{color:'#1F1A17',opacity:.55}}>Photo Gallery</span>
            <h2 className="heading-section text-espresso">
              A Closer <em className="font-script not-italic text-choco">Look</em>
            </h2>
          </div>
          <p className="text-espresso/50 font-sans font-light max-w-sm leading-relaxed">
            Personality, versatility, and authenticity — in every frame.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map(f => (
            <button key={f} onClick={() => setFilter(f)}
              className={`text-overline font-sans uppercase tracking-[0.18em] px-5 py-2.5 transition-all duration-300
                ${filter === f
                  ? 'bg-espresso text-cream'
                  : 'bg-transparent text-espresso/50 hover:text-espresso border border-espresso/15 hover:border-espresso/40'}`}>
              {f}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div ref={ref} className="columns-2 md:columns-3 lg:columns-4 gap-3">
          {filtered.map((img, i) => (
            <div key={`${filter}-${i}`}
              onClick={() => setLightboxIndex(i)}
              className={`reveal delay-${Math.min((i%6)+1,6)} break-inside-avoid mb-3 relative
                          overflow-hidden cursor-pointer group img-zoom gallery-cursor`}>
              <img src={img.src} alt={img.cap} loading="lazy"
                className="w-full block" />
              {/* Overlay */}
              <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/55
                              transition-all duration-500 flex items-end p-4">
                <span className="text-cream font-sans text-xs tracking-widest uppercase
                                 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100
                                 transition-all duration-400">
                  {img.cap}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <button onClick={() => { const el=document.querySelector('#contact'); if(el) window.scrollTo({top:el.offsetTop-72,behavior:'smooth'}) }}
            className="btn-dark">Contact Me</button>
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox images={filtered} currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex(i => (i-1+filtered.length)%filtered.length)}
          onNext={() => setLightboxIndex(i => (i+1)%filtered.length)} />
      )}
    </section>
  )
}
