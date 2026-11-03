import { IMAGES } from '../data/images'

export default function Hero() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) window.scrollTo({ top: el.offsetTop - 74, behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen bg-rose-blush border-b-2 border-brown flex flex-col justify-center pt-[70px] relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute -top-16 -right-16 w-72 h-72 bg-rose-pale border-2 border-brown -z-0" aria-hidden="true" />
      <div className="absolute bottom-10 -left-10 w-44 h-44 bg-beige border-2 border-brown -z-0" aria-hidden="true" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Content */}
        <div className="flex flex-col items-start lg:items-start text-left animate-fade-up">

          <div className="flex items-center flex-wrap gap-2 mb-6 bg-white border-2 border-brown px-4 py-2 shadow-brutal w-fit">
            <span className="text-[0.62rem] font-bold tracking-[0.15em] uppercase text-rose">UGC Creator</span>
            <span className="text-rose text-xs">✦</span>
            <span className="text-[0.62rem] font-bold tracking-[0.15em] uppercase text-rose">On-Camera Talent</span>
            <span className="text-rose text-xs">✦</span>
            <span className="text-[0.62rem] font-bold tracking-[0.15em] uppercase text-rose">Lifestyle & Brand Content</span>
          </div>

          <h1 className="font-serif font-black text-brown leading-[1.04] mb-6"
            style={{ fontSize: 'clamp(2.6rem, 5vw, 4.5rem)' }}>
            Real Life.<br />
            <em className="text-rose not-italic">Real Stories.</em><br />
            Content That<br />Connects.
          </h1>

          <p className="text-taupe leading-relaxed mb-8 max-w-md" style={{ fontSize: '1.05rem' }}>
            Hello, I'm Darlene! I'm in my 50s, embracing this chapter of life with the curiosity,
            confidence, and enthusiasm of someone who knows that the best experiences are still ahead.
          </p>

          <div className="flex gap-3 flex-wrap mb-6">
            <button onClick={() => scrollTo('#photo-portfolio')} className="btn-primary">
              Explore My Work
            </button>
            <button onClick={() => scrollTo('#contact')} className="btn-secondary">
              Work With Me
            </button>
          </div>

          <p className="text-sm italic text-taupe">
            Authentic storytelling. Confident presence. Meaningful brand connections.
          </p>
        </div>

        {/* Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            {/* Main hero image card */}
            <div className="border-2 border-brown shadow-brutal-lg overflow-hidden bg-beige"
              style={{ width: 'min(380px, 90vw)', aspectRatio: '3/4' }}>
              <img
                src={IMAGES.hero}
                alt="Darlene Waldrop — UGC Creator and Lifestyle Influencer"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute top-4 left-4 bg-rose text-white text-[0.7rem] font-bold tracking-widest uppercase px-3 py-1.5 border-2 border-brown shadow-brutal">
                ✦ Creator
              </div>
            </div>

            {/* Floating collab card */}
            <div className="absolute -bottom-5 -right-5 lg:-right-10 bg-white border-2 border-brown shadow-brutal p-4 flex items-center gap-3">
              <span className="text-2xl">📸</span>
              <div>
                <strong className="block text-sm font-bold text-brown">Open for Collabs</strong>
                <p className="text-xs text-taupe m-0">Brands & Campaigns</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="relative z-10 flex flex-col items-center gap-1 pb-8 text-taupe animate-bounce-slow" aria-hidden="true">
        <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
        <i className="fas fa-chevron-down text-sm" />
      </div>
    </section>
  )
}
