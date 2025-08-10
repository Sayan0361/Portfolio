import React from 'react';
import { words } from '../constants/index.js';
import Button from '../components/Button.jsx';
import HeroExperience from '../components/HeroModels/HeroExperience.jsx'; 
import AnimatedCounter from '../components/AnimatedCounter.jsx';
import { useGSAP } from '@gsap/react'; 
import gsap from 'gsap';
import { useMediaQuery } from 'react-responsive';

const Hero = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  
  useGSAP(() => {
    if (isMobile) return;
    gsap.fromTo('.hero-text', { opacity: 0 }, { opacity: 1, duration: 1, ease: 'power2.inOut' });
    gsap.fromTo('.hero-text h1', { y: 50 }, { y: 0, duration: 1, stagger: 0.5 });
    gsap.fromTo('.hero-3d-layout', { opacity: 0 }, { opacity: 1, duration: 1.5, delay: 0.5 });
    gsap.fromTo('.cta-wrapper', { opacity: 0 }, { opacity: 1, duration: 1, delay: 0.5 });
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden bg-black min-h-screen">
      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5 py-8">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                I'm{' '}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 font-bold">
                  Sayan Sen
                </span>
                ,<br /> I turn
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-green-400"
                          style={{ filter: 'drop-shadow(0 0 5px #000)' }}
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into things</h1>
              <h1>people love to use.</h1>
            </div>
            
            <p className="text-yellow-300/90 md:text-xl text-base relative z-10 pointer-events-none transition-colors duration-300">
              "You have the right to code, but not to the output - 
              <br className="hidden md:block" /> 
              Focus on the process, the bugs will follow."
            </p>
            <p className="text-sm md:text-base italic text-red-300/80 mt-1">
              — Bhagavad Gita 2.47 (Developer's Edition)
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button
                text="View My Resume"
                icon="download"
                className="sm:w-auto px-8 py-3 text-lg rounded-2xl bg-transparent border-2 border-white/20 hover:bg-white/10 hover:border-white/30"
                onClick={() => window.open('https://drive.google.com/drive/folders/1LhJ3x8rBIGwJa_73Eqi3HH0rVs70agwK?usp=drive_link', '_blank')}
              />
            </div>

            
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <figure className="md:block hidden">
          <div className="hero-3d-layout z-10">
            <HeroExperience />
          </div>
        </figure>
      </div>
      
      {/* AnimatedCounter */}
      <div className="w-full bg-black">
        <div className="animated-counter-wrapper" 
            style={{ 
              backgroundColor: '#000000 !important',
              background: '#000000 !important' 
            }}>
          <AnimatedCounter />
        </div>
      </div>
    </section>
  );
};

export default Hero;