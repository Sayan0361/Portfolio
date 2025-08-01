import { useRef, useCallback, useMemo } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { aboutCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const containerRef = useRef(null);
  const isMobile = useMediaQuery({ 
    query: "(max-width: 767px)",
    noSsr: true // Prevents hydration mismatch
  });
  const isTablet = useMediaQuery({ 
    query: "(min-width: 768px) and (max-width: 1023px)",
    noSsr: true
  });

  // Memoize animation configuration
  const animationConfig = useMemo(() => ({
    cardAnimation: {
      duration: isMobile ? 0.5 : 1,
      ease: isMobile ? "power1.out" : "power2.inOut",
    },
    textAnimation: {
      duration: isMobile ? 0.3 : 1,
      ease: isMobile ? "power1.out" : "power2.inOut",
    }
  }), [isMobile]);

  // Debounced scroll trigger update
  const handleScrollUpdate = useCallback((self) => {
    if (!isMobile) {
      gsap.to(".timeline", {
        scaleY: 1 - self.progress,
        duration: 0.1,
        ease: "none"
      });
    }
  }, [isMobile]);

  useGSAP(() => {
    if (isMobile) {
      // Simple fade-in for mobile to reduce performance impact
      gsap.fromTo(".mobile-fade-in", 
        { opacity: 0, y: 20 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          stagger: 0.1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: ".mobile-fade-in",
            start: "top 90%",
            once: true // Fire only once for better performance
          }
        }
      );
      return;
    }

    // Desktop animations with performance optimizations
    const cards = gsap.utils.toArray(".timeline-card");
    const texts = gsap.utils.toArray(".expText");

    // Batch animations for better performance
    cards.forEach((card, index) => {
      gsap.fromTo(card, 
        {
          xPercent: -100,
          opacity: 0,
        },
        {
          xPercent: 0,
          opacity: 1,
          ...animationConfig.cardAnimation,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            once: false,
            invalidateOnRefresh: true
          },
          delay: index * 0.1 // Stagger effect
        }
      );
    });

    // Timeline scaling animation
    ScrollTrigger.create({
      trigger: ".timeline",
      start: "top center",
      end: "70% center",
      onUpdate: handleScrollUpdate,
      invalidateOnRefresh: true
    });

    // Text animations
    texts.forEach((text, index) => {
      gsap.fromTo(text,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          ...animationConfig.textAnimation,
          scrollTrigger: {
            trigger: text,
            start: "top 70%",
            toggleActions: "play none none reverse",
            once: false,
            invalidateOnRefresh: true
          },
          delay: index * 0.05
        }
      );
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isMobile, animationConfig, handleScrollUpdate]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0 will-change-transform"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="About Me"
          sub="🧘‍♂️ My Journey, Mindset & Growth"
        />
        
        <div className="mt-20 md:mt-32 relative">
          <div className={`relative z-50 ${isMobile ? 'space-y-8' : 'xl:space-y-32 space-y-16'}`}>
            {aboutCards.map((card, index) => (
              <div 
                key={card.title} 
                className={`exp-card-wrapper ${isMobile ? 'mobile-fade-in' : 'timeline-card'}`}
              >
                {/* Mobile Layout */}
                {isMobile ? (
                  <div className="space-y-6">
                    <div className="w-full">
                      <GlowCard card={card}>
                        <div className="flex items-center justify-center h-full text-center text-lg font-semibold text-white px-4 py-3">
                          {card.subtitle}
                        </div>
                      </GlowCard>
                    </div>
                    
                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 shadow-lg flex-shrink-0" />
                        <div>
                          <h2 className="font-semibold text-xl text-white">{card.title}</h2>
                          <p className="text-sm text-gray-400">{card.date}</p>
                        </div>
                      </div>
                      
                      <ul className="space-y-3">
                        {card.points.map((point, pointIndex) => (
                          <li key={pointIndex} className="text-gray-300 text-sm leading-relaxed flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  /* Desktop Layout */
                  <>
                    <div className="xl:w-2/6 w-full mb-8 xl:mb-0">
                      <GlowCard card={card}>
                        <div className="flex items-center justify-center h-full text-center xl:text-xl text-lg font-semibold text-white px-4 py-6">
                          {card.subtitle}
                        </div>
                      </GlowCard>
                    </div>
                    
                    <div className="xl:w-4/6 w-full">
                      <div className="flex items-start">
                        <div className="timeline-wrapper hidden xl:block mr-8">
                          <div className="timeline w-0.5 h-32 bg-gradient-to-b from-blue-500 to-purple-600" />
                          <div className="gradient-line w-0.5 h-full bg-gray-700 opacity-30" />
                        </div>
                        
                        <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20 w-full">
                          <div className="timeline-logo flex-shrink-0">
                            <div className="w-12 h-12 xl:w-14 xl:h-14 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 shadow-lg" />
                          </div>
                          
                          <div className="flex-1">
                            <h1 className="font-semibold text-2xl xl:text-3xl text-white mb-2">{card.title}</h1>
                            <p className="mb-5 text-gray-400 text-sm xl:text-base">{card.date}</p>
                            
                            <ul className="space-y-4">
                              {card.points.map((point, pointIndex) => (
                                <li key={pointIndex} className="text-gray-300 text-base xl:text-lg leading-relaxed flex items-start gap-3">
                                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;