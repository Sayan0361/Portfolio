import React from 'react'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import Navbar from './components/Navbar'
import FeatureCards from './sections/FeatureCards'
import TechStack from './sections/TechStack'
import AboutMe from './sections/AboutMe'
import Contact from './sections/Contact'
import Footer from './sections/Footer'


const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <FeatureCards />
      <AboutMe />
      <TechStack />
      <Contact />
      <Footer />
    </>
  )
}

export default App