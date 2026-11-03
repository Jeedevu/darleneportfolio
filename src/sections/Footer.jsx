export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) window.scrollTo({ top: el.offsetTop - 74, behavior: 'smooth' })
  }

  return (
    <footer className="bg-brown border-t-2 border-black text-white pt-16 pb-8" role="contentinfo">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="font-serif text-2xl font-bold text-white mb-2">Darlene Waldrop</h2>
            <p className="text-[0.78rem] font-medium tracking-wider text-rose-light mb-4">
              UGC Creator | Lifestyle & Brand Content | On-Camera Talent
            </p>
            <p className="text-[0.87rem] text-white/65 leading-relaxed mb-6 max-w-sm">
              Creating authentic stories, showcasing products, and connecting brands with audiences
              through content that feels real.
            </p>
            <div className="flex gap-3">
              {[
                { href: 'https://www.tiktok.com/@darlenewaldrop', icon: 'fab fa-tiktok', label: 'TikTok' },
                { href: 'https://www.instagram.com/darlenewaldrop', icon: 'fab fa-instagram', label: 'Instagram' },
                { href: 'https://www.youtube.com/@darlenewaldrop', icon: 'fab fa-youtube', label: 'YouTube' },
                { href: 'mailto:hello@darlenewaldrop.com', icon: 'fas fa-envelope', label: 'Email' },
              ].map(s => (
                <a key={s.label} href={s.href} target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer" aria-label={s.label}
                  className="w-10 h-10 border-2 border-white/25 flex items-center justify-center text-white/70 text-[0.95rem]
                             hover:bg-rose hover:border-rose hover:text-white transition-all duration-150">
                  <i className={s.icon} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-white text-[0.95rem] mb-4 pb-2 border-b-2 border-rose w-fit">Quick Links</h3>
            <ul className="space-y-2">
              {[['Home','#home'],['About','#about'],['Services','#services'],['Pricing','#pricing'],['Photo Portfolio','#photo-portfolio'],['Video Portfolio','#video-portfolio'],['Contact','#contact']].map(([label, href]) => (
                <li key={href}>
                  <a href={href} onClick={e => { e.preventDefault(); scrollTo(href) }}
                    className="text-[0.85rem] text-white/65 hover:text-rose-light transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-bold text-white text-[0.95rem] mb-4 pb-2 border-b-2 border-rose w-fit">Contact</h3>
            <a href="mailto:hello@darlenewaldrop.com"
              className="block text-[0.85rem] text-white/65 hover:text-rose-light transition-colors mb-4">
              hello@darlenewaldrop.com
            </a>
            <a href="#contact" onClick={e => { e.preventDefault(); scrollTo('#contact') }}
              className="btn-primary text-xs px-4 py-2.5 inline-flex">
              Work With Me
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[0.82rem] text-white/45">© 2026 Darlene Waldrop. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#privacy" className="text-[0.82rem] text-white/45 hover:text-rose-light transition-colors">Privacy Policy</a>
            <a href="#terms" className="text-[0.82rem] text-white/45 hover:text-rose-light transition-colors">Terms & Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
