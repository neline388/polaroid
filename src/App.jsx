import Sidebar from "./components/Sidebar";
import HeroSection from "./components/HeroSection";
import SettingsSection from "./components/SettingsSection";
import IntroSection from "./components/IntroSection";
import HeroImage from "./components/HeroImage";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="brand">
        NEGAR LALEH
      </div>
      <a
        href="/negarlaleh-resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-button"
      >
        Resume
      </a>
      <Sidebar />
      <HeroImage />
      <IntroSection />
      <HeroSection />
      <SettingsSection />
    </div>
  );
}

export default App;
