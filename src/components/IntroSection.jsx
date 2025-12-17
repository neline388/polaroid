import "./IntroSection.css";

const IntroSection = () => {
  return (
    <section id="home" className="page-section intro-section">
      <h1 className="giant-title">
        UNLIMITED<br />
        <span className="text-wrap">
          PICTURES
          <img
            src="/polaroid/images/polaroiddrawing.png"
            alt="drawing"
            className="overlap-image"
          />
        </span>
      </h1>
    </section>
  );
};

export default IntroSection;
