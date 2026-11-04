const go = (e, href) => {
  e.preventDefault()
  const el = document.querySelector(href)
  if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className="bg-espresso border-t border-cream/5 pt-16 pb-8">
      <div className="max-w-[1340px] mx-auto px-6 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-14 pb-14 border-b border-cream/5">

          {/* Brand */}
          <div>
            <div className="font-display font-bold text-cream text-2xl mb-1 tracking-tight">
              Darlene<span className="font-script font-normal text-gold italic ml-1 text-3xl">Waldrop</span>
            </div>
            <p className="text-overline text-gold/50 mb-6 mt-1">
              UGC Creator · Lifestyle & Brand Content · On-Camera Talent
            </p>
            <p className="text-cream/40 font-sans font-light text-sm leading-relaxed max-w-xs mb-8">
              Creating authentic stories, showcasing products, and connecting brands with audiences
              through content that feels real.
            </p>
            <div className="flex gap-3">
              {[
                { href:'https://www.tiktok.com/@darlenewaldrop',   icon:'fab fa-tiktok',    label:'TikTok' },
                { href:'https://www.instagram.com/darlenewaldrop', icon:'fab fa-instagram', label:'Instagram' },
                { href:'https://www.youtube.com/@darlenewaldrop',  icon:'fab fa-youtube',   label:'YouTube' },
                { href:'mailto:hello@darlenewaldrop.com',          icon:'fas fa-envelope',  label:'Email' },
              ].map(s => (
                <a key={s.label} href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer" aria-label={s.label}
                  className="w-10 h-10 border border-cream/10 flex items-center justify-center
                             text-cream/30 hover:border-gold hover:text-gold transition-all duration-300">
                  <i className={`${s.icon} text-sm`} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-overline text-gold/50 uppercase tracking-widest mb-6">Navigation</h3>
            <ul className="space-y-3">
              {[['Home','#home'],['About','#about'],['Services','#services'],
                ['Pricing','#pricing'],['Photos','#photo-portfolio'],
                ['Videos','#video-portfolio'],['Contact','#contact']].map(([label, href]) => (
                <li key={href}>
                  <a href={href} onClick={e => go(e, href)}
                    className="text-cream/35 font-sans text-sm hover:text-gold transition-colors duration-300">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-overline text-gold/50 uppercase tracking-widest mb-6">Services</h3>
            <ul className="space-y-3">
              {['UGC Video Creation','Influencer Collabs','Commercial Shoots','Modeling & Photography',
                'Fashion Shows','Event Appearances'].map(s => (
                <li key={s} className="text-cream/35 font-sans text-sm">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-overline text-gold/50 uppercase tracking-widest mb-6">Contact</h3>
            <a href="mailto:hello@darlenewaldrop.com"
              className="block text-cream/35 font-sans text-sm hover:text-gold transition-colors duration-300 mb-6">
              hello@darlenewaldrop.com
            </a>
            <a href="#contact" onClick={e => go(e, '#contact')} className="btn-primary text-[0.6rem] py-3 px-5">
              Work With Me
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream/20 font-sans text-xs tracking-wide">
            © 2026 Darlene Waldrop. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy','Terms & Disclaimer'].map(l => (
              <a key={l} href="#" className="text-cream/20 font-sans text-xs hover:text-cream/50 transition-colors duration-300">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
