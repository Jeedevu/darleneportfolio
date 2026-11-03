import { useReveal } from '../hooks/useReveal'
import { IMAGES } from '../data/images'

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="bg-[#FAF6EF] border-b-2 border-brown py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div ref={ref} className="reveal grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Images */}
          <div className="relative flex justify-center">
            {/* Main image */}
            <div className="border-2 border-brown shadow-brutal-lg overflow-hidden bg-beige"
              style={{ width: 'min(400px, 100%)', aspectRatio: '3/4' }}>
              <img src={IMAGES.aboutMain} alt="Darlene Waldrop editorial portrait"
                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500" />
            </div>
            {/* Accent image - offset */}
            <div className="absolute bottom-[-2rem] right-0 md:right-[-2rem] border-2 border-brown shadow-brutal overflow-hidden bg-rose-pale hidden sm:block"
              style={{ width: '42%', aspectRatio: '1' }}>
              <img src={IMAGES.aboutAccent} alt="Darlene Waldrop casual portrait"
                className="w-full h-full object-cover object-top" />
            </div>
            {/* Stats card */}
            <div className="absolute top-6 right-0 md:right-[-2rem] bg-rose text-white border-2 border-brown shadow-brutal p-4 flex gap-4 items-center z-10">
              <div className="text-center">
                <strong className="block font-serif text-2xl font-black leading-none">50s</strong>
                <span className="text-xs opacity-90">& Thriving</span>
              </div>
              <div className="w-px h-10 bg-white/40" />
              <div className="text-center">
                <strong className="block font-serif text-2xl font-black leading-none">10+</strong>
                <span className="text-xs opacity-90">Categories</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="section-label mb-4 block w-fit">Get to Know Me</span>
            <h2 className="section-heading mb-6">A Little About Me</h2>

            <div className="space-y-4 text-taupe leading-relaxed">
              <p>
                I'm <strong className="text-brown font-semibold">Darlene Waldrop</strong>, a lifestyle and UGC creator who believes
                that life becomes even more exciting when you stay curious, try new things, and never stop discovering who you can be.
              </p>
              <p>
                My content reflects the many sides of everyday life — from beauty and fashion to fitness, home and kitchen
                discoveries, shopping, honest product reviews, and dating adventures.
              </p>
              <p>
                What makes my approach different is my perspective. As a woman in my 50s, I bring life experience,
                authenticity, and a point of view that resonates with mature audiences while remaining relatable across generations.
              </p>
              <p>
                For me, content creation is about understanding the story behind a product, communicating its value,
                and helping brands build genuine connections with their audiences.
              </p>
              <blockquote className="border-l-4 border-rose pl-4 italic text-rose text-[1.05rem] my-5">
                I'm here to keep exploring, keep creating, and show that there's no age limit on trying something new.
              </blockquote>
            </div>

            <div className="flex gap-3 flex-wrap mt-8">
              <a href="#contact" onClick={e => { e.preventDefault(); const el = document.querySelector('#contact'); if(el) window.scrollTo({top: el.offsetTop-74, behavior:'smooth'}) }}
                className="btn-primary">Let's Work Together</a>
              <a href="#services" onClick={e => { e.preventDefault(); const el = document.querySelector('#services'); if(el) window.scrollTo({top: el.offsetTop-74, behavior:'smooth'}) }}
                className="btn-ghost">View Services</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
