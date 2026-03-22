import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import TitleHeader from '../components/TitleHeader';
import { features } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const CodeShowcase = () => {
    // Mouse tracking logic for the 3D tilt effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const DotNetIcon = () => (
        <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-blue-400 animate-pulse"
        >
            <path d="M7 8L3 12L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2" />
        </svg>
    );
    // GSAP Entrance Animation
    useGSAP(() => {
        gsap.from('.code-card-wrapper', {
            scrollTrigger: {
                trigger: '.code-card-wrapper',
                start: 'top 85%',
            },
            opacity: 0,
            x: -50,
            duration: 1,
            ease: 'power2.out',
        });

        gsap.from('.feature-item', {
            scrollTrigger: {
                trigger: '.feature-item',
                start: 'top 85%',
            },
            opacity: 0,
            x: 50,
            duration: 1,
            stagger: 0.2,
            ease: 'power2.out',
        });
    }, []);

    return (
        <section id="work" className="py-24 bg-black relative overflow-hidden flex flex-col items-center">
            {/* Background Decorative Blurs (Consistent with Projects section) */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-blue-600/20 filter blur-[120px]"></div>
                <div className="absolute bottom-1/4 left-0 w-60 h-60 rounded-full bg-purple-600/20 filter blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
                <div className="text-center mb-16">
                    <TitleHeader
                        title="Inside My Workspace"
                        sub="🚀 Code Philosophy"
                    />
                    <p className="text-gray-400 mt-4 md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
                        Moving beyond the basics to understand how enterprise systems are built.
                        Currently focused on writing clean, organized code and learning the
                        architectural patterns used in professional software development.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT: The Interactive Image Card */}
                    <div className="code-card-wrapper">
                        <motion.div
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                            className="relative group cursor-crosshair"
                        >
                            {/* Animated Outer Glow */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-1000"></div>

                            <div className="relative bg-[#0d1117] border border-white/10 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500">
                                <img
                                    src="/assets/coding-pov.png"
                                    alt="C# Service Architecture"
                                    className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity"
                                />

                                {/* Inner Hover Overlay */}
                                <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT: Technical Highlights */}
                    <div className="flex flex-col gap-10">
                        {features.map((f, i) => (
                            <div key={i} className="feature-item group flex gap-6 items-start">
                                <div className="text-3xl filter grayscale group-hover:grayscale-0 transition-all duration-300">
                                    {f.icon}
                                </div>
                                <div className="border-l border-white/10 pl-6 group-hover:border-blue-500 transition-colors duration-500">
                                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                        {f.title}
                                    </h3>
                                    <p className="text-gray-400 mt-2 font-light leading-relaxed text-sm md:text-base">
                                        {f.desc}
                                    </p>
                                </div>
                            </div>
                        ))}

                        {/* Terminal-style Footer */}
                        <div className="mt-4 p-4 rounded-xl bg-blue-500/5 border border-blue-500/20 text-xs md:text-sm text-blue-300 font-mono flex items-center gap-4 group/footer">
                            <DotNetIcon />
                            <span className="opacity-80 group-hover/footer:opacity-100 transition-opacity">
                                <span className="text-blue-500/60 mr-2">root@sayansen:~$</span>
                                current_focus --stack "ASP.NET MVC & SQL Server"
                            </span>
                        </div>
                    </div>
                </div>

                {/* Bottom Gradient Line (Mirroring Projects section) */}
                <div className="bg-gradient-to-r from-transparent via-neutral-800 to-transparent mt-24 h-[1px] w-full" />
            </div>
        </section>
    );
};

export default CodeShowcase;