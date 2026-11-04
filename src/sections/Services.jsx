import { useRevealGroup } from '../hooks/useReveal'

const SERVICES = [
  { num:'01', title:'UGC Video Creation',           items:['Product unboxings & first impressions','Demonstrations and tutorials','Testimonials & storytelling','Lifestyle integrations','Hooks and concept development'] },
  { num:'02', title:'UGC for Paid Advertising',     items:['Conversion-oriented ad concepts','Problem & solution storytelling','Multiple hook options','On-camera and voiceover delivery'], note:'Ad rights negotiated separately.' },
  { num:'03', title:'Influencer Collaborations',    items:['Sponsored short-form videos','Instagram Reels & Stories','TikTok videos','YouTube Shorts','Campaign content packages'] },
  { num:'04', title:'Product Reviews & Demos',      desc:'Introducing a product, explaining its features, demonstrating its use, and sharing a genuine perspective based on real experience.' },
  { num:'05', title:'Commercial Shoots & Brand Films', items:['Commercial advertisements','Promotional videos','Lifestyle campaigns','Website & landing-page videos','Brand storytelling'] },
  { num:'06', title:'Modeling & Brand Photography', items:['Lifestyle modeling','Fashion & apparel photography','Beauty & skincare campaigns','E-commerce imagery','Editorial shoots'] },
  { num:'07', title:'Fashion Shows & Runway',       items:['Runway appearances','Fashion shows','Designer presentations','Brand launches','Promotional fashion events'] },
  { num:'08', title:'Lifestyle & Everyday Content', items:['Daily routines','Shopping discoveries','Home organization & cleaning','Kitchen & household essentials','Fitness & wellness'] },
  { num:'09', title:'Photography Packages',         items:['Social media campaigns','Brand websites','Product features','Creator collaborations','Promotional campaigns'] },
  { num:'10', title:'Event Appearances & Activations', desc:'Participation in brand events, product launches, promotional activities, and creator activations.' },
]

export default function Services() {
  const ref = useRevealGroup()

  return (
    <section id="services" className="bg-cream relative overflow-hidden py-section">
      <span className="watermark watermark-dark top-0 left-[-2%] pointer-events-none z-0" aria-hidden="true">SERVICES</span>

      <div className="relative z-10 max-w-[1340px] mx-auto px-6 lg:px-10">

        <div className="text-center mb-16">
          <span className="overline-label justify-center mb-5 block" style={{color:'#1F1A17',opacity:.5}}>What's Available</span>
          <h2 className="heading-section text-espresso">
            Services &amp; Creative<br/><em className="font-script not-italic text-choco">Opportunities</em>
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-espresso/5">
          {SERVICES.map((s, i) => (
            <div key={i}
              className={`reveal delay-${Math.min((i%6)+1,6)} p-8 bg-cream hover:bg-blush transition-colors duration-500 group`}>
              <div className="flex items-start gap-4 mb-4 pb-4 border-b border-espresso/8">
                <span className="font-display font-black text-blush-mid text-4xl leading-none flex-shrink-0 group-hover:text-gold transition-colors duration-400">
                  {s.num}
                </span>
                <h3 className="font-display font-bold text-espresso text-lg leading-snug pt-2 group-hover:text-choco transition-colors duration-300">
                  {s.title}
                </h3>
              </div>
              {s.desc && <p className="text-espresso/55 font-sans font-light text-sm leading-relaxed">{s.desc}</p>}
              {s.items && (
                <ul className="space-y-1.5">
                  {s.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-espresso/55 font-sans text-sm">
                      <span className="text-gold text-xs mt-0.5 flex-shrink-0">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {s.note && <p className="mt-4 text-xs italic text-gold/80 border-l-2 border-gold pl-3">{s.note}</p>}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button onClick={() => { const el=document.querySelector('#contact'); if(el) window.scrollTo({top:el.offsetTop-72,behavior:'smooth'}) }}
            className="btn-dark">Request a Custom Quote</button>
        </div>
      </div>
    </section>
  )
}
