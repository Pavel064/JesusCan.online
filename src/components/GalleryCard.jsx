import React, { useEffect, useState } from "react";

function GalleryCard({ cards }) {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    setIsAnimated(!prefersReducedMotion);

    const animationName = "scrollAnimation";
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    const keyFrames = `
      @keyframes ${animationName} {
        from { transform: translateX(0); }
        to { transform: translateX(-${(144 + 20) * cards.length}px); }
      }
    `;
    styleSheet.innerHTML = keyFrames;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, [cards.length]);

  const animationDuration = Math.round((144 + 20) * cards.length * 0.03);

  const scrollerInnerStyles = {
    display: "flex",
    gap: "20px",
    animation: isAnimated
      ? `scrollAnimation ${animationDuration}s linear infinite`
      : "none",
  };

  return (
    <div style={{ overflow: "hidden", width: "100%", position: "relative" }}>
      <div style={scrollerInnerStyles}>
        {[...cards, ...cards].map((card, index) => (
          <div
            key={`${card.id}-${index}`}
            className="flex flex-col w-36 h-48 rounded-md shadow-md bg-white"
            style={{ flexShrink: 0, width: "144px" }}
          >
            <div className="h-36 rounded-t-md overflow-hidden">
              <img
                src={card.photo}
                alt={card.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="text-xs text-center my-2 px-2 overflow-hidden">
              <p>{card.name}</p>
              <p>{card.placeOfBirth}</p>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          background:
            "linear-gradient(90deg, #E3E4E8 0%, rgba(227,228,232,0) 10%, rgba(227,228,232,0) 90%, #E3E4E8 100%)",

          pointerEvents: "none",
        }}
      ></div>
    </div>
  );
}

export default GalleryCard;
