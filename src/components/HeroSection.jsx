import TextContent from "./herosection/TextContent";
import HeroImage from "./HeroImage";
import RightSideCards from "./herosection/RightSideCards";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section id="about" className="page-section hero-section">
      <div className="hero-grid">
        <TextContent />
        <div id="hero-image-slot" />
        <RightSideCards />
      </div>
    </section>
  );
};

export default HeroSection;
