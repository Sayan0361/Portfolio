import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TitleHeader from "../components/TitleHeader";
import TechIconCardExperience from "../components/Models/TechLogos/TechIconCardExperience";
import { techStackIcons } from "../constants";
import { useMediaQuery } from "react-responsive";

const TechStack = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" }); 
  useGSAP(() => {
    if(isMobile) return; 
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
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <TechIconCardExperience model={techStackIcon} />
                </div>
                
                <div className="padding-x w-full">
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