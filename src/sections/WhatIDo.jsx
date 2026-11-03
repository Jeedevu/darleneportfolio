import { useRevealGroup } from '../hooks/useReveal'
import { SERVICES_OVERVIEW } from '../data/content'

export default function WhatIDo() {
  const ref = useRevealGroup()

  return (
    <section id="what-i-do" className="bg-rose-blush border-b-2 border-brown py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12">
          <span className="section-label mb-4 block w-fit mx-auto">My Expertise</span>
          <h2 className="section-heading mb-4">What I Do</h2>
          <p className="text-taupe max-w-2xl mx-auto leading-relaxed">
            I partner with brands, businesses, agencies, and creative teams to bring products and stories to life
            through engaging content and on-camera talent.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 stagger-children">
          {SERVICES_OVERVIEW.map((s, i) => (
            <div key={i} className={`reveal card-brutal p-6 ${s.featured ? 'bg-rose text-white' : 'bg-white'}`}>
              <span className="block text-3xl mb-3" aria-hidden="true">{s.icon}</span>
              <h3 className={`font-serif text-[0.95rem] font-bold mb-2 leading-snug ${s.featured ? 'text-white' : 'text-brown'}`}>
                {s.title}
              </h3>
              <p className={`text-[0.83rem] leading-relaxed ${s.featured ? 'text-white/85' : 'text-taupe'}`}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-taupe mb-4">Have a project in mind? Let's create something together.</p>
          <a href="#contact"
            onClick={e => { e.preventDefault(); const el = document.querySelector('#contact'); if(el) window.scrollTo({top: el.offsetTop-74, behavior:'smooth'}) }}
            className="btn-primary">Discuss a Project</a>
        </div>
      </div>
    </section>
  )
}
