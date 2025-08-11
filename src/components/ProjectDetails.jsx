import { motion } from "framer-motion";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center w-full h-full p-4 overflow-y-auto backdrop-blur-sm">
      <motion.div
        className="relative w-full max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      >
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-3 right-3 md:top-5 md:right-5 bg-midnight/80 hover:bg-gray-500 transition-colors duration-200"
          aria-label="Close modal"
        >
          <img src="assets/close.svg" className="w-5 h-5 md:w-6 md:h-6" alt="Close" />
        </button>
        
        <img 
          src={image} 
          alt={title} 
          className="object-cover w-full h-48 md:h-64 rounded-t-2xl" 
        />
        
        <div className="p-4 md:p-6">
          <h5 className="mb-2 text-xl md:text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 text-sm md:text-base font-normal text-neutral-400">{description}</p>
          
          {subDescription.map((subDesc, index) => (
            <p 
              key={index} 
              className="mb-3 text-sm md:text-base font-normal text-neutral-400"
            >
              {subDesc}
            </p>
          ))}
          
          <div className="flex flex-col gap-4 mt-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg w-8 h-8 md:w-10 md:h-10 hover-animation"
                />
              ))}
            </div>
            
            <a 
              href={href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm md:text-base font-medium cursor-pointer hover-animation text-white"
            >
              View Project
              <img src="assets/arrow-up.svg" className="w-3 h-3 md:w-4 md:h-4" alt="" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;