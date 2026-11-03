import { useRevealGroup } from '../hooks/useReveal'

const SERVICES = [
  { num: '01', title: 'UGC Video Creation', desc: 'Professional user-generated content for brands that need engaging, creator-led videos.', items: ['Product unboxings and first impressions','Product demonstrations and tutorials','Testimonials and experience-based storytelling','Lifestyle integrations','Beauty, fashion, home, and fitness content','Hooks and concept development','Voiceovers and on-camera presentations'] },
  { num: '02', title: 'UGC for Paid Advertisements', desc: 'Creator-led videos designed for paid advertising campaigns with messaging tailored to the objective.', items: ['Product-focused ad concepts','Problem-and-solution storytelling','Product demonstrations','Multiple hook options where agreed','On-camera and voiceover delivery'], note: 'Paid advertising usage rights must be agreed upon separately.' },
  { num: '03', title: 'Influencer Collaborations', desc: 'Brand partnerships involving publishing content on agreed social media channels.', items: ['Sponsored short-form videos','Instagram Reels and Stories','TikTok videos','YouTube Shorts','Product features and recommendations','Campaign-specific content packages'] },
  { num: '04', title: 'Product Reviews & Demonstrations', desc: 'Content that introduces a product, explains its features, demonstrates its use, and shares a genuine perspective based on actual experience.' },
  { num: '05', title: 'Commercial Shoots & Brand Films', desc: 'On-camera participation in commercial productions and brand storytelling.', items: ['Commercial advertisements','Brand promotional videos','Product campaigns','Lifestyle advertisements','Website and landing-page videos','Company and brand storytelling'] },
  { num: '06', title: 'Modeling & Brand Photography', desc: 'Available for suitable projects involving on-camera and photography work.', items: ['Lifestyle modeling','Fashion and apparel photography','Beauty and skincare campaigns','Product photography featuring a model','E-commerce imagery','Promotional and editorial shoots'] },
  { num: '07', title: 'Fashion Shows & Runway', desc: 'Open to suitable opportunities aligned with style and professional profile.', items: ['Runway appearances','Fashion shows','Designer presentations','Fashion brand launches','Promotional fashion events'] },
  { num: '08', title: 'Lifestyle & Everyday Content', desc: 'Relatable content built around real-life experiences.', items: ['Daily routines','Shopping and product discoveries','Home organization and cleaning','Kitchen products and household essentials','Fitness and wellness routines','Beauty and personal style'] },
  { num: '09', title: 'Photography Packages', desc: 'Lifestyle and product-focused photography for diverse campaign needs.', items: ['Social media campaigns','Brand websites','Product features','Creator collaborations','Promotional campaigns'] },
  { num: '10', title: 'Event Appearances & Brand Activations', desc: 'Participation in suitable events, promotional activities, brand launches, and creator activations.' },
]

export default function Services() {
  const ref = useRevealGroup()

  return (
    <section id="services" className="bg-beige/20 border-b-2 border-brown py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12">
          <span className="section-label mb-4 block w-fit mx-auto">What's Available</span>
          <h2 className="section-heading mb-4">Services & Creative Opportunities</h2>
          <p className="text-taupe max-w-2xl mx-auto leading-relaxed">
            Every brand has a different story to tell. My services accommodate a range of creative briefs —
            from individual product videos to larger campaigns.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
          {SERVICES.map((s) => (
            <div key={s.num} className="reveal card-brutal bg-white p-6">
              <div className="flex items-start gap-4 mb-3 pb-3 border-b-2 border-beige">
                <span className="font-serif text-[2rem] font-black text-rose-light leading-none flex-shrink-0">{s.num}</span>
                <h3 className="font-serif font-bold text-brown text-[0.98rem] leading-snug pt-1">{s.title}</h3>
              </div>
              <p className="text-[0.85rem] text-taupe leading-relaxed mb-3">{s.desc}</p>
              {s.items && (
                <ul className="space-y-1">
                  {s.items.map((item, i) => (
                    <li key={i} className="text-[0.82rem] text-taupe flex items-start gap-2 border-b border-beige/60 pb-1">
                      <span className="text-rose text-[0.65rem] mt-0.5 flex-shrink-0">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {s.note && <p className="mt-3 text-[0.76rem] italic text-rose bg-rose-pale border-l-4 border-rose pl-3 py-1">{s.note}</p>}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#contact"
            onClick={e => { e.preventDefault(); const el = document.querySelector('#contact'); if(el) window.scrollTo({top: el.offsetTop-74, behavior:'smooth'}) }}
            className="btn-primary">Request a Custom Quote</a>
        </div>
      </div>
    </section>
  )
}
