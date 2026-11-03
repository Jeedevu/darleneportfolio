// All image paths are relative to /public/images/
// Images are served from the public folder at runtime

export const IMAGES = {
  // ── HERO ─────────────────────────────────────────────────
  // Striking red satin dress close-up – confident, glamorous, perfect hero
  hero: '/images/red top pic.JPEG',

  // ── ABOUT ────────────────────────────────────────────────
  // Main: seated floor pose, editorial and relaxed
  aboutMain:   '/images/IMG_0868.JPEG',
  // Accent: denim couch sitting, warm and approachable
  aboutAccent: '/images/denim pic.JPEG',

  // ── WHY WORK WITH ME ─────────────────────────────────────
  // Elegant full-length paisley gown, refined and professional
  whyImage: '/images/IMG_5815.JPEG',

  // ── PHOTO GALLERY ────────────────────────────────────────
  gallery: [
    // Fashion & Style
    {
      src: '/images/IMG_5814.JPEG',
      alt: 'Darlene in faux fur coat with black dress and boots',
      category: 'fashion',
      label: 'Fashion & Style',
      caption: 'Luxury Faux Fur Moment',
    },
    {
      src: '/images/IMG_5817.JPEG',
      alt: 'Darlene in black leather mini dress with knee boots',
      category: 'fashion',
      label: 'Fashion & Style',
      caption: 'Black Leather Dress',
    },
    {
      src: '/images/IMG_3563.JPEG',
      alt: 'Darlene in black leather skirt set leaning on wall',
      category: 'fashion',
      label: 'Fashion & Style',
      caption: 'Editorial Leather Look',
    },
    {
      src: '/images/IMG_5385 (2).JPEG',
      alt: 'Darlene in leopard print top with wide leg jeans and Gucci belt',
      category: 'fashion',
      label: 'Fashion & Style',
      caption: 'Leopard Print & Gucci',
    },
    {
      src: '/images/IMG_5338.JPEG',
      alt: 'Darlene in brown lace dress with gold belt, hand on hip',
      category: 'fashion',
      label: 'Fashion & Style',
      caption: 'Brown Lace Dress',
    },
    {
      src: '/images/IMG_5389.JPEG',
      alt: 'Darlene in white crop top with wide leg leather pants',
      category: 'fashion',
      label: 'Fashion & Style',
      caption: 'White Crop & Leather Pants',
    },
    {
      src: '/images/IMG_5392.JPEG',
      alt: 'Darlene in graphic tiger tee with wide leg pants',
      category: 'fashion',
      label: 'Fashion & Style',
      caption: 'Casual Edgy Vibes',
    },
    {
      src: '/images/COUNTY CONCERT OUTFIT.jpg',
      alt: 'Darlene country concert mirror selfie in denim and corset',
      category: 'fashion',
      label: 'Fashion & Style',
      caption: 'Country Concert Look',
    },

    // Lifestyle
    {
      src: '/images/denim pic.JPEG',
      alt: 'Darlene sitting cross-legged on couch in denim outfit, smiling',
      category: 'lifestyle',
      label: 'Lifestyle',
      caption: 'Cozy Lifestyle Moment',
    },
    {
      src: '/images/IMG_0002.JPEG',
      alt: 'Darlene smiling in black hat and black top, close-up portrait',
      category: 'lifestyle',
      label: 'Lifestyle',
      caption: 'Portrait in Black Hat',
    },
    {
      src: '/images/IMG_0004.JPEG',
      alt: 'Darlene in hallway with black hat, full personality shot',
      category: 'lifestyle',
      label: 'Lifestyle',
      caption: 'Hallway Style',
    },
    {
      src: '/images/MORGAN WALLEN CONCERT.jpg',
      alt: 'Darlene at Morgan Wallen concert, smiling in front of crowd',
      category: 'lifestyle',
      label: 'Lifestyle',
      caption: 'Morgan Wallen Concert',
    },
    {
      src: '/images/BACK STREET BOYS CONCERT.jpg',
      alt: 'Darlene selfie at Backstreet Boys concert with crowd below',
      category: 'lifestyle',
      label: 'Lifestyle',
      caption: 'Backstreet Boys Concert',
    },
    {
      src: '/images/FEEDING GOATS.jpg',
      alt: 'Darlene feeding goats at farm, genuine lifestyle moment',
      category: 'lifestyle',
      label: 'Lifestyle',
      caption: 'Farm Adventures',
    },
    {
      src: '/images/BEST MAI TAI.jpg',
      alt: 'Close-up of mai tai cocktail in tiki glass at a bar',
      category: 'lifestyle',
      label: 'Lifestyle',
      caption: 'Best Mai Tai',
    },

    // Home & Kitchen (UGC)
    {
      src: '/images/IMG_3885.JPEG',
      alt: 'Darlene in pink crop top in her kitchen by the island',
      category: 'home',
      label: 'Home & Kitchen',
      caption: 'Kitchen Style',
    },
    {
      src: '/images/IMG_4643.JPEG',
      alt: 'Darlene demonstrating cleaning spray on kitchen counter',
      category: 'home',
      label: 'Home & Kitchen',
      caption: 'Cleaning Product Demo',
    },
    {
      src: '/images/IMG_4644.JPEG',
      alt: 'Darlene wiping down kitchen counter with cleaning product',
      category: 'home',
      label: 'Home & Kitchen',
      caption: 'Kitchen Clean UGC',
    },
    {
      src: '/images/IMG_4647.JPEG',
      alt: 'Darlene mopping hardwood floor with steam mop near staircase',
      category: 'home',
      label: 'Home & Kitchen',
      caption: 'Floor Mop Demo',
    },
    {
      src: '/images/refrigerator pic.JPEG',
      alt: 'Darlene posing with refrigerator in brown jumpsuit, kitchen background',
      category: 'home',
      label: 'Home & Kitchen',
      caption: 'Refrigerator Feature',
    },

    // Beauty & Fitness
    {
      src: '/images/IMG_5340.JPEG',
      alt: 'Darlene close-up beauty portrait in brown lace top, glowing skin',
      category: 'beauty',
      label: 'Beauty',
      caption: 'Natural Beauty Portrait',
    },
    {
      src: '/images/IMG_5205.JPEG',
      alt: 'Darlene in Arizona State tee, natural hair and glowing skin',
      category: 'beauty',
      label: 'Beauty',
      caption: 'Effortless Glow',
    },
    {
      src: '/images/IMG_0573.JPEG',
      alt: 'Darlene in black top with olive hat, natural beauty look',
      category: 'beauty',
      label: 'Beauty',
      caption: 'Hat & Waves',
    },
    {
      src: '/images/08_04_2026(4).jpg',
      alt: 'Darlene in athletic wear with Stanley tumbler, fitness lifestyle',
      category: 'fitness',
      label: 'Fitness & Wellness',
      caption: 'Active Lifestyle',
    },
    {
      src: '/images/08_04_2026(2).jpg',
      alt: 'Darlene in casual brown top with jeans, natural home setting',
      category: 'lifestyle',
      label: 'Lifestyle',
      caption: 'Everyday Casual',
    },
    {
      src: '/images/08_04_2026.jpg',
      alt: 'Darlene in navy and white at doorway, casual chic',
      category: 'lifestyle',
      label: 'Lifestyle',
      caption: 'Casual Chic',
    },
    {
      src: '/images/08_04_2026(1).jpg',
      alt: 'Darlene in navy top with white linen pants on staircase',
      category: 'fashion',
      label: 'Fashion & Style',
      caption: 'Linen & Navy',
    },
    {
      src: '/images/08_04_2026(3).jpg',
      alt: 'Darlene opening front door in navy and white outfit with sunglasses',
      category: 'lifestyle',
      label: 'Lifestyle',
      caption: 'Sunday Morning Energy',
    },
    {
      src: '/images/IMG_5815.JPEG',
      alt: 'Darlene in elegant paisley maxi gown with pearl necklace',
      category: 'fashion',
      label: 'Fashion & Style',
      caption: 'Paisley Gown — Event Ready',
    },
  ],
}

export const GALLERY_FILTERS = [
  { key: 'all',      label: 'All' },
  { key: 'fashion',  label: 'Fashion & Style' },
  { key: 'lifestyle',label: 'Lifestyle' },
  { key: 'home',     label: 'Home & Kitchen' },
  { key: 'beauty',   label: 'Beauty' },
  { key: 'fitness',  label: 'Fitness' },
]
