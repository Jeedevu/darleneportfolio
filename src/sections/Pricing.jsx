import { useState } from 'react'
import { PRICING_TABS } from '../data/content'

export default function Pricing() {
  const [activeTab, setActiveTab] = useState('ugc')
  const current = PRICING_TABS.find(t => t.id === activeTab)

  const scrollContact = (e) => {
    e.preventDefault()
    const el = document.querySelector('#contact')
    if (el) window.scrollTo({ top: el.offsetTop - 74, behavior: 'smooth' })
  }

  return (
    <section id="pricing" className="bg-[#FAF6EF] border-b-2 border-brown py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12">
          <span className="section-label mb-4 block w-fit mx-auto">Rates & Packages</span>
          <h2 className="section-heading mb-4">Packages & Rates</h2>
          <p className="text-taupe max-w-2xl mx-auto leading-relaxed">
            Every collaboration is different. The following rates provide a starting point for common content requests.
            Custom packages available. <strong className="text-brown">All prices in USD.</strong>
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {PRICING_TABS.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              className={`text-[0.8rem] font-semibold px-4 py-2 border-2 border-brown transition-all duration-150 shadow-brutal
                hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg
                ${activeTab === tab.id ? 'bg-rose text-white' : 'bg-white text-brown'}`}>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Panels */}
        <div key={activeTab} className="animate-fade-in">
          {current?.cards && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {current.cards.map((card, i) => (
                <div key={i} className={`card-brutal p-6 flex flex-col gap-4 relative
                  ${card.featured ? 'border-rose shadow-brutal-rose bg-rose-blush' : 'bg-white'}`}>
                  {card.badge && (
                    <span className="absolute -top-px right-5 bg-rose text-white text-[0.6rem] font-bold tracking-widest uppercase px-2.5 py-1 border-2 border-brown border-t-0">
                      {card.badge}
                    </span>
                  )}
                  <div className="font-serif text-[2.2rem] font-black text-rose leading-none">{card.price}</div>
                  <h3 className="font-serif font-bold text-brown text-[1rem]">{card.title}</h3>
                  <ul className="flex-1 space-y-1.5">
                    {card.items.map((item, j) => (
                      <li key={j} className="text-[0.83rem] text-taupe flex items-start gap-2 border-b border-rose-pale pb-1.5">
                        <span className="text-rose font-bold mt-0.5 flex-shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" onClick={scrollContact}
                    className={`btn-sm text-center justify-center ${card.featured ? 'btn-primary' : 'btn-ghost'}`}
                    style={{ display: 'flex', fontSize: '0.8rem', padding: '0.55rem 1rem' }}>
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          )}

          {current?.addons && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {current.addons.map((addon, i) => (
                <div key={i} className="card-brutal bg-white p-5">
                  <h3 className="font-serif font-bold text-brown text-[0.95rem] mb-3 pb-2 border-b-2 border-rose-pale">{addon.title}</h3>
                  <ul className="space-y-1">
                    {addon.items.map((item, j) => (
                      <li key={j} className="text-[0.83rem] text-taupe">{item}</li>
                    ))}
                  </ul>
                  {addon.note && <p className="text-[0.75rem] italic text-rose mt-2">{addon.note}</p>}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Disclaimer */}
        <div className="mt-10 p-5 bg-beige/40 border-2 border-brown shadow-brutal">
          <p className="text-[0.83rem] text-taupe text-center leading-relaxed">
            A 50% deposit is required to confirm a project. Standard delivery is approximately 5–7 business days.
            All rates are starting prices in USD and may vary based on project brief, production requirements, and licensing.
            A written quote will confirm final deliverables and terms.
          </p>
        </div>

        <div className="text-center mt-8">
          <a href="#contact" onClick={scrollContact} className="btn-primary">Request a Custom Quote</a>
        </div>
      </div>
    </section>
  )
}
