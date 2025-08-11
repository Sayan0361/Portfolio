import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";
import TitleHeader from "../components/TitleHeader";
const Projects = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { damping: 10, stiffness: 50 });
    const springY = useSpring(y, { damping: 10, stiffness: 50 });
    const handleMouseMove = (e) => {
        x.set(e.clientX + 20);
        y.set(e.clientY + 20);
    };
    const [preview, setPreview] = useState(null);
    return (
        <section
            onMouseMove={handleMouseMove}
            className="py-20 bg-black relative overflow-hidden"
        >
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
                <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
                {myProjects.map((project) => (
                    <Project key={project.id} {...project} setPreview={setPreview} />
                ))}
                {preview && (
                    <motion.img
                    className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
                    src={preview}
                    style={{ x: springX, y: springY }}
                    />
                )}
            </div>
        </section>
    );
};

export default Projects;