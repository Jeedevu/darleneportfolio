import { useEffect, useRef } from 'react'

export default function Hero() {
  const go = (href) => {
    const el = document.querySelector(href)
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' })
  }

  const imgRef = useRef(null)
  useEffect(() => {
    const onScroll = () => {
      if (imgRef.current) {
        imgRef.current.style.transform = `translateY(${window.scrollY * 0.25}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="home" className="relative min-h-screen bg-espresso overflow-hidden">

      {/* Watermark */}
      <span className="watermark top-1/2 -translate-y-1/2 left-[-2%] select-none pointer-events-none z-0"
        aria-hidden="true">DARLENE</span>

      {/* Split layout */}
      <div className="relative z-10 min-h-screen grid grid-cols-1 lg:grid-cols-[1fr_1fr]">

        {/* LEFT — Text panel */}
        <div className="flex flex-col justify-end pb-16 lg:pb-24 px-8 lg:pl-16 lg:pr-10 pt-28 lg:pt-0 order-2 lg:order-1">

          <div className="mb-8 animate-fade-in" style={{animationDelay:'0.1s', animationFillMode:'both'}}>
            <span className="overline-label text-gold/80">UGC Creator · On-Camera Talent · Lifestyle</span>
          </div>

          <h1 className="font-display font-black text-cream leading-[0.9] tracking-tight mb-6
                         animate-fade-up" style={{animationDelay:'0.25s', animationFillMode:'both',
                         fontSize:'clamp(3.2rem,7vw,7.5rem)'}}>
            Real Life.<br/>
            <em className="font-script font-normal text-gold not-italic"
              style={{fontSize:'clamp(3rem,6vw,6.5rem)'}}>Real Stories.</em><br/>
            <span style={{fontSize:'clamp(2.4rem,5vw,5.5rem)'}}>Content That</span><br/>
            <span style={{fontSize:'clamp(2.4rem,5vw,5.5rem)'}}>Connects.</span>
          </h1>

          <p className="text-cream/60 font-sans font-light text-base lg:text-lg leading-relaxed max-w-sm mb-10
                        animate-fade-up" style={{animationDelay:'0.4s', animationFillMode:'both'}}>
            Hello, I'm Darlene. In my 50s and embracing every chapter with curiosity,
            confidence, and authentic storytelling that actually converts.
          </p>

          <div className="flex gap-4 flex-wrap animate-fade-up" style={{animationDelay:'0.55s', animationFillMode:'both'}}>
            <button onClick={() => go('#photo-portfolio')} className="btn-primary">
              Explore My Work
            </button>
            <button onClick={() => go('#contact')} className="btn-outline">
              Work With Me
            </button>
          </div>

          {/* Stats strip */}
          <div className="flex gap-8 mt-14 pt-10 border-t border-cream/10
                          animate-fade-up" style={{animationDelay:'0.7s', animationFillMode:'both'}}>
            {[
              { num:'10+',   label:'Content Categories' },
              { num:'50s',   label:'& Thriving' },
              { num:'Open',  label:'For Collabs' },
            ].map(s => (
              <div key={s.label}>
                <div className="font-display font-black text-gold text-2xl lg:text-3xl leading-none">{s.num}</div>
                <div className="text-overline text-cream/40 uppercase tracking-widest mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Hero image */}
        <div className="relative order-1 lg:order-2 min-h-[60vh] lg:min-h-screen overflow-hidden">
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/20 to-transparent z-10 lg:block hidden" />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent z-10" />

          <div ref={imgRef} className="absolute inset-0 will-change-transform">
            <img src="/images/IMG_5817.JPEG"
              alt="Darlene Waldrop — editorial fashion portrait"
              className="w-full h-full object-cover object-top"
              style={{ objectPosition: 'center top' }}
            />
          </div>

          {/* Floating tag */}
          <div className="absolute bottom-10 right-8 z-20 bg-choco/80 backdrop-blur-sm px-5 py-4
                          animate-fade-in" style={{animationDelay:'0.9s',animationFillMode:'both'}}>
            <div className="overline-label text-gold/70 mb-1">Available For</div>
            <div className="font-display text-cream text-sm font-bold">Brand Collaborations</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2
                      animate-fade-in" style={{animationDelay:'1.1s',animationFillMode:'both'}}>
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-gold/60" />
        <span className="text-overline text-cream/30 tracking-widest">SCROLL</span>
      </div>
    </section>
  )
}
