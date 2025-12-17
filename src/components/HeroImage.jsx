import { useEffect, useState } from "react";
import "./HeroImage.css";

const clamp = (v, min = 0, max = 1) => Math.min(Math.max(v, min), max);
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

const HeroImage = () => {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  const [progress, setProgress] = useState(0);
  const [dockY, setDockY] = useState(null);
  const [isDocked, setIsDocked] = useState(false);

  useEffect(() => {
    if (isMobile) return;

    const slot = document.getElementById("hero-image-slot");
    if (!slot) return;

    const rect = slot.getBoundingClientRect();
    setDockY(rect.top + window.scrollY);
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;

    const onScroll = () => {
      const vh = window.innerHeight;
      const y = window.scrollY;

      const start = vh * 0.2;
      const end = vh * 0.9;

      const raw = (y - start) / (end - start);
      const clamped = clamp(raw);
      setProgress(clamped);

      if (dockY !== null && y >= dockY - vh * 0.5) {
        setIsDocked(true);
      } else {
        setIsDocked(false);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [dockY, isMobile]);

  const eased = easeOutCubic(progress);

  if (isMobile) {
    return (
      <div className="hero-image mobile">
        <img src="/polaroid/images/camera.png" alt="Camera"/>
      </div>
    );
  }

  return (
    <div
      className="hero-image"
      style={{
        position: isDocked ? "absolute" : "fixed",
        top: isDocked ? dockY : "25%",
        left: "60%",
        transform: isDocked
          ? "translate(-50%, 0)"
          : `
              translate(-50%, ${eased * 200}px)
              rotate(${15 * (1 - eased)}deg)
              scale(${1.05 - eased * 0.05})
            `,
        filter: `blur(${3 * (1 - eased)}px)`,
      }}
    >
      <img src="/images/camera.png" alt="Camera" />
    </div>
  );
};

export default HeroImage;
