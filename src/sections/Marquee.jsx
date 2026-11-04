export default function MarqueeBanner() {
  const items = [
    'UGC Creator', 'Lifestyle Content', 'On-Camera Talent', 'Brand Collabs',
    'Product Reviews', 'Fashion & Style', 'Home & Kitchen', 'Commercial Shoots',
  ]
  const doubled = [...items, ...items]

  return (
    <div className="bg-choco py-5 overflow-hidden border-y border-cream/5">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-5 px-8 whitespace-nowrap">
            <span className="font-display font-bold text-cream text-sm tracking-wide">{item}</span>
            <span className="text-gold text-xs">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
