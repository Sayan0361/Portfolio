import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      <div
        className="group relative flex flex-wrap items-center justify-between gap-4 py-8 transition-all duration-300 hover:bg-white/5 hover:rounded-xl hover:px-4 sm:py-10"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-400/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="flex-1 min-w-[60%]">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-lime-400 via-white to-green-500 text-transparent bg-clip-text hover:underline md:text-3xl">
            {title}
          </h3>
          <div className="flex flex-wrap gap-3 mt-3 text-sand">
            {tags.map((tag) => (
              <span 
                key={tag.id} 
                className="px-3 py-1 text-xs rounded-full bg-white/10 backdrop-blur-sm md:text-sm"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-2 px-4 py-2 transition-all duration-300 rounded-lg cursor-pointer hover-animation bg-white/5 hover:bg-white/10 hover:gap-3"
          aria-label={`Read more about ${title}`}
        >
          <span className="text-sm font-medium md:text-base">Read More</span>
          <img 
            src="assets/arrow-right.svg" 
            className="w-4 transition-all duration-300 group-hover:translate-x-1" 
            alt="" 
          />
        </button>
      </div>

      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-700/50 to-transparent group-hover:via-green-400/30 transition-all duration-300" />

      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;