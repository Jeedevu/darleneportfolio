import { useState, useEffect } from 'react'

const LINKS = [
  ['Home',    '#home'],
  ['About',   '#about'],
  ['Work',    '#what-i-do'],
  ['Services','#services'],
  ['Pricing', '#pricing'],
  ['Photos',  '#photo-portfolio'],
  ['Videos',  '#video-portfolio'],
  ['Contact', '#contact'],
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [active,   setActive]     = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      const pos = window.scrollY + 90
      document.querySelectorAll('section[id]').forEach(s => {
        if (pos >= s.offsetTop && pos < s.offsetTop + s.offsetHeight) setActive(s.id)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' })
    setMenuOpen(false)
    document.body.style.overflow = ''
  }

  const toggleMenu = () => {
    const next = !menuOpen
    setMenuOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700
      ${scrolled ? 'bg-espresso/95 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="max-w-[1340px] mx-auto px-6 lg:px-10 flex items-center justify-between h-[72px]">

        {/* Logo */}
        <a href="#home" onClick={e => go(e, '#home')}
          className="font-display font-bold text-cream text-xl tracking-tight hover:text-gold transition-colors duration-300">
          Darlene<span className="font-script font-normal text-gold italic ml-1 text-2xl">Waldrop</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {LINKS.map(([label, href]) => (
            <li key={href}>
              <a href={href} onClick={e => go(e, href)}
                className={`text-overline font-sans uppercase tracking-[0.18em] transition-colors duration-300
                  ${active === href.slice(1) ? 'text-gold' : 'text-cream/60 hover:text-cream'}`}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + social */}
        <div className="hidden lg:flex items-center gap-5">
          {[
            { href:'https://www.tiktok.com/@darlenewaldrop',   icon:'fab fa-tiktok' },
            { href:'https://www.instagram.com/darlenewaldrop', icon:'fab fa-instagram' },
          ].map(s => (
            <a key={s.icon} href={s.href} target="_blank" rel="noopener noreferrer"
              className="text-cream/50 hover:text-gold text-sm transition-colors duration-300">
              <i className={s.icon} />
            </a>
          ))}
          <a href="#contact" onClick={e => go(e, '#contact')} className="btn-primary py-2.5 px-6 text-[0.62rem]">
            Work With Me
          </a>
        </div>

        {/* Hamburger */}
        <button onClick={toggleMenu} aria-label="Menu"
          className="lg:hidden flex flex-col gap-1.5 p-2">
          <span className={`block w-6 h-px bg-cream transition-all duration-300 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block w-6 h-px bg-cream transition-all duration-300 ${menuOpen ? 'opacity-0 w-0' : ''}`} />
          <span className={`block w-6 h-px bg-cream transition-all duration-300 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-luxury bg-espresso
        ${menuOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <ul className="flex flex-col px-8 py-6 gap-5 border-t border-cream/10">
          {LINKS.map(([label, href]) => (
            <li key={href}>
              <a href={href} onClick={e => go(e, href)}
                className="text-overline font-sans uppercase tracking-[0.18em] text-cream/70 hover:text-gold block py-1 transition-colors duration-300">
                {label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a href="#contact" onClick={e => go(e, '#contact')} className="btn-primary inline-flex text-[0.62rem]">
              Work With Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
