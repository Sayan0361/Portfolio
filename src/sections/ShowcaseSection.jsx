import React, { use } from 'react'
import { useRef } from 'react';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { useGSAP } from '@gsap/react';
import TitleHeader from '../components/TitleHeader';

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(() => {
        const cards = [project1Ref.current, project2Ref.current, project3Ref.current];
    
        cards.forEach((card, index) => {
          gsap.fromTo(
            card,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 2,
              delay: 0.3 * (index + 1),
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top bottom-=100'
              },
            }
          );
        });
        
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 1.5,
              ease: 'power3.out',
            }
          );
      }, []);
  return (
    <section id="work" ref={sectionRef} className='app-showcase'>
        <div className='w-full h-full md:px-20 px-5'>
            <TitleHeader
            title="My Projects"
            sub="🚀 Showcasing My Work"
            />
            <p className='text-white-50 flex justify-center md:text-lg mt-2'>
                I'll update this section with better projects.
            </p>
            <div className='showcaselayout mt-20'>
            {/* {LEFT} */}
            <div className='first-project-wrapper' ref={project1Ref}>
                <div className='image-wrapper bg-[#3445ff]'>
                    <img src="/images/virtualr.png"/>
                </div>
                <div className='text-content'>
                    <a href="https://virtualr-2-296115l6d-sayan0361s-projects.vercel.app/" className='text-2xl md:text-3xl font-semibold bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 text-transparent bg-clip-text'>
                        Virtual Reality
                    </a>
                    <p className='text-white-50 md:text-xl mt-2'>
                        This immersive landing page is built using <span className='font-semibold text-blue-300'>React.js</span> and <span className='font-semibold text-green-300'>Tailwind CSS</span>. Designed with responsiveness in mind, it adapts seamlessly across devices and offers a modern UI.
                    </p>
                    <p className='text-white-50 md:text-lg mt-2'>
                        The project focuses on UI/UX precision, scroll animations, and clean component-based architecture — a reflection of my growth in front-end development and modern web design practices.
                    </p>
                </div>

            </div>
            {/* {RIGHT} */}
            <div className='project-list-wrapper overflow-hidden'>
            <div className='project' ref={project2Ref}>
                    <div className='image-wrapper bg-[#93d9ff]'>
                        <img src="/images/jobportal.png"/>
                    </div>
                    <div className='text-content'>
                        <a href="https://github.com/Sayan0361/JobPortal" target="_blank"
                            rel="noopener noreferrer" className='text-2xl mt-5 md:text-3xl font-semibold bg-gradient-to-r from-cyan-400 via-teal-500 to-blue-500 text-transparent bg-clip-text'>Job-Portal</a>
                    </div>
                </div>
                <div className='project' ref={project3Ref}>
                    <div className='image-wrapper bg-[#5aff88]'>
                        <img src="/images/EDA.png"/>
                    </div>
                    <div className='text-content'>
                        <a href="https://colab.research.google.com/github/Sayan0361/EDA/blob/main/PLACEMENT.ipynb" target="_blank"
                            rel="noopener noreferrer" className='text-2xl mt-5 md:text-3xl font-semibold bg-gradient-to-r from-green-400 via-lime-500 to-green-700 text-transparent bg-clip-text'>Exploratory Data Analysis</a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default ShowcaseSection