export const PRICING_TABS = [
  {
    id: 'ugc', label: 'UGC Videos',
    cards: [
      { price: '$175', title: 'Single UGC Video', featured: false, items: ['One 30–60 sec video','Concept and hook','On-camera or voiceover','Relevant B-roll','One revision','30-day organic usage rights'] },
      { price: '$225', title: 'UGC Advertising Video', featured: false, items: ['Advertising-focused video','Conversion-oriented concept','Product demo or brand story','On-camera or voiceover','One revision','30-day paid ad rights'] },
      { price: '$450', title: '3-Video UGC Package', featured: true, badge: 'Popular', items: ['Three UGC videos','Concept & hook development','Product-focused storytelling','One revision per video','Organic usage rights'] },
      { price: '$800', title: '5-Video UGC Package', featured: false, items: ['Five UGC videos','Concepts and hooks','Product demos or lifestyle','One revision per video','Organic usage rights'] },
      { price: '$1,350', title: '10-Video UGC Package', featured: false, items: ['Ten UGC videos','Content concepts & hooks','On-camera or voiceover','Product demos & lifestyle','One revision per video'] },
    ]
  },
  {
    id: 'social', label: 'Social Media',
    cards: [
      { price: '$250', title: 'Instagram Reel', featured: false, items: ['One sponsored Instagram Reel'] },
      { price: '$250', title: 'TikTok Video', featured: false, items: ['One sponsored TikTok video'] },
      { price: '$425', title: 'Instagram + TikTok', featured: true, badge: 'Best Value', items: ['One video for both platforms','Publishing dates & captions agreed'] },
      { price: '$650', title: 'Insta + TikTok + YouTube', featured: false, items: ['One video for all three platforms','Instagram, TikTok & YouTube Shorts'] },
    ]
  },
  {
    id: 'reviews', label: 'Reviews',
    cards: [
      { price: '$200', title: 'Product Review Video', featured: false, items: ['Product-focused video','Demonstration or review','Experience-based presentation'] },
      { price: '$300', title: 'Premium Brand Story', featured: true, items: ['Detailed storytelling video','Product experience focus','Brand message delivery'] },
    ]
  },
  {
    id: 'amazon', label: 'Amazon',
    cards: [
      { price: '$150', title: 'Single Amazon Video', featured: false, items: ['One product-focused Amazon video'] },
      { price: '$600', title: '5-Video Amazon Package', featured: true, badge: 'Best Value', items: ['Five product-focused Amazon videos'] },
    ]
  },
  {
    id: 'photo', label: 'Photography',
    cards: [
      { price: '$125', title: '5 Photos', featured: false, items: ['Lifestyle, product, or fashion imagery'] },
      { price: '$225', title: '10 Photos', featured: true, items: ['10 photos across agreed styles'] },
      { price: '$400', title: '20 Photos', featured: false, items: ['20 photos for campaigns or editorial'] },
      { price: '$125', title: '3 Instagram Stories', featured: false, items: ['Product features, brand mentions, demos'] },
      { price: '$175', title: '5 Instagram Stories', featured: false, items: ['Campaign-specific messaging included'] },
    ]
  },
  {
    id: 'commercial', label: 'Commercial',
    cards: [
      { price: '$400', title: 'Half-Day Shoot', featured: false, items: ['Up to 4 hours on-camera talent'] },
      { price: '$700', title: 'Full-Day Shoot', featured: true, items: ['Up to 8 hours on-camera talent'] },
      { price: 'From $350', title: 'Event Appearance', featured: false, items: ['Up to 3 hours event participation','+$100/hour additional'] },
    ]
  },
  {
    id: 'addons', label: 'Add-Ons',
    addons: [
      { title: 'Paid Advertising Usage', items: ['30 days: +30%','90 days: +50%','6 months: +75%','12 months: +100%'] },
      { title: 'Whitelisting / Spark Ads', items: ['Starting at $250/month per platform'] },
      { title: 'Raw Footage', items: ['1 video: +$100','Up to 5 videos: +$300'] },
      { title: 'Additional Hooks', items: ['3 hooks: +$50','5 hooks: +$75'] },
      { title: 'Additional Revision', items: ['+$40 per revision'] },
      { title: 'Rush Delivery', items: ['48-hour: +$75','24-hour: +$125'], note: 'Subject to availability' },
      { title: 'Category Exclusivity', items: ['30 days: +$150','90 days: +$300'] },
    ]
  },
]

export const SERVICES_OVERVIEW = [
  { icon: '🎬', title: 'UGC & Product Content', desc: 'Authentic product demonstrations, unboxings, testimonials, tutorials, reviews, and lifestyle videos.', featured: false },
  { icon: '📱', title: 'Influencer Content & Social Media', desc: 'Brand campaigns designed to increase awareness and introduce products to relevant audiences.', featured: true },
  { icon: '🎥', title: 'Commercials & Brand Videos', desc: 'On-camera participation in commercial productions, promotional videos, and advertisements.', featured: false },
  { icon: '👗', title: 'Lifestyle & Fashion Content', desc: 'Showcasing clothing, accessories, beauty products, and lifestyle brands through polished content.', featured: false },
  { icon: '💄', title: 'Modeling & On-Camera Talent', desc: 'Available for lifestyle modeling, product modeling, promotional photography, and brand campaigns.', featured: false },
  { icon: '👠', title: 'Fashion Shows & Runway', desc: 'Open to suitable fashion shows, runway appearances, presentations, and brand events.', featured: false },
  { icon: '⭐', title: 'Product Reviews & Demos', desc: 'Presenting products through clear demonstrations, honest storytelling, and engaging review formats.', featured: false },
  { icon: '🌸', title: 'Event & Brand Appearances', desc: 'Available for brand events, product launches, promotional appearances, and creator activations.', featured: false },
  { icon: '📷', title: 'Photography & Brand Imagery', desc: 'Lifestyle and product-focused photography for campaigns, social media, and promotional materials.', featured: false },
  { icon: '🎞️', title: 'Short-Form Video Content', desc: 'Creating vertical video content for Instagram Reels, TikTok, YouTube Shorts, and social platforms.', featured: false },
]

export const WHY_ITEMS = [
  { title: 'Authentic Presentation', desc: 'A natural, approachable presence that makes product features and brand messages feel genuinely relatable.' },
  { title: 'A Distinctive Perspective', desc: 'As a woman in her 50s, Darlene offers a viewpoint that connects with mature audiences while remaining accessible across generations.' },
  { title: 'Versatile Content', desc: 'From beauty and fashion to home, fitness, product demonstrations, and storytelling — diverse creative directions covered.' },
  { title: 'Audience-Focused Storytelling', desc: 'Content that communicates a product\'s value clearly, holds attention, and gives viewers a reason to engage.' },
  { title: 'Professional Collaboration', desc: 'Clear communication, organized briefs, agreed timelines, and a collaborative approach to every project.' },
  { title: 'A Willingness to Grow', desc: 'Always learning, experimenting with new formats, and refining her approach to create stronger brand partnerships.' },
]

export const INDUSTRIES = [
  { icon: '💄', title: 'Beauty & Skincare', desc: 'Beauty products, skincare, cosmetics, haircare, and personal care.' },
  { icon: '👗', title: 'Fashion & Accessories', desc: 'Clothing, footwear, jewelry, accessories, and lifestyle fashion brands.' },
  { icon: '🏠', title: 'Home & Kitchen', desc: 'Household essentials, kitchen tools, cleaning products, and home lifestyle products.' },
  { icon: '🏃‍♀️', title: 'Fitness & Wellness', desc: 'Fitness equipment, activewear, wellness products, and healthy lifestyle content.' },
  { icon: '🛍️', title: 'Lifestyle & Everyday', desc: 'Shopping, consumer products, everyday discoveries, and products that fit naturally into daily life.' },
  { icon: '📦', title: 'E-commerce & Consumer Brands', desc: 'Product demonstrations, online retail content, and customer-focused storytelling.' },
]

export const VIDEO_PLACEHOLDERS = [
  { id: 'VIDEO_ID_1', platform: 'youtube', category: 'ugc',      tag: 'UGC & Products',    title: 'Product Demonstration',  desc: 'Authentic product unboxing and first impression review.' },
  { id: 'VIDEO_ID_2', platform: 'youtube', category: 'beauty',   tag: 'Beauty & Skincare', title: 'Beauty Routine Feature', desc: 'Skincare and beauty product application and honest review.' },
  { id: 'VIDEO_ID_3', platform: 'youtube', category: 'fashion',  tag: 'Fashion & Shopping',title: 'Outfit & Style Feature', desc: 'Styling and apparel showcase with honest commentary.' },
  { id: 'VIDEO_ID_4', platform: 'youtube', category: 'home',     tag: 'Home & Kitchen',    title: 'Kitchen Product Demo',   desc: 'Practical household product demonstration and review.' },
  { id: 'VIDEO_ID_5', platform: 'youtube', category: 'lifestyle',tag: 'Lifestyle',         title: 'Day in the Life',        desc: 'Relatable everyday content and personal storytelling.' },
  { id: 'VIDEO_ID_6', platform: 'youtube', category: 'ugc',      tag: 'Commercial & Brand',title: 'Brand Testimonial',      desc: 'Product testimonial and brand storytelling content.' },
]

export const NAV_LINKS = [
  { href: '#home',           label: 'Home' },
  { href: '#about',          label: 'About' },
  { href: '#what-i-do',      label: 'What I Do' },
  { href: '#services',       label: 'Services' },
  { href: '#pricing',        label: 'Pricing' },
  { href: '#photo-portfolio',label: 'Photos' },
  { href: '#video-portfolio',label: 'Videos' },
  { href: '#contact',        label: 'Contact' },
]
