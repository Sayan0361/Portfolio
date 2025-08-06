const TechIcon2D = ({ imagePath, name }) => {
  return (
    <img 
        src={imagePath}
        alt={name}
        className="w-12 h-12 object-contain"
        loading="lazy"
    />
  );
};

export default TechIcon2D;