import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useMediaQuery } from 'react-responsive';
import TitleHeader from '../components/TitleHeader';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  
  useGSAP(() => {
    if (isMobile) return; // Skip animation on mobile devices

    const cards = [project1Ref.current, project2Ref.current, project3Ref.current];

    // Animate each project card
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          delay: 0.2 * (index + 1),
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100'
          },
        }
      );
    });
    
    // Fade in the entire section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.2,
        ease: 'power2.out',
      }
    );
  }, [isMobile]);

  return (
    <section id="work" ref={sectionRef} className="py-16 bg-black">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <TitleHeader
          title="My Projects"
          sub="🚀 Showcasing My Work"
        />
        <p className="text-white-50 mt-3 text-center md:text-lg max-w-2xl mx-auto mb-16">
          I will update this section with better projects.
        </p>
        
        <div className="w-full mt-20">
          <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Project 1 - Job Portal */}
            <div 
              ref={project1Ref} 
              className="bg-zinc-950 rounded-xl card-border overflow-hidden shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-zinc-900"
            >
              <div className="h-52 bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center overflow-hidden">
                <img 
                  src="/images/jobportal.png" 
                  alt="HireMe Job Portal" 
                  className="object-cover w-full h-full transform hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <a 
                  href="https://github.com/Sayan0361/JobPortal" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-teal-500 to-blue-500 text-transparent bg-clip-text hover:underline"
                >
                  HireMe - Job Portal
                </a>
                <p className="text-gray-300 mt-4">
                    A smart job platform connecting <span className="text-green-400 font-medium">employers</span> and <span className="text-blue-400 font-medium">job seekers</span> through a seamless application process. Includes secure auth and custom dashboards.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-cyan-900/40 text-cyan-300 rounded-full text-xs">React.js</span>
                  <span className="px-3 py-1 bg-blue-900/40 text-blue-300 rounded-full text-xs">Tailwind CSS</span>
                  <span className="px-3 py-1 bg-green-900/40 text-green-300 rounded-full text-xs">Node.js</span>
                  <span className="px-3 py-1 bg-yellow-400/50 text-yellow-300 rounded-full text-xs">Express</span>
                  <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs">MongoDB</span>
                </div>
              </div>
            </div>

            {/* Project 2 - ChatZone */}
            <div 
              ref={project2Ref} 
              className="bg-zinc-950 rounded-xl card-border overflow-hidden shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-zinc-900"
            >
              <div className="h-52 bg-gradient-to-r from-blue-400 to-cyan-500 flex items-center justify-center overflow-hidden">
                <img 
                  src="/images/chatzone.png" 
                  alt="ChatZone Project" 
                  className="object-cover w-full h-full transform hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <a 
                  href="https://github.com/Sayan0361/Chat-Zone" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-indigo-500 to-indigo-700 text-transparent bg-clip-text hover:underline"
                >
                  ChatZone
                </a>
                <p className="text-gray-300 mt-4">
                    A sleek <span className="text-cyan-400 font-medium">chat app</span> using the <span className="text-green-400 font-medium">MERN stack</span>, featuring <span className="text-yellow-400 font-medium">secure login</span>, encrypted credentials, and a responsive UI. Private chats and WebSocket-based messaging are on the way.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-cyan-900/40 text-cyan-300 rounded-full text-xs">React.js</span>
                  <span className="px-3 py-1 bg-blue-900/40 text-blue-300    rounded-full text-xs">Tailwind CSS</span>
                  <span className="px-3 py-1 bg-yellow-900/40 text-yellow-300 rounded-full text-xs">Socket.io</span>
                  <span className="px-3 py-1 bg-green-900/40 text-green-300 rounded-full text-xs">Node.js</span>
                  <span className="px-3 py-1 bg-blue-900/40 text-blue-300 rounded-full text-xs">Express</span>
                </div>
              </div>
            </div>

            {/* Project 3 - VirtualR */}
            <div 
              ref={project3Ref} 
              className="bg-zinc-950 rounded-xl card-border overflow-hidden shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-zinc-900"
            >
              <div className="h-52 bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center overflow-hidden">
                <img 
                  src="/images/virtualr.png" 
                  alt="Virtual Reality Project" 
                  className="object-cover w-full h-full transform hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <a 
                  href="https://virtualr-2-296115l6d-sayan0361s-projects.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 text-transparent bg-clip-text hover:underline"
                >
                  Virtual Reality
                </a>
                <p className="text-gray-300 mt-4">
                    An immersive landing page for <span className="text-purple-400 font-medium">VR technology</span>, featuring <span className="text-blue-400 font-medium">parallax effects</span> and smooth animations for a dynamic user experience.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-cyan-900/40 text-cyan-300 rounded-full text-xs">React.js</span>
                  <span className="px-3 py-1 bg-blue-900/40 text-blue-300 rounded-full text-xs">Tailwind CSS</span>
                  <span className="px-3 py-1 bg-purple-900/40 text-purple-300 rounded-full text-xs">GSAP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
