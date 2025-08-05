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
    // Simulate loading (replace with actual loading logic)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
};

export default App;