import { useState, useEffect } from 'react'
import { NAV_LINKS } from '../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = document.querySelectorAll('section[id]')
      const pos = window.scrollY + 85
      sections.forEach(sec => {
        if (pos >= sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight)
          setActiveSection(sec.id)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) window.scrollTo({ top: target.offsetTop - 74, behavior: 'smooth' })
    setMenuOpen(false)
    document.body.style.overflow = ''
  }

  const toggleMenu = () => {
    const next = !menuOpen
    setMenuOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ? 'bg-white/95 backdrop-blur-sm border-b-2 border-brown shadow-[0_3px_0_#3D2C24]' : 'bg-white border-b-2 border-brown'}`}
      role="navigation" aria-label="Main navigation"
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center gap-4 h-[70px]">

        {/* Logo */}
        <a href="#home" onClick={e => handleLinkClick(e, '#home')}
          className="flex-shrink-0 font-serif text-xl font-bold text-brown tracking-tight hover:text-rose transition-colors">
          Darlene Waldrop
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-0.5 mx-auto">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={e => handleLinkClick(e, link.href)}
                className={`text-[0.8rem] font-medium px-3 py-2 border-2 transition-all duration-100
                  ${activeSection === link.href.slice(1)
                    ? 'bg-rose-pale text-rose border-brown'
                    : 'border-transparent text-brown hover:bg-rose-blush hover:border-brown'}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
          {[
            { href: 'https://www.tiktok.com/@darlenewaldrop', icon: 'fab fa-tiktok', label: 'TikTok' },
            { href: 'https://www.instagram.com/darlenewaldrop', icon: 'fab fa-instagram', label: 'Instagram' },
            { href: 'https://www.youtube.com/@darlenewaldrop', icon: 'fab fa-youtube', label: 'YouTube' },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
              className="w-9 h-9 flex items-center justify-center border-2 border-brown bg-white text-brown text-sm
                         hover:bg-rose hover:text-white hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal transition-all duration-150">
              <i className={s.icon} aria-hidden="true" />
            </a>
          ))}
        </div>

        {/* Work With Me CTA */}
        <a href="#contact" onClick={e => handleLinkClick(e, '#contact')}
          className="hidden lg:flex btn-primary text-xs px-4 py-2">
          Work With Me
        </a>

        {/* Hamburger */}
        <button
          className="lg:hidden ml-auto w-10 h-10 flex flex-col items-center justify-center gap-[5px] border-2 border-brown bg-white"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span className={`block w-5 h-0.5 bg-brown transition-all duration-200 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block w-5 h-0.5 bg-brown transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-brown transition-all duration-200 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-screen border-b-2 border-brown' : 'max-h-0'}`}>
        <ul className="bg-white flex flex-col">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a href={link.href} onClick={e => handleLinkClick(e, link.href)}
                className={`block px-6 py-4 text-sm font-medium border-b border-rose-pale
                  ${activeSection === link.href.slice(1) ? 'text-rose bg-rose-blush' : 'text-brown hover:bg-rose-blush'}`}>
                {link.label}
              </a>
            </li>
          ))}
          <li className="p-4">
            <a href="#contact" onClick={e => handleLinkClick(e, '#contact')} className="btn-primary w-full justify-center">
              Work With Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
