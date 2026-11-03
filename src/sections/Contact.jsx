import { useState } from 'react'

const PROJECT_TYPES = ['UGC Content','Influencer Collaboration','Product Review','Commercial Shoot','Modeling','Fashion Show / Runway','Photography','Event Appearance','Other']
const BUDGETS = ['Under $250','$250 – $500','$500 – $1,000','$1,000 – $2,500','$2,500+']

export default function Contact() {
  const [form, setForm] = useState({ fullName:'', company:'', email:'', projectType:'', projectDesc:'', budget:'', timeline:'', socialLink:'' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.fullName.trim()) e.fullName = 'Full name is required.'
    if (!form.email.trim()) e.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email.'
    if (!form.projectType) e.projectType = 'Please select a project type.'
    if (!form.projectDesc.trim()) e.projectDesc = 'Please describe your project.'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    console.log('Form data:', form)
    // TODO: connect to Formspree / EmailJS / backend
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-[#FAF6EF] border-b-2 border-brown py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-14 items-start">

          {/* Left */}
          <div>
            <span className="section-label mb-4 block w-fit">Get in Touch</span>
            <h2 className="section-heading mb-6">Let's Create Something Together</h2>
            <p className="text-taupe leading-relaxed mb-4">
              Have a product to showcase, a campaign to bring to life, or a creative opportunity in mind?
              I'd love to hear about it.
            </p>
            <p className="text-taupe leading-relaxed mb-8">
              I'm open to UGC projects, influencer collaborations, commercial shoots, modeling opportunities,
              photography, fashion shows, and selected brand appearances.
            </p>
            <a href="mailto:hello@darlenewaldrop.com"
              className="inline-flex items-center gap-2 text-rose font-semibold border-b-2 border-rose-light pb-0.5 hover:text-brown hover:border-brown transition-colors">
              <i className="fas fa-envelope" aria-hidden="true" />
              hello@darlenewaldrop.com
            </a>
            <div className="flex gap-3 mt-6">
              {[
                { href: 'https://www.tiktok.com/@darlenewaldrop', icon: 'fab fa-tiktok', label: 'TikTok' },
                { href: 'https://www.instagram.com/darlenewaldrop', icon: 'fab fa-instagram', label: 'Instagram' },
                { href: 'https://www.youtube.com/@darlenewaldrop', icon: 'fab fa-youtube', label: 'YouTube' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="w-11 h-11 border-2 border-brown bg-white flex items-center justify-center text-brown shadow-brutal
                             hover:bg-rose hover:text-white hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg transition-all duration-150">
                  <i className={`${s.icon} text-lg`} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white border-2 border-brown shadow-brutal-lg p-8">
            {submitted ? (
              <div className="text-center py-10">
                <i className="fas fa-check-circle text-5xl text-rose mb-4 block" />
                <h3 className="font-serif text-2xl font-bold text-brown mb-3">Thank you for reaching out!</h3>
                <p className="text-taupe">Your inquiry has been received. I'll review the details and get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <Field label="Full Name" required error={errors.fullName}>
                    <input type="text" name="fullName" value={form.fullName} onChange={handleChange}
                      placeholder="Your full name" autoComplete="name"
                      className={fieldClass(errors.fullName)} />
                  </Field>
                  <Field label="Company / Brand Name">
                    <input type="text" name="company" value={form.company} onChange={handleChange}
                      placeholder="Your company or brand" autoComplete="organization"
                      className={fieldClass()} />
                  </Field>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <Field label="Email Address" required error={errors.email}>
                    <input type="email" name="email" value={form.email} onChange={handleChange}
                      placeholder="your@email.com" autoComplete="email"
                      className={fieldClass(errors.email)} />
                  </Field>
                  <Field label="Project Type" required error={errors.projectType}>
                    <select name="projectType" value={form.projectType} onChange={handleChange}
                      className={fieldClass(errors.projectType)}>
                      <option value="" disabled>Select a project type</option>
                      {PROJECT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </Field>
                </div>
                <Field label="Project Description" required error={errors.projectDesc} className="mb-4">
                  <textarea name="projectDesc" value={form.projectDesc} onChange={handleChange}
                    rows={4} placeholder="Tell me about your project, product, or campaign..."
                    className={`${fieldClass(errors.projectDesc)} resize-y min-h-[100px]`} />
                </Field>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <Field label="Budget Range">
                    <select name="budget" value={form.budget} onChange={handleChange} className={fieldClass()}>
                      <option value="" disabled>Select a budget range</option>
                      {BUDGETS.map(b => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </Field>
                  <Field label="Preferred Timeline">
                    <input type="text" name="timeline" value={form.timeline} onChange={handleChange}
                      placeholder="e.g. Within 2 weeks" className={fieldClass()} />
                  </Field>
                </div>
                <Field label={<>Website or Social Link <span className="text-taupe font-normal">(optional)</span></>} className="mb-6">
                  <input type="url" name="socialLink" value={form.socialLink} onChange={handleChange}
                    placeholder="https://" autoComplete="url" className={fieldClass()} />
                </Field>
                <button type="submit"
                  className="btn-primary w-full justify-center text-sm py-4 gap-3">
                  <span>Send a Project Inquiry</span>
                  <i className="fas fa-paper-plane" aria-hidden="true" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function fieldClass(error = '') {
  return `w-full px-4 py-3 border-2 ${error ? 'border-rose' : 'border-brown'} bg-[#FDFAF5] font-sans text-[0.9rem] text-brown
    focus:outline-none focus:border-rose focus:shadow-brutal-rose transition-all duration-150 appearance-none`
}

function Field({ label, required, error, children, className = '' }) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label className="text-[0.82rem] font-semibold text-brown tracking-wide">
        {label}{required && <span className="text-rose ml-0.5" aria-hidden="true"> *</span>}
      </label>
      {children}
      {error && <span className="text-[0.75rem] text-rose font-medium">{error}</span>}
    </div>
  )
}
