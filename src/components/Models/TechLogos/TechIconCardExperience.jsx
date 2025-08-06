import { useMediaQuery } from "react-responsive";
import TechIcon from "./TechIcon";
import TechIcon2D from "./TechIcon2D";

const TechIconCardExperience = ({ model }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <>
      {isMobile ? (
        <TechIcon2D imagePath={model.imagePath} name={model.name} />
      ) : (
        <TechIcon model={model} />
      )}
    </>
  );
};

export default TechIconCardExperience;