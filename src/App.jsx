import React, { useState, useEffect } from 'react';
import Hero from './sections/Hero';
import ShowcaseSection from './sections/ShowcaseSection';
import Navbar from './components/Navbar';
import FeatureCards from './sections/FeatureCards';
import TechStack from './sections/TechStack';
import AboutMe from './sections/AboutMe';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Loader from './components/Loader';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className='bg-black'>
          <Navbar />
          <Hero />
          <ShowcaseSection />
          <FeatureCards />
          <AboutMe />
          <TechStack />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;