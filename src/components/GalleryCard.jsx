import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function GalleryCard({ cards }) {
  const navigate = useNavigate();

  const [animationPlayState, setAnimationPlayState] = useState("running");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleCardClick = (cardId) => {
    navigate(`/testimony?id=${cardId}`);
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setAnimationPlayState("paused");
    }

    const animationName = "scrollAnimation";
    const styleSheet = document.createElement("style");
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

  const handleMouseEnter = (index) => {
    setAnimationPlayState("paused");
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setAnimationPlayState("running");
    setHoveredIndex(null);
  };

  return (
    <div className="relative pt-5 pb-4 w-full overflow-hidden">
      <div
        style={{
          display: "flex",
          gap: "20px",
          animation: `scrollAnimation ${animationDuration}s linear infinite`,
          animationPlayState: animationPlayState,
        }}
      >
        {[...cards, ...cards].map((card, index) => (
          <div
            key={`${card.id}-${index}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleCardClick(card.id)}
            className="relative flex flex-col shrink-0 w-36 h-48 rounded-md shadow-md bg-white"
            style={{
              transform: hoveredIndex === index ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.3s ease",
              zIndex: hoveredIndex === index ? 1 : 0,
            }}
          >
            <div className="h-36 rounded-t-md overflow-hidden">
              <img
                src={card.photo}
                alt={card.name}
                className="w-full h-full object-cover"
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
        className="absolute top-0 right-0 bottom-0 left-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, #E3E4E8 0%, rgba(227,228,232,0) 10%, rgba(227,228,232,0) 90%, #E3E4E8 100%)",
        }}
      ></div>
    </div>
  );
}

export default GalleryCard;
