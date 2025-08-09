import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useMediaQuery } from 'react-responsive';
import TitleHeader from '../components/TitleHeader';
import ShinyText from '../components/ShinyText';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);
  const project4Ref = useRef(null);
  const project5Ref = useRef(null);
  const project6Ref = useRef(null);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  
  useGSAP(() => {
    if (isMobile) return; // Skip animation on mobile devices

    const cards = [
      project1Ref.current, 
      project2Ref.current, 
      project3Ref.current,
      project4Ref.current,
      project5Ref.current,
      project6Ref.current
    ];

    // Animate each project card with staggered effects
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { 
          y: 80, 
          opacity: 0,
          scale: 0.95
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: 0.15 * (index + 1),
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=150',
            toggleActions: 'play none none none'
          },
        }
      );
    });
    
    // Fade in the entire section with a subtle scale effect
    gsap.fromTo(
      sectionRef.current,
      { 
        opacity: 0,
        scale: 0.98
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: 'power3.out',
      }
    );

    // Add hover animations for all cards
    cards.forEach(card => {
      if (!card) return;
      
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -10,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });
  }, [isMobile]);

  return (
    <section id="work" ref={sectionRef} className="py-20 bg-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-blue-500 filter blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-purple-500 filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative">
        <TitleHeader
          title="My Projects"
          sub="🚀 Showcasing My Work"
        />
        <p className="text-gray-400 mt-4 text-center md:text-lg max-w-2xl mx-auto mb-16 font-light leading-relaxed">
          Here's a collection of my recent work. Each project represents a unique challenge and solution.
        </p>
        
        <div className="w-full mt-10">
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 - Job Portal */}
            <div 
              ref={project1Ref} 
              className="group bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl border border-zinc-800/50 overflow-hidden shadow-2xl transition-all duration-300 hover:border-zinc-700 hover:shadow-blue-900/20 hover:-translate-y-2"
            >
              <div className="h-60 bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src="/images/jobportal.png" 
                  alt="HireMe Job Portal" 
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href="https://github.com/Sayan0361/JobPortal" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-4 py-2 bg-black/70 backdrop-blur-sm rounded-full text-white hover:bg-white hover:text-black transition-colors"
                  >
                    <span>View Project</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <a 
                    href="https://github.com/Sayan0361/JobPortal" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-teal-500 to-blue-500 text-transparent bg-clip-text hover:underline"
                  >
                    HireMe - Job Portal
                  </a>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-900/40 text-blue-300">
                    Full Stack
                  </span>
                </div>
                <p className="text-gray-300 mt-3 text-sm leading-relaxed">
                  A feature-rich job platform that bridges the gap between <span className="text-green-400 font-medium">employers</span> and <span className="text-blue-400 font-medium">job seekers</span>. It offers <span className="text-yellow-300 font-medium">secure authentication</span>, a sleek <span className="text-yellow-500 font-medium">dark/light mode</span>, a collaborative <span className="text-orange-300 font-medium">community forum</span>, and an intelligent <span className="text-orange-500 font-medium">chatbot assistant</span>.
                </p>

                <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-zinc-800">
                  <span className="px-3 py-1 bg-cyan-900/40 text-cyan-300 rounded-full text-xs font-mono">React.js</span>
                  <span className="px-3 py-1 bg-blue-900/40 text-blue-300 rounded-full text-xs font-mono">Tailwind</span>
                  <span className="px-3 py-1 bg-green-900/40 text-green-300 rounded-full text-xs font-mono">Node.js</span>
                  <span className="px-3 py-1 bg-yellow-400/50 text-yellow-300 rounded-full text-xs font-mono">Express</span>
                  <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs font-mono">MongoDB</span>
                </div>
              </div>
            </div>

            {/* Project 6 - CreationSuite.ai */}
            <div 
              ref={project6Ref} 
              className="group bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl border border-zinc-800/50 overflow-hidden shadow-2xl transition-all duration-300 hover:border-zinc-700 hover:shadow-blue-900/20 hover:-translate-y-2"
            >
              <div className="h-60 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src="/images/creationsuite.png" 
                  alt="CreationSuite.ai" 
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href="https://creation-suite-ai.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-4 py-2 bg-black/70 backdrop-blur-sm rounded-full text-white hover:bg-white hover:text-black transition-colors"
                  >
                    <span>View Project</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <a 
                    href="https://creation-suite-ai.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-2xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-transparent bg-clip-text hover:underline"
                  >
                    CreationSuite.ai
                  </a>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-900/40 text-purple-300">
                    AI SaaS
                  </span>
                </div>
                <p className="text-gray-300 mt-3 text-sm leading-relaxed">
                  <span className="text-cyan-400 font-semibold">CreationSuite.ai</span> is an <span className="text-pink-400 font-medium">AI-powered SaaS platform</span> offering smart tools for content generation, resume review, and visual creativity. Integrated with cutting-edge AI APIs like <code className="text-purple-300">Gemini</code> & <code className="text-green-300">Clipdrop</code>.
                </p>

                <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-zinc-800">
                  <span className="px-3 py-1 bg-blue-900/40 text-cyan-300 rounded-full text-xs font-mono">React.js</span>
                  <span className="px-3 py-1 bg-green-900/40 text-green-300 rounded-full text-xs font-mono">Tailwind</span>
                  <span className="px-3 py-1 bg-indigo-900/40 text-indigo-300 rounded-full text-xs font-mono">Node.js</span>
                  <span className="px-3 py-1 bg-purple-900/40 text-purple-300 rounded-full text-xs font-mono">PostgreSQL</span>
                  <span className="px-3 py-1 bg-pink-900/40 text-pink-300 rounded-full text-xs font-mono">AI APIs</span>
                </div>
              </div>
            </div>

            {/* Project 2 - LangBridge*/}
            <div 
              ref={project2Ref} 
              className="group bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl border border-zinc-800/50 overflow-hidden shadow-2xl transition-all duration-300 hover:border-zinc-700 hover:shadow-green-900/20 hover:-translate-y-2"
            >
              <div className="h-60 bg-gradient-to-r from-blue-400 to-cyan-500 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src="/images/langbridge.png" 
                  alt="Langbridge Project" 
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href="https://langbridge-4c3e.onrender.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-4 py-2 bg-black/70 backdrop-blur-sm rounded-full text-white hover:bg-white hover:text-black transition-colors"
                  >
                    <span>View Project</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <a 
                    href="https://langbridge-4c3e.onrender.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-2xl font-bold bg-gradient-to-r from-green-600 via-lime-400 to-green-700 text-transparent bg-clip-text hover:underline"
                  >
                    LangBridge
                  </a>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-900/40 text-green-300">
                    Language Learning
                  </span>
                </div>
                <p className="text-gray-300 mt-3 text-sm leading-relaxed">
                  LangBridge empowers users to master new languages through <span className="text-lime-600 font-medium">authentic conversations</span> with native speakers. Features <span className="text-lime-400 font-medium">text chat</span>, <span className="text-lime-600 font-medium">video calls</span>, and over <span className="text-green-500 font-medium">30 customizable UI themes</span>.
                </p>

                <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-zinc-800">
                  <span className="px-3 py-1 bg-cyan-900/40 text-cyan-300 rounded-full text-xs font-mono">React.js</span>
                  <span className="px-3 py-1 bg-blue-900/40 text-blue-300 rounded-full text-xs font-mono">Tailwind</span>
                  <span className="px-3 py-1 bg-yellow-900/40 text-yellow-300 rounded-full text-xs font-mono">Stream Chat</span>
                  <span className="px-3 py-1 bg-green-900/40 text-green-300 rounded-full text-xs font-mono">Node.js</span>
                  <span className="px-3 py-1 bg-blue-900/40 text-blue-300 rounded-full text-xs font-mono">Express</span>
                  <span className="px-3 py-1 bg-yellow-900/40 text-yellow-300 rounded-full text-xs font-mono">TanStack</span>
                </div>
              </div>
            </div>

            {/* Project 3 - Real Time Tracking App */}
            <div 
              ref={project3Ref} 
              className="group bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl border border-zinc-800/50 overflow-hidden shadow-2xl transition-all duration-300 hover:border-zinc-700 hover:shadow-emerald-900/20 hover:-translate-y-2"
            >
              <div className="h-60 bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src="/images/Map.png" 
                  alt="Real Time Tracking Project" 
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href="https://real-time-tracking-app-8ijl.onrender.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-4 py-2 bg-black/70 backdrop-blur-sm rounded-full text-white hover:bg-white hover:text-black transition-colors"
                  >
                    <span>View Project</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <a 
                    href="https://real-time-tracking-app-8ijl.onrender.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-500 text-transparent bg-clip-text hover:underline"
                  >
                    Real Time Tracking
                  </a>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-900/40 text-emerald-300">
                    Location Sharing
                  </span>
                </div>
                <p className="text-gray-300 mt-3 text-sm leading-relaxed">
                  A real-time location sharing app featuring <span className="text-green-400 font-medium">GPS tracking</span>, <span className="text-purple-400 font-medium">live updates</span> via <code className="text-yellow-300">Socket.IO</code>, and an <span className="text-emerald-400 font-medium">interactive map</span> with <code className="text-green-300">Leaflet/Mapbox</code>.
                </p>

                <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-zinc-800">
                  <span className="px-3 py-1 bg-blue-900/40 text-blue-300 rounded-full text-xs font-mono">EJS</span>
                  <span className="px-3 py-1 bg-yellow-900/40 text-yellow-300 rounded-full text-xs font-mono">JavaScript</span>
                  <span className="px-3 py-1 bg-green-900/40 text-green-300 rounded-full text-xs font-mono">Leaflet</span>
                  <span className="px-3 py-1 bg-purple-900/40 text-purple-300 rounded-full text-xs font-mono">Node.js</span>
                  <span className="px-3 py-1 bg-red-900/40 text-red-300 rounded-full text-xs font-mono">Socket.IO</span>
                </div>
              </div>
            </div>

            {/* Project 4 - VirtualR */}
            <div 
              ref={project4Ref} 
              className="group bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl border border-zinc-800/50 overflow-hidden shadow-2xl transition-all duration-300 hover:border-zinc-700 hover:shadow-cyan-900/20 hover:-translate-y-2"
            >
              <div className="h-60 bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src="/images/virtualr.png" 
                  alt="Virtual Reality Project" 
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href="https://virtualr-2-296115l6d-sayan0361s-projects.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-4 py-2 bg-black/70 backdrop-blur-sm rounded-full text-white hover:bg-white hover:text-black transition-colors"
                  >
                    <span>View Project</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <a 
                    href="https://virtualr-2-296115l6d-sayan0361s-projects.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-500 text-transparent bg-clip-text hover:underline"
                  >
                    Virtual Reality
                  </a>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-900/40 text-cyan-300">
                    Landing Page
                  </span>
                </div>
                <p className="text-gray-300 mt-3 text-sm leading-relaxed">
                  An immersive landing page showcasing <span className="text-purple-400 font-medium">VR technology</span>, with <span className="text-blue-400 font-medium">parallax effects</span>, <span className="text-green-400 font-medium">GSAP animations</span>, and a modern aesthetic for engaging user experience.
                </p>

                <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-zinc-800">
                  <span className="px-3 py-1 bg-cyan-900/40 text-cyan-300 rounded-full text-xs font-mono">React.js</span>
                  <span className="px-3 py-1 bg-blue-900/40 text-blue-300 rounded-full text-xs font-mono">Tailwind</span>
                  <span className="px-3 py-1 bg-purple-900/40 text-purple-300 rounded-full text-xs font-mono">GSAP</span>
                </div>
              </div>
            </div>

            {/* Project 5 - Spiderman */}
            <div 
              ref={project5Ref} 
              className="group bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl border border-zinc-800/50 overflow-hidden shadow-2xl transition-all duration-300 hover:border-zinc-700 hover:shadow-red-900/20 hover:-translate-y-2"
            >
              <div className="h-60 bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src="/images/spiderman.png" 
                  alt="Spiderman Landing Page Project" 
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href="https://spiderman-landing-page.onrender.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-4 py-2 bg-black/70 backdrop-blur-sm rounded-full text-white hover:bg-white hover:text-black transition-colors"
                  >
                    <span>View Project</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <a 
                    href="https://spiderman-landing-page.onrender.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 text-transparent bg-clip-text hover:underline"
                  >
                    The Amazing Spider-Man 2
                  </a>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-900/40 text-red-300">
                    Landing Page
                  </span>
                </div>
                <p className="text-gray-300 mt-3 text-sm leading-relaxed">
                  A <span className="text-orange-400 font-medium">high-impact, interactive website</span> for a conceptual <span className="text-red-600 font-medium">Spider-Man game</span>. Built with <code className="text-yellow-300">HTML</code>, <code className="text-blue-400">CSS</code>, and <code className="text-green-400">JavaScript</code> with cinematic design.
                </p>

                <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-zinc-800">
                  <span className="px-3 py-1 bg-blue-900/40 text-cyan-300 rounded-full text-xs font-mono">HTML</span>
                  <span className="px-3 py-1 bg-green-900/40 text-green-300 rounded-full text-xs font-mono">CSS</span>
                  <span className="px-3 py-1 bg-purple-900/40 text-purple-300 rounded-full text-xs font-mono">JavaScript</span>
                </div>
              </div>
            </div>

            {/* More Projects Coming Soon */}
            <div className="group bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl border border-zinc-800/50 overflow-hidden shadow-2xl transition-all duration-300 hover:border-zinc-700 hover:shadow-purple-900/20 hover:-translate-y-2 flex flex-col items-center justify-center text-center p-8 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  More Projects Coming Soon!
                </h3>
                <p className="text-gray-400 text-sm mb-6 max-w-xs mx-auto leading-relaxed">
                  I'm always working on new and exciting projects. Check back soon for updates or visit my GitHub to see what I'm currently building.
                </p>
                <a
                  href="https://github.com/Sayan0361"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-2.5 text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full hover:scale-105 transform transition duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/20"
                >
                  <span>Visit My GitHub</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;