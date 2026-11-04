import { useRevealGroup } from '../hooks/useReveal'

const WHY = [
  { title:'Authentic Presentation',       desc:'A natural presence that makes product features and brand messages feel genuinely relatable.' },
  { title:'Distinctive Perspective',      desc:'As a woman in her 50s, content that reaches mature audiences while staying accessible across generations.' },
  { title:'Versatile Content',            desc:'Beauty, fashion, home, fitness, storytelling — creative range that fits diverse campaign briefs.' },
  { title:'Audience-Focused Storytelling',desc:'Content that communicates value clearly, holds attention, and drives engagement.' },
  { title:'Professional Collaboration',   desc:'Clear communication, agreed timelines, and a collaborative approach to every brief.' },
  { title:'Willingness to Grow',          desc:'Always refining, experimenting, and creating stronger work with every new partnership.' },
]

const INDUSTRIES = [
  { icon:'💄', title:'Beauty & Skincare' },
  { icon:'👗', title:'Fashion & Accessories' },
  { icon:'🏠', title:'Home & Kitchen' },
  { icon:'🏃‍♀️', title:'Fitness & Wellness' },
  { icon:'🛍️', title:'Lifestyle & Everyday' },
  { icon:'📦', title:'E-commerce & DTC' },
]

export default function WhyWorkWithMe() {
  const whyRef = useRevealGroup()
  const indRef = useRevealGroup()

  return (
    <>
      {/* WHY WORK WITH ME */}
      <section id="why-work" className="bg-choco relative overflow-hidden py-section">
        <span className="watermark top-0 left-[-2%] pointer-events-none z-0" aria-hidden="true">WHY</span>

        <div className="relative z-10 max-w-[1340px] mx-auto px-6 lg:px-10
                        grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 items-center">

          {/* Image */}
          <div className="relative">
            <div className="img-zoom gallery-cursor aspect-[3/4] overflow-hidden">
              <img src="/images/IMG_5815.JPEG" alt="Darlene Waldrop elegant portrait"
                className="w-full h-full object-cover object-top" />
            </div>
            {/* Quote overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-espresso/85 backdrop-blur-sm p-6">
              <p className="font-script text-2xl text-gold italic leading-snug">
                "I bring enthusiasm, professionalism, and a willingness to grow with every project."
              </p>
            </div>
          </div>

          {/* Content */}
          <div ref={whyRef}>
            <span className="overline-label text-gold/60 mb-6 block reveal">Why Me</span>
            <h2 className="heading-display mb-10 reveal delay-1">
              Why Brands<br/>Choose to <em className="font-script not-italic text-gold">Work</em><br/>With Me
            </h2>
            <div className="space-y-6">
              {WHY.map((item, i) => (
                <div key={i}
                  className={`reveal delay-${Math.min(i+1,6)} flex gap-5 items-start pb-6 border-b border-cream/6 last:border-0`}>
                  <div className="flex-shrink-0 w-8 h-8 border border-gold/40 flex items-center justify-center text-gold text-xs">
                    {String(i+1).padStart(2,'0')}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-cream text-base mb-1">{item.title}</h3>
                    <p className="text-cream/45 font-sans font-light text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="bg-espresso py-section-sm">
        <div className="max-w-[1340px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <span className="overline-label justify-center text-gold/60 mb-5 block">Focus Areas</span>
            <h2 className="heading-display text-3xl">
              Industries I Love <em className="font-script not-italic text-gold">Working With</em>
            </h2>
          </div>
          <div ref={indRef}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-cream/5">
            {INDUSTRIES.map((ind, i) => (
              <div key={i}
                className={`reveal delay-${Math.min(i+1,6)} p-8 bg-espresso-light text-center
                            hover:bg-choco transition-colors duration-400 group`}>
                <span className="block text-4xl mb-3">{ind.icon}</span>
                <p className="font-sans text-xs text-cream/50 tracking-wider uppercase group-hover:text-gold transition-colors duration-300">
                  {ind.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
