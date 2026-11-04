import { useState } from 'react'
import VideoModal from '../components/VideoModal'

const FILTERS = ['All','UGC & Products','Beauty','Fashion','Home & Kitchen','Lifestyle']

const VIDEOS = [
  { id:'VIDEO_ID_1', platform:'youtube', cat:'UGC & Products',  tag:'UGC & Products',   title:'Product Demonstration',  desc:'Authentic product unboxing and first impression.',        thumb:'/images/IMG_4643.JPEG' },
  { id:'VIDEO_ID_2', platform:'youtube', cat:'Beauty',          tag:'Beauty & Skincare', title:'Beauty Routine Feature', desc:'Skincare and beauty product application.',                thumb:'/images/IMG_5340.JPEG' },
  { id:'VIDEO_ID_3', platform:'youtube', cat:'Fashion',         tag:'Fashion & Shopping',title:'Outfit & Style Feature',  desc:'Styling and apparel showcase.',                           thumb:'/images/IMG_5338.JPEG' },
  { id:'VIDEO_ID_4', platform:'youtube', cat:'Home & Kitchen',  tag:'Home & Kitchen',    title:'Kitchen Product Demo',   desc:'Practical household product demonstration.',              thumb:'/images/IMG_3885.JPEG' },
  { id:'VIDEO_ID_5', platform:'youtube', cat:'Lifestyle',       tag:'Lifestyle',         title:'Day in the Life',         desc:'Relatable everyday content and personal storytelling.',   thumb:'/images/denim pic.JPEG' },
  { id:'VIDEO_ID_6', platform:'youtube', cat:'UGC & Products',  tag:'Commercial & Brand',title:'Brand Testimonial',       desc:'Product testimonial and brand storytelling.',             thumb:'/images/IMG_5817.JPEG' },
]

export default function VideoPortfolio() {
  const [filter,  setFilter]  = useState('All')
  const [active,  setActive]  = useState(null)

  const filtered = filter === 'All' ? VIDEOS : VIDEOS.filter(v => v.cat === filter)

  return (
    <section id="video-portfolio" className="bg-blush relative overflow-hidden py-section">
      <span className="watermark watermark-dark bottom-0 right-[-2%] pointer-events-none z-0" aria-hidden="true">VIDEO</span>

      <div className="relative z-10 max-w-[1340px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <span className="overline-label mb-5 block" style={{color:'#1F1A17',opacity:.55}}>Video Work</span>
            <h2 className="heading-section text-espresso">
              Watch My <em className="font-script not-italic text-choco">Work</em>
            </h2>
          </div>
          <p className="text-espresso/50 font-sans font-light max-w-xs leading-relaxed">
            Natural on-camera delivery, relatable storytelling, and lifestyle content that converts.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map(f => (
            <button key={f} onClick={() => setFilter(f)}
              className={`text-overline font-sans uppercase tracking-[0.18em] px-5 py-2.5 transition-all duration-300
                ${filter === f ? 'bg-espresso text-cream' : 'border border-espresso/15 text-espresso/50 hover:text-espresso hover:border-espresso/40'}`}>
              {f}
            </button>
          ))}
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((vid, i) => (
            <div key={i} className="group cursor-pointer" onClick={() => setActive(vid)}>
              {/* Thumbnail */}
              <div className="relative aspect-[9/16] sm:aspect-video overflow-hidden bg-espresso-light img-zoom mb-4">
                <img src={vid.thumb} alt={vid.title}
                  className="w-full h-full object-cover object-top" loading="lazy" />
                <div className="absolute inset-0 bg-espresso/30 group-hover:bg-espresso/60 transition-all duration-500 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-cream/10 backdrop-blur-sm border border-cream/30
                                  flex items-center justify-center group-hover:scale-110 transition-transform duration-400">
                    <i className="fas fa-play text-cream text-lg ml-1" />
                  </div>
                </div>
                <span className="absolute bottom-3 left-3 bg-espresso/80 text-gold text-[0.58rem] font-sans uppercase tracking-widest px-2.5 py-1">
                  {vid.tag}
                </span>
              </div>
              <h3 className="font-display font-bold text-espresso text-lg mb-1 group-hover:text-choco transition-colors duration-300">
                {vid.title}
              </h3>
              <p className="text-espresso/50 font-sans font-light text-sm">{vid.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <button onClick={() => { const el=document.querySelector('#contact'); if(el) window.scrollTo({top:el.offsetTop-72,behavior:'smooth'}) }}
            className="btn-dark">Discuss a Video Project</button>
        </div>
      </div>

      {active && <VideoModal videoId={active.id} platform={active.platform} onClose={() => setActive(null)} />}
    </section>
  )
}
