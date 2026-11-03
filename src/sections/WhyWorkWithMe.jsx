import { useRevealGroup } from '../hooks/useReveal'
import { WHY_ITEMS, INDUSTRIES } from '../data/content'
import { IMAGES } from '../data/images'

export default function WhyWorkWithMe() {
  const listRef = useRevealGroup()
  const indRef = useRevealGroup()

  return (
    <>
      {/* Industries */}
      <section id="industries" className="bg-rose-blush border-b-2 border-brown py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label mb-4 block w-fit mx-auto">My Focus Areas</span>
            <h2 className="section-heading mb-4">Industries I Love Working With</h2>
            <p className="text-taupe max-w-2xl mx-auto leading-relaxed">
              I enjoy collaborating with brands across a variety of industries, bringing each product or campaign to life
              in a way that feels relevant to its intended audience.
            </p>
          </div>
          <div ref={indRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
            {INDUSTRIES.map((ind, i) => (
              <div key={i} className="reveal card-brutal bg-white text-center p-8 hover:bg-rose-pale transition-colors duration-200">
                <span className="block text-4xl mb-4" aria-hidden="true">{ind.icon}</span>
                <h3 className="font-serif font-bold text-brown text-[1rem] mb-2">{ind.title}</h3>
                <p className="text-[0.84rem] text-taupe leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section id="why-work" className="bg-beige/30 border-b-2 border-brown py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-14 items-start">

            {/* Content */}
            <div>
              <span className="section-label mb-4 block w-fit">Why Me</span>
              <h2 className="section-heading mb-8">Why Brands Choose to Work With Me</h2>
              <div ref={listRef} className="flex flex-col gap-5 stagger-children">
                {WHY_ITEMS.map((item, i) => (
                  <div key={i} className="reveal flex gap-4 items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-rose border-2 border-brown flex items-center justify-center text-white text-xs font-bold mt-0.5">
                      ✦
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-brown text-[1rem] mb-1">{item.title}</h3>
                      <p className="text-[0.87rem] text-taupe leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sticky Image */}
            <div className="lg:sticky lg:top-[90px]">
              <div className="border-2 border-brown shadow-brutal-lg overflow-hidden bg-rose-pale">
                <img src={IMAGES.whyImage} alt="Darlene Waldrop in elegant gown"
                  className="w-full object-cover" style={{ aspectRatio: '3/4', objectPosition: 'top' }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
