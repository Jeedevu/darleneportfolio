import Navbar        from './components/Navbar'
import Hero          from './sections/Hero'
import MarqueeBanner from './sections/Marquee'
import About         from './sections/About'
import WhatIDo       from './sections/WhatIDo'
import Services      from './sections/Services'
import Pricing       from './sections/Pricing'
import PhotoPortfolio from './sections/PhotoPortfolio'
import VideoPortfolio from './sections/VideoPortfolio'
import WhyWorkWithMe from './sections/WhyWorkWithMe'
import Contact       from './sections/Contact'
import Footer        from './sections/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MarqueeBanner />
        <About />
        <WhatIDo />
        <Services />
        <Pricing />
        <PhotoPortfolio />
        <VideoPortfolio />
        <WhyWorkWithMe />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
