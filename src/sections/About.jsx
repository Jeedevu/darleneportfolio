import { useReveal, useRevealGroup } from '../hooks/useReveal'

export default function About() {
  const ref = useRevealGroup()

  return (
    <section id="about" className="bg-blush overflow-hidden relative">

      {/* Watermark */}
      <span className="watermark watermark-dark bottom-0 right-[-2%] opacity-40 pointer-events-none z-0"
        aria-hidden="true">ABOUT</span>

      <div ref={ref} className="relative z-10 max-w-[1340px] mx-auto px-6 lg:px-10
                                grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-0 min-h-screen items-stretch">

        {/* LEFT IMAGE BLOCK */}
        <div className="relative h-[60vh] lg:h-auto">
          {/* Main image — full bleed */}
          <div className="reveal-left h-full img-zoom gallery-cursor">
            <img src="/images/IMG_0868.JPEG"
              alt="Darlene Waldrop editorial portrait"
              className="w-full h-full object-cover object-top" />
          </div>

          {/* Accent image offset */}
          <div className="reveal delay-2 absolute -bottom-8 -right-6 lg:-right-12 w-[42%] aspect-[3/4] overflow-hidden
                          border-4 border-blush shadow-2xl z-20 img-zoom hidden sm:block">
            <img src="/images/denim pic.JPEG" alt="Darlene casual lifestyle"
              className="w-full h-full object-cover object-top" />
          </div>

          {/* Stats chip */}
          <div className="reveal delay-3 absolute top-8 right-4 lg:-right-8 bg-espresso text-cream px-6 py-5 z-30">
            <div className="font-display font-black text-gold text-3xl leading-none">50s</div>
            <div className="text-overline text-cream/50 mt-1 tracking-widest">& Thriving</div>
            <div className="rule-gold my-3" />
            <div className="font-display font-black text-gold text-3xl leading-none">10+</div>
            <div className="text-overline text-cream/50 mt-1 tracking-widest">Niches</div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col justify-center px-0 lg:pl-20 py-section">
          <div className="reveal mb-6">
            <span className="overline-label" style={{color:'#1F1A17', opacity:0.6}}>Get To Know Me</span>
          </div>

          <h2 className="reveal delay-1 heading-section text-espresso mb-8">
            A Little<br/><em className="font-script font-normal not-italic text-choco">About Me</em>
          </h2>

          <div className="reveal delay-2 space-y-5 text-espresso/70 font-sans font-light leading-relaxed max-w-lg">
            <p>
              I'm <strong className="font-semibold text-espresso">Darlene Waldrop</strong>, a lifestyle and UGC creator who believes
              life becomes more exciting when you stay curious and never stop discovering who you can be.
            </p>
            <p>
              From beauty and fashion to fitness, home discoveries, honest product reviews, and dating adventures —
              my content reflects the many authentic sides of everyday life.
            </p>
            <p>
              As a woman in my 50s, I bring life experience and a perspective that resonates with mature audiences
              while remaining relatable across generations. For me, content is about the story behind the product.
            </p>
          </div>

          <blockquote className="reveal delay-3 border-l-2 border-gold pl-6 mt-8 mb-10">
            <p className="font-script text-2xl text-choco italic leading-snug">
              "No age limit on trying something new."
            </p>
          </blockquote>

          <div className="reveal delay-4 flex gap-4 flex-wrap">
            <button onClick={() => { const el = document.querySelector('#contact'); if(el) window.scrollTo({top:el.offsetTop-72,behavior:'smooth'}) }}
              className="btn-dark">Let's Work Together</button>
            <button onClick={() => { const el = document.querySelector('#services'); if(el) window.scrollTo({top:el.offsetTop-72,behavior:'smooth'}) }}
              className="btn-outline-dark">View Services</button>
          </div>
        </div>
      </div>
    </section>
  )
}
