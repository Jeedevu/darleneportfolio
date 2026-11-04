import { useState } from 'react'
import { useRevealGroup } from '../hooks/useReveal'

const TABS = [
  {
    id:'ugc', label:'UGC Videos',
    cards:[
      { price:'$175',   title:'Single UGC Video',      items:['30–60 sec video','Concept & hook','On-camera or voiceover','B-roll','1 revision','30-day organic rights'] },
      { price:'$225',   title:'Advertising Video',      items:['Ad-focused concept','Conversion storytelling','Product demo','1 revision','30-day paid ad rights'] },
      { price:'$450',   title:'3-Video Package',        badge:'Popular', items:['3 UGC videos','Concepts & hooks','Product storytelling','1 revision per video','Organic rights'] },
      { price:'$800',   title:'5-Video Package',        items:['5 UGC videos','Concepts & hooks','Demos or lifestyle','1 revision each'] },
      { price:'$1,350', title:'10-Video Package',       items:['10 UGC videos','Concepts & hooks','On-camera or VO','Demos & lifestyle','1 revision each'] },
    ]
  },
  {
    id:'social', label:'Social Media',
    cards:[
      { price:'$250',   title:'Instagram Reel',         items:['1 sponsored Reel'] },
      { price:'$250',   title:'TikTok Video',           items:['1 sponsored TikTok'] },
      { price:'$425',   title:'Instagram + TikTok',     badge:'Best Value', items:['1 video for both platforms'] },
      { price:'$650',   title:'All 3 Platforms',        items:['Instagram + TikTok + YouTube Shorts'] },
    ]
  },
  {
    id:'photo', label:'Photography',
    cards:[
      { price:'$125',   title:'5 Photos',               items:['Lifestyle or product imagery'] },
      { price:'$225',   title:'10 Photos',              items:['Mixed styles as agreed'] },
      { price:'$400',   title:'20 Photos',              items:['Campaign or editorial images'] },
      { price:'$125',   title:'3 Stories',              items:['Instagram story package'] },
      { price:'$175',   title:'5 Stories',              items:['Campaign story package'] },
    ]
  },
  {
    id:'commercial', label:'Commercial',
    cards:[
      { price:'$400',      title:'Half-Day Shoot',      items:['Up to 4 hrs on-camera talent'] },
      { price:'$700',      title:'Full-Day Shoot',      items:['Up to 8 hrs on-camera talent'] },
      { price:'From $350', title:'Event Appearance',    items:['Up to 3 hrs · +$100/hr additional'] },
    ]
  },
  {
    id:'amazon', label:'Amazon',
    cards:[
      { price:'$150',   title:'Single Amazon Video',    items:['1 product-focused Amazon video'] },
      { price:'$600',   title:'5-Video Amazon Pack',    badge:'Best Value', items:['5 product-focused Amazon videos'] },
    ]
  },
]

const go = (href) => { const el=document.querySelector(href); if(el) window.scrollTo({top:el.offsetTop-72,behavior:'smooth'}) }

export default function Pricing() {
  const [active, setActive] = useState('ugc')
  const current = TABS.find(t => t.id === active)
  const ref = useRevealGroup()

  return (
    <section id="pricing" className="bg-espresso relative overflow-hidden py-section">
      <span className="watermark top-0 left-[-2%] pointer-events-none z-0" aria-hidden="true">RATES</span>

      <div className="relative z-10 max-w-[1340px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="overline-label justify-center text-gold/70 mb-5 block">Packages & Rates</span>
          <h2 className="heading-display mb-4">
            Invest in<br/><em className="font-script not-italic text-gold">Quality Content</em>
          </h2>
          <p className="text-cream/45 font-sans font-light max-w-xl mx-auto">
            Starting prices in USD. Custom packages available. A 50% deposit confirms every project.
          </p>
        </div>

        {/* Tab row */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {TABS.map(t => (
            <button key={t.id} onClick={() => setActive(t.id)}
              className={`text-overline font-sans uppercase tracking-[0.16em] px-6 py-3 transition-all duration-300
                ${active === t.id ? 'bg-gold text-espresso' : 'border border-cream/15 text-cream/50 hover:text-cream hover:border-cream/40'}`}>
              {t.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div key={active} ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 animate-fade-in">
          {current?.cards.map((card, i) => (
            <div key={i}
              className={`reveal delay-${Math.min(i+1,6)} price-card-hover relative p-8 flex flex-col gap-5 border border-cream/8
                ${i === 2 ? 'bg-choco border-gold/30' : 'bg-espresso-light'}`}>
              {card.badge && (
                <span className="absolute top-4 right-4 bg-gold text-espresso text-[0.58rem] font-bold uppercase tracking-widest px-2.5 py-1">
                  {card.badge}
                </span>
              )}
              <div className="font-display font-black text-gold text-4xl leading-none">{card.price}</div>
              <h3 className="font-display font-bold text-cream text-lg leading-snug">{card.title}</h3>
              <ul className="flex-1 space-y-2 border-t border-cream/8 pt-4">
                {card.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-cream/50 font-sans text-sm">
                    <span className="text-gold text-xs mt-0.5 flex-shrink-0">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
              <button onClick={() => go('#contact')}
                className="text-overline text-gold font-sans uppercase tracking-widest text-left
                           hover:text-cream transition-colors duration-300 flex items-center gap-2 mt-2">
                Get Started <span className="text-xs">→</span>
              </button>
            </div>
          ))}
        </div>

        {/* Add-ons strip */}
        <div className="mt-14 p-8 border border-cream/8 bg-choco">
          <h3 className="font-display font-bold text-cream text-xl mb-6">Optional Add-Ons</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6">
            {[
              { label:'Paid Ad Usage',    val:'30d +30% · 90d +50%' },
              { label:'Whitelisting',     val:'From $250/mo' },
              { label:'Raw Footage',      val:'+$100–$300' },
              { label:'Extra Hooks',      val:'+$50–$75' },
              { label:'Rush 48hr',        val:'+$75' },
              { label:'Rush 24hr',        val:'+$125' },
              { label:'Exclusivity',      val:'+$150–$300' },
            ].map(a => (
              <div key={a.label}>
                <div className="text-overline text-gold/60 mb-1">{a.label}</div>
                <div className="font-sans text-cream/70 text-sm">{a.val}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <button onClick={() => go('#contact')} className="btn-primary">Request a Custom Quote</button>
        </div>
      </div>
    </section>
  )
}
