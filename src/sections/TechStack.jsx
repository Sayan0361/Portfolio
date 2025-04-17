import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import TechIconCardExperience from "../components/Models/TechLogos/TechIcon";
import { techStackIcons } from "../constants";
import { useMediaQuery } from "react-responsive";

const TechStack = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" }); // Check if the screen width is less than or equal to 767px
  useGSAP(() => {
    if(isMobile) return; // Skip animation on mobile devices
    gsap.fromTo(
      ".tech-card",
      {
        y: 50, 
        opacity: 0, 
      },
      {
        
        y: 0, 
        opacity: 1, 
        duration: 1, 
        ease: "power2.inOut",
        stagger: 0.2, 
        scrollTrigger: {
          trigger: "#skills", 
          start: "top center", 
        },
      }
    );
  });

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Key Tech Skills"
          sub="👨‍💻 How can I contribute to your project?"
        />
        <div className="tech-grid">
          {techStackIcons.map((techStackIcon) => (
            <div
              key={techStackIcon.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              {/* The tech-card-animated-bg div is used to create a background animation when the 
                  component is hovered. */}
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                {/* The tech-icon-wrapper div contains the TechIconCardExperience component, 
                    which renders the 3D model of the tech stack icon. */}
                <div className="tech-icon-wrapper">
                  <TechIconCardExperience model={techStackIcon} />
                </div>
                {/* The padding-x and w-full classes are used to add horizontal padding to the 
                    text and make it take up the full width of the component. */}
                <div className="padding-x w-full">
                  {/* The p tag contains the name of the tech stack icon. */}
                  <p>{techStackIcon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;