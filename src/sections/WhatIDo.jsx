import { useRevealGroup } from '../hooks/useReveal'

const SERVICES = [
  { icon:'🎬', title:'UGC & Product Content',      desc:'Authentic product demos, unboxings, testimonials, tutorials, and lifestyle videos.' },
  { icon:'📱', title:'Influencer Collaborations',   desc:'Brand campaigns designed to increase awareness and introduce products to new audiences.', dark:true },
  { icon:'🎥', title:'Commercials & Brand Films',   desc:'On-camera participation in commercial productions, promotional videos, and brand storytelling.' },
  { icon:'👗', title:'Fashion & Lifestyle',          desc:'Showcasing clothing, accessories, beauty products, and lifestyle brands through polished content.' },
  { icon:'💄', title:'Modeling & Photography',       desc:'Lifestyle modeling, brand photography, editorial shoots, and e-commerce imagery.', dark:true },
  { icon:'⭐', title:'Product Reviews & Demos',      desc:'Honest storytelling, clear demonstrations, practical use cases, and engaging review formats.' },
  { icon:'📷', title:'Short-Form Video',             desc:'Vertical content for Instagram Reels, TikTok, YouTube Shorts, and social placements.' },
  { icon:'🌸', title:'Event Appearances',            desc:'Brand events, product launches, promotional appearances, and creator activations.' },
]

export default function WhatIDo() {
  const ref = useRevealGroup()

  return (
    <section id="what-i-do" className="bg-espresso relative overflow-hidden py-section">
      <span className="watermark top-0 left-[-2%] pointer-events-none z-0" aria-hidden="true">WORK</span>

      <div className="relative z-10 max-w-[1340px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div>
            <span className="overline-label text-gold/70 mb-5 block">My Expertise</span>
            <h2 className="heading-display">What<br/>I <em className="font-script not-italic text-gold">Do</em></h2>
          </div>
          <div className="flex items-end">
            <p className="text-cream/50 font-sans font-light text-lg leading-relaxed max-w-md">
              I partner with brands, agencies, and creative teams to bring products and stories to life
              through engaging content and on-camera talent.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-cream/5">
          {SERVICES.map((s, i) => (
            <div key={i}
              className={`reveal delay-${Math.min(i+1,6)} p-8 flex flex-col gap-4 group
                transition-colors duration-500 hover:bg-choco
                ${s.dark ? 'bg-choco' : 'bg-espresso-light'}`}>
              <span className="text-3xl block">{s.icon}</span>
              <h3 className="font-display font-bold text-cream text-lg leading-snug group-hover:text-gold transition-colors duration-300">
                {s.title}
              </h3>
              <p className="text-cream/45 font-sans font-light text-sm leading-relaxed flex-1">{s.desc}</p>
              <div className="rule-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <button onClick={() => { const el=document.querySelector('#contact'); if(el) window.scrollTo({top:el.offsetTop-72,behavior:'smooth'}) }}
            className="btn-primary">Discuss a Project</button>
        </div>
      </div>
    </section>
  )
}
