import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const TYPES = ['UGC Content','Influencer Collaboration','Product Review','Commercial Shoot','Modeling','Fashion Show / Runway','Photography','Event Appearance','Other']
const BUDGETS = ['Under $250','$250–$500','$500–$1,000','$1,000–$2,500','$2,500+']

export default function Contact() {
  const [form, setForm] = useState({ fullName:'', company:'', email:'', projectType:'', projectDesc:'', budget:'', timeline:'', socialLink:'' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const ref = useReveal(0.05)

  const validate = () => {
    const e = {}
    if (!form.fullName.trim()) e.fullName = 'Required'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required'
    if (!form.projectType) e.projectType = 'Required'
    if (!form.projectDesc.trim()) e.projectDesc = 'Required'
    return e
  }

  const handle = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }))
  }

  const submit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    console.log('Form:', form)
    // TODO: Connect to Formspree / EmailJS
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-choco relative overflow-hidden py-section">
      <span className="watermark top-0 right-[-2%] pointer-events-none z-0" aria-hidden="true">CONTACT</span>

      <div ref={ref} className="reveal relative z-10 max-w-[1340px] mx-auto px-6 lg:px-10
                                grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 items-start">

        {/* Left */}
        <div>
          <span className="overline-label text-gold/60 mb-6 block">Get in Touch</span>
          <h2 className="heading-display mb-8">
            Let's Create<br/>Something<br/><em className="font-script not-italic text-gold">Together</em>
          </h2>
          <p className="text-cream/50 font-sans font-light leading-relaxed mb-8 max-w-xs">
            Have a product to showcase, a campaign to launch, or a creative opportunity in mind?
            I'd love to hear about it.
          </p>

          <a href="mailto:hello@darlenewaldrop.com"
            className="inline-flex items-center gap-3 text-cream/60 hover:text-gold transition-colors duration-300 mb-8 font-sans text-sm">
            <i className="fas fa-envelope text-gold" />
            hello@darlenewaldrop.com
          </a>

          <div className="flex gap-4 mt-2">
            {[
              { href:'https://www.tiktok.com/@darlenewaldrop',   icon:'fab fa-tiktok',     label:'TikTok' },
              { href:'https://www.instagram.com/darlenewaldrop', icon:'fab fa-instagram',  label:'Instagram' },
              { href:'https://www.youtube.com/@darlenewaldrop',  icon:'fab fa-youtube',    label:'YouTube' },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                aria-label={s.label}
                className="w-11 h-11 border border-cream/15 flex items-center justify-center text-cream/40
                           hover:border-gold hover:text-gold transition-all duration-300">
                <i className={`${s.icon} text-sm`} />
              </a>
            ))}
          </div>

          {/* Pull image */}
          <div className="mt-14 aspect-[4/3] overflow-hidden img-zoom hidden lg:block">
            <img src="/images/IMG_5338.JPEG" alt="Darlene Waldrop"
              className="w-full h-full object-cover object-top" />
          </div>
        </div>

        {/* Form */}
        <div className="border border-cream/8 p-10">
          {submitted ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 border border-gold flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-check text-gold text-xl" />
              </div>
              <h3 className="font-display font-bold text-cream text-2xl mb-4">Thank You!</h3>
              <p className="text-cream/50 font-sans font-light">
                Your inquiry has been received. I'll review and get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-0">
                <FldDark label="Full Name *" error={errors.fullName}>
                  <input name="fullName" value={form.fullName} onChange={handle}
                    placeholder="Your full name" autoComplete="name" className="field-dark" />
                </FldDark>
                <FldDark label="Company / Brand">
                  <input name="company" value={form.company} onChange={handle}
                    placeholder="Company or brand name" className="field-dark" />
                </FldDark>
                <FldDark label="Email *" error={errors.email}>
                  <input name="email" type="email" value={form.email} onChange={handle}
                    placeholder="your@email.com" autoComplete="email" className="field-dark" />
                </FldDark>
                <FldDark label="Project Type *" error={errors.projectType}>
                  <select name="projectType" value={form.projectType} onChange={handle}
                    className="field-dark bg-transparent appearance-none cursor-pointer">
                    <option value="" disabled>Select a type</option>
                    {TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </FldDark>
                <FldDark label="Budget Range">
                  <select name="budget" value={form.budget} onChange={handle}
                    className="field-dark bg-transparent appearance-none cursor-pointer">
                    <option value="" disabled>Select a budget</option>
                    {BUDGETS.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                </FldDark>
                <FldDark label="Preferred Timeline">
                  <input name="timeline" value={form.timeline} onChange={handle}
                    placeholder="e.g. Within 2 weeks" className="field-dark" />
                </FldDark>
              </div>
              <FldDark label="Project Description *" error={errors.projectDesc}>
                <textarea name="projectDesc" value={form.projectDesc} onChange={handle}
                  rows={4} placeholder="Tell me about your project..."
                  className="field-dark resize-none" />
              </FldDark>
              <FldDark label="Website or Social Link (optional)">
                <input name="socialLink" type="url" value={form.socialLink} onChange={handle}
                  placeholder="https://" autoComplete="url" className="field-dark" />
              </FldDark>
              <div className="mt-8">
                <button type="submit" className="btn-primary w-full justify-center gap-4">
                  Send a Project Inquiry
                  <i className="fas fa-arrow-right text-xs" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function FldDark({ label, error, children }) {
  return (
    <div className="mb-8">
      <label className="block text-overline font-sans uppercase tracking-widest text-cream/40 mb-2">
        {label}
      </label>
      {children}
      {error && <p className="text-gold/70 text-xs mt-1 font-sans">{error}</p>}
    </div>
  )
}
