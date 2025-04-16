import React from 'react';
import { words } from '../constants/index.js';
import Button from '../components/Button.jsx';
import HeroExperience from '../components/HeroModels/HeroExperience.jsx'; 
import AnimatedCounter from '../components/AnimatedCounter.jsx';
import { useGSAP } from '@gsap/react'; 
import gsap from 'gsap';


const Hero = () => {
  useGSAP(() => {
    gsap.fromTo('.hero-text', { opacity: 0 }, { opacity: 1, duration: 1 ,ease: 'power2.inOut'});
    gsap.fromTo('.hero-text h1', { y: 50 }, { y: 0, duration: 1, stagger: 0.5 });
    gsap.fromTo('.hero-3d-layout', { opacity: 0 }, { opacity: 1, duration: 1.5, delay: 0.5 });
    gsap.fromTo('.cta-wrapper', { opacity: 0 }, { opacity: 1, duration: 1, delay: 0.5 });
  }); 
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                I'm <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 font-bold">
                    Sayan Sen
                  </span>,
                <br />  I turn
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                      key={index}
                      className="flex items-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 md:gap-3 gap-1 pb-2"
                    >                    
                        <img
                          src={word.imgPath}
                          alt="person"
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

            <p className="text-yellow-200 md:text-xl relative z-10 pointer-events-none">
            "Set your heart upon your work — not its reward.
            <br/>  In every trial, I rise, a flame reborn." 
            </p>
            <p className="text-md italic text-red-300 mt-1">
              — inspired by Bhagavad Gita 2.47
            </p>

            <Button
              text="See My Work"
              className="md:w-80 md:h-16 w-50 h-10"
              id="counter"
            />
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>
      <AnimatedCounter />
      
    </section>

  )
}

export default Hero; 

