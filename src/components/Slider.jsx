import React, { useState } from "react";
import arrDown from "/arrow-down.svg";
import arrUp from "/arrow-up.svg";
import defPhoto from "/Mariia.jpg";
import sin1 from "/Frame-7.svg";
import sin2 from "/Frame-17.svg";
import sin3 from "/Frame-18.svg";
import sin4 from "/Frame-28.svg";

const Slider = () => {
  const slides = [
    "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
    "https://images.unsplash.com/photo-1663123878927-ff25c560a682?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    "https://images.unsplash.com/photo-1662562655231-2dc528ca43b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1054&q=80",
    "https://images.unsplash.com/photo-1662217789896-08189e62e98c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
  ];
  const images = [sin1, sin2, sin3, sin4];

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const slidesCount = slides.length;
  // console.log(slidesCount);

  const changeSlide = (direction) => {
    setActiveSlideIndex((prevIndex) => {
      if (direction === "up") {
        return prevIndex === 0 ? slidesCount - 1 : prevIndex - 1;
      } else {
        // direction === 'down'
        return prevIndex === slidesCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <div className="flex w-full h-[680px]">
      <div className="w-1/3 flex h-full bg-[#264653]">
        <div className="flex flex-grow items-center justify-center">
          <div className="w-[360px] h-[500px] rounded-2xl relative">
            <img src={defPhoto} className="rounded-2xl w-full h-full" />
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                boxShadow: "inset 0 6px 8px 0 rgba(0, 0, 0, 0.35)",
                borderRadius: "inherit",
              }}
            />
          </div>
        </div>
        <div className="w-8 flex items-center justify-end">
          <button className="w-8 h-8 bg-white flex items-center justify-center rounded-l-2xl mt-8">
            <img src={arrDown} alt="arrow down" />
          </button>
        </div>
      </div>
      <div className="w-2/3 flex h-full bg-[#2A9D8F]">
        <div className="w-8 flex items-center justify-end">
          <button className="w-8 h-8 bg-white flex items-center justify-center rounded-r-2xl mb-8">
            <img src={arrUp} alt="arrow up" />
          </button>
        </div>
        <div className="flex flex-col flex-grow justify-center p-5 gap-7 text-xl">
          <div
            className="bg-white w-full  p-4 text-left rounded-2xl"
            style={{ boxShadow: "inset 0 6px 8px 0 rgba(0, 0, 0, 0.35)" }}
          >
            Name
          </div>
          <div
            className="bg-white w-full p-4 text-left rounded-2xl"
            style={{ boxShadow: "inset 0 6px 8px 0 rgba(0, 0, 0, 0.35)" }}
          >
            The plase you born in (country and city/town)
          </div>
          <div
            className="bg-white w-full p-4 text-left rounded-2xl"
            style={{ boxShadow: "inset 0 6px 8px 0 rgba(0, 0, 0, 0.35)" }}
          >
            Religious beliefs before accepting Christ
          </div>
          <div
            className="bg-white w-full p-4 rounded-2xl"
            style={{ boxShadow: "inset 0 6px 8px 0 rgba(0, 0, 0, 0.35)" }}
          >
            Sins of the past
          </div>
          <div className="flex justify-center items-center w-full my-4 gap-10">
            {images.map((image, index) => (
              <div
                key={index}
                className="w-[160px] h-[160px] rounded-2xl relative"
                style={{
                  boxShadow: "inset 0 6px 8px 0 rgba(0, 0, 0, 0.35)",
                }}
              >
                <img
                  src={image}
                  alt={`Image ${index}`}
                  className="rounded-2xl w-full h-full"
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    boxShadow: "inset 0 6px 8px 0 rgba(0, 0, 0, 0.35)",
                    borderRadius: "inherit",
                  }}
                />
              </div>
            ))}
          </div>

          <div
            className="bg-white w-full p-4 text-left rounded-2xl"
            style={{ boxShadow: "inset 0 6px 8px 0 rgba(0, 0, 0, 0.35)" }}
          >
            Year of Acceptance of Christ
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
