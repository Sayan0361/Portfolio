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
  const project4Ref = useRef(null);
  const project5Ref = useRef(null);
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
                  A feature-rich job platform that bridges the gap between <span className="text-green-400 font-medium">employers</span> and <span className="text-blue-400 font-medium">job seekers</span>. It offers <span className="text-yellow-300 font-medium">secure authentication & authorization</span>, a sleek <span className="text-yellow-500 font-medium">dark/light mode toggle</span>, a collaborative <span className="text-orange-300 font-medium">community forum</span>, and an intelligent <span className="text-orange-500 font-medium">chatbot assistant</span> for user support and guidance.
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

            {/* Project 2 - LangBridge*/}
            <div 
              ref={project2Ref} 
              className="bg-zinc-950 rounded-xl card-border overflow-hidden shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-zinc-900"
            >
              <div className="h-52 bg-gradient-to-r from-blue-400 to-cyan-500 flex items-center justify-center overflow-hidden">
                <img 
                  src="/images/langbridge.png" 
                  alt="Langbridge Project" 
                  className="object-cover w-full h-full transform hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <a 
                  href="https://langbridge-4c3e.onrender.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-2xl font-bold bg-gradient-to-r from-green-600 via-lime-400 to-green-700 text-transparent bg-clip-text hover:underline"
                >
                  LangBridge - Chat and Video Calling Website
                </a>
                <p className="text-gray-300 mt-4">
                  LangBridge empowers users to master new languages through <span className="text-lime-600 font-medium">authentic conversations</span> with native speakers. It features <span className="text-lime-400 font-medium">text chat</span>, <span className="text-lime-600 font-medium">video calls</span>, and a <span className="text-green-500 font-medium">friends system</span>, along with over <span className="text-green-700 font-medium">30 customizable UI themes</span>. Designed with a clean and responsive interface to make language learning engaging and seamless.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-cyan-900/40 text-cyan-300 rounded-full text-xs">React.js</span>
                  <span className="px-3 py-1 bg-blue-900/40 text-blue-300    rounded-full text-xs">Tailwind CSS</span>
                  <span className="px-3 py-1 bg-yellow-900/40 text-yellow-300 rounded-full text-xs">Stream Chat</span>
                  <span className="px-3 py-1 bg-green-900/40 text-green-300 rounded-full text-xs">Node.js</span>
                  <span className="px-3 py-1 bg-blue-900/40 text-blue-300 rounded-full text-xs">Express</span>
                  <span className="px-3 py-1 bg-yellow-900/40 text-yellow-300 rounded-full text-xs">TanStack Query</span>
                </div>
              </div>
            </div>

            {/* Project 3 - Real Time Tracking App */}
            <div 
              ref={project3Ref} 
              className="bg-zinc-950 rounded-xl card-border overflow-hidden shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-zinc-900"
            >
              <div className="h-52 bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center overflow-hidden">
                <img 
                  src="/images/Map.png" 
                  alt="Real Time Tracking Project" 
                  className="object-cover w-full h-full transform hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <a 
                  href="https://real-time-tracking-app-8ijl.onrender.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-500 text-transparent bg-clip-text hover:underline"
                >
                  Real Time Tracking App
                </a>
                <p className="text-gray-300 mt-4">
                  A real-time location sharing application featuring <span className="text-green-400 font-medium">GPS tracking</span> using <code className="text-blue-300">navigator.geolocation</code>, <span className="text-purple-400 font-medium">live updates</span> powered by <code className="text-yellow-300">Socket.IO</code>, and an <span className="text-emerald-400 font-medium">interactive map interface</span> built with <code className="text-green-300">Leaflet/Mapbox</code>. Supports <span className="text-pink-400 font-medium">multi-user tracking</span> and seamless real-time communication.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-blue-900/40 text-blue-300 rounded-full text-xs">EJS</span>
                  <span className="px-3 py-1 bg-yellow-900/40 text-yellow-300 rounded-full text-xs">JavaScript</span>
                  <span className="px-3 py-1 bg-green-900/40 text-green-300 rounded-full text-xs">Leaflet</span>
                  <span className="px-3 py-1 bg-purple-900/40 text-purple-300 rounded-full text-xs">Node.js</span>
                  <span className="px-3 py-1 bg-red-900/40 text-red-300 rounded-full text-xs">Socket.IO</span>
                </div>
              </div>
            </div>

            {/* Project 4 - VirtualR */}
            <div 
              ref={project4Ref} 
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
                  className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-500 text-transparent bg-clip-text hover:underline"
                >
                  Virtual Reality - Landing Page
                </a>
                <p className="text-gray-300 mt-4">
                  An immersive landing page built for showcasing <span className="text-purple-400 font-medium">VR technology</span>, enriched with <span className="text-blue-400 font-medium">parallax scrolling effects</span>, <span className="text-green-400 font-medium">smooth GSAP animations</span>, and a modern aesthetic to deliver a dynamic and engaging user experience.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-cyan-900/40 text-cyan-300 rounded-full text-xs">React.js</span>
                  <span className="px-3 py-1 bg-blue-900/40 text-blue-300 rounded-full text-xs">Tailwind CSS</span>
                  <span className="px-3 py-1 bg-purple-900/40 text-purple-300 rounded-full text-xs">GSAP</span>
                </div>
              </div>
            </div>

            {/* Project 5 - Spiderman */}
            <div 
              ref={project5Ref} 
              className="bg-zinc-950 rounded-xl card-border overflow-hidden shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-zinc-900"
            >
              <div className="h-52 bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center overflow-hidden">
                <img 
                  src="/images/spiderman.png" 
                  alt="Spiderman Landing Page Project" 
                  className="object-cover w-full h-full transform hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <a 
                  href="https://spiderman-landing-page.onrender.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 text-transparent bg-clip-text hover:underline"
                >
                  The Amazing Spider-Man 2 - Landing Page
                </a>
                <p className="text-gray-300 mt-4">
                  A <span className="text-orange-400 font-medium">high-impact, interactive, and responsive website</span> crafted to showcase a conceptual <span className="text-red-600 font-medium">Spider-Man-themed game</span>. Built entirely with <code className="text-yellow-300">HTML</code>, <code className="text-blue-400">CSS</code>, and <code className="text-green-400">JavaScript</code>, it captures the essence of the Spider-Verse through a sleek, cinematic design and engaging user experience.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-blue-900/40 text-cyan-300 rounded-full text-xs">Html</span>
                  <span className="px-3 py-1 bg-green-900/40 text-green-300 rounded-full text-xs">CSS</span>
                  <span className="px-3 py-1 bg-purple-900/40 text-purple-300 rounded-full text-xs">Javascript</span>
                </div>
              </div>
            </div>

            {/* More Projects Coming Soon */}
            <div className="bg-zinc-950 rounded-xl card-border flex flex-col items-center justify-center text-center shadow-xl p-6 hover:bg-zinc-900 transition duration-300">
              <h3 className="text-2xl font-bold text-white mb-2">
                🚧 More Projects Coming Soon!
              </h3>
              <p className="text-gray-400 text-sm mb-4 max-w-xs">
                I'm always working on something exciting. Check out more of my repositories and side projects on GitHub.
              </p>
              <a
                href="https://github.com/Sayan0361"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 mt-2 text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full hover:scale-105 transform transition duration-300"
              >
                Visit My GitHub
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
