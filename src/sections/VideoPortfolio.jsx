import { useState } from 'react'
import { VIDEO_PLACEHOLDERS } from '../data/content'
import VideoModal from '../components/VideoModal'

const VIDEO_FILTERS = [
  { key: 'all', label: 'All Videos' },
  { key: 'ugc', label: 'UGC & Products' },
  { key: 'beauty', label: 'Beauty' },
  { key: 'fashion', label: 'Fashion' },
  { key: 'home', label: 'Home & Kitchen' },
  { key: 'lifestyle', label: 'Lifestyle' },
]

export default function VideoPortfolio() {
  const [filter, setFilter] = useState('all')
  const [activeVideo, setActiveVideo] = useState(null)

  const filtered = filter === 'all' ? VIDEO_PLACEHOLDERS : VIDEO_PLACEHOLDERS.filter(v => v.category === filter)

  return (
    <section id="video-portfolio" className="bg-[#FAF6EF] border-b-2 border-brown py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-10">
          <span className="section-label mb-4 block w-fit mx-auto">Video Work</span>
          <h2 className="section-heading mb-4">Watch My Work</h2>
          <p className="text-taupe max-w-2xl mx-auto leading-relaxed">
            Video is one of the most powerful ways to communicate a product's value. My work combines natural
            on-camera delivery, relatable storytelling, product demonstrations, and lifestyle content.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {VIDEO_FILTERS.map(f => (
            <button key={f.key} onClick={() => setFilter(f.key)}
              className={`text-[0.8rem] font-semibold px-4 py-2 border-2 border-brown shadow-brutal transition-all duration-150
                hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg
                ${filter === f.key ? 'bg-rose text-white' : 'bg-white text-brown'}`}>
              {f.label}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((vid, i) => {
            const thumb = vid.platform === 'youtube' && !vid.id.startsWith('VIDEO_ID')
              ? `https://img.youtube.com/vi/${vid.id}/maxresdefault.jpg`
              : null

            return (
              <div key={i} className="card-brutal bg-white overflow-hidden group">
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden cursor-pointer bg-beige"
                  onClick={() => setActiveVideo(vid)}>
                  {thumb ? (
                    <img src={thumb} alt={vid.title} className="w-full h-full object-cover group-hover:scale-[1.04] group-hover:brightness-90 transition-all duration-400" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-rose-pale to-beige">
                      <div className="text-center">
                        <i className="fas fa-video text-3xl text-rose mb-2 block" />
                        <p className="text-xs text-taupe font-medium">Video Coming Soon</p>
                      </div>
                    </div>
                  )}
                  {/* Play button */}
                  <button
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-rose border-2 border-brown shadow-brutal
                               flex items-center justify-center text-white hover:bg-brown hover:scale-110 transition-all duration-150"
                    aria-label={`Play ${vid.title}`}
                    onClick={() => setActiveVideo(vid)}
                  >
                    <i className="fas fa-play text-base" aria-hidden="true" />
                  </button>
                </div>
                {/* Info */}
                <div className="p-5">
                  <span className="inline-block text-[0.62rem] font-bold tracking-widest uppercase text-rose bg-rose-pale border-2 border-brown px-2 py-1 mb-3">
                    {vid.tag}
                  </span>
                  <h3 className="font-serif font-bold text-brown text-[1rem] mb-1">{vid.title}</h3>
                  <p className="text-[0.83rem] text-taupe leading-relaxed">{vid.desc}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-10">
          <a href="#contact"
            onClick={e => { e.preventDefault(); const el = document.querySelector('#contact'); if(el) window.scrollTo({top: el.offsetTop-74, behavior:'smooth'}) }}
            className="btn-primary">Discuss a Video Project</a>
        </div>
      </div>

      {activeVideo && (
        <VideoModal videoId={activeVideo.id} platform={activeVideo.platform} onClose={() => setActiveVideo(null)} />
      )}
    </section>
  )
}
