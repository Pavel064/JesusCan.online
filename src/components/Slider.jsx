import React, { useState } from "react";
import arrDown from "/arrow-down.svg";
import arrUp from "/arrow-up.svg";
import defPhoto from "/Mariia.jpg";
import sin1 from "/Frame-7.svg";
import sin2 from "/Frame-17.svg";
import sin3 from "/Frame-18.svg";
import sin4 from "/Frame-28.svg";

const Slider = () => {
  const images = [sin1, sin2, sin3, sin4];

  return (
    <div className="bg-[#2A9D8F]">
      <div className="hidden md:flex h-auto mx-auto 2xl:max-w-7xl">
        <div className="w-1/3 flex bg-[#264653]">
          <div className="flex flex-grow items-center justify-center">
            <div className="rounded-2xl relative ml-16 mr-8">
              <img src={defPhoto} className="rounded-2xl" />
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
        <div className="w-2/3 flex bg-[#2A9D8F]">
          <div className="w-8 flex items-center justify-end">
            <button className="w-8 h-8 bg-white flex items-center justify-center rounded-r-2xl mb-8">
              <img src={arrUp} alt="arrow up" />
            </button>
          </div>
          <div className="flex flex-col flex-grow justify-center py-8 mr-16 ml-8 gap-7 xl:text-lg 2xl:text-xl">
            <div
              className="bg-white w-full text-left rounded-2xl p-3 2xl:p-4"
              style={{ boxShadow: "inset 0 6px 8px 0 rgba(0, 0, 0, 0.35)" }}
            >
              Name
            </div>
            <div
              className="bg-white w-full text-left rounded-2xl p-3 2xl:p-4"
              style={{ boxShadow: "inset 0 6px 8px 0 rgba(0, 0, 0, 0.35)" }}
            >
              The plase you born in (country and city/town)
            </div>
            <div
              className="bg-white w-full text-left rounded-2xl p-3 2xl:p-4"
              style={{ boxShadow: "inset 0 6px 8px 0 rgba(0, 0, 0, 0.35)" }}
            >
              Religious beliefs before accepting Christ
            </div>
            <div
              className="bg-white w-full rounded-2xl p-3 2xl:p-4"
              style={{ boxShadow: "inset 0 6px 8px 0 rgba(0, 0, 0, 0.35)" }}
            >
              Sins of the past
            </div>
            <div className="flex justify-center items-center w-full my-4 gap-10">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="rounded-2xl relative"
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
              className="bg-white w-full text-left rounded-2xl p-3 2xl:p-4"
              style={{ boxShadow: "inset 0 6px 8px 0 rgba(0, 0, 0, 0.35)" }}
            >
              Year of Acceptance of Christ
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-5 py-5 gap-5 md:hidden">
        <div className="rounded-2xl">
          <img src={defPhoto} className="rounded-2xl" />
        </div>
        <div
          className="bg-white w-full text-left rounded-2xl p-3"
          style={{ boxShadow: "inset 0 6px 8px 0 rgba(0, 0, 0, 0.35)" }}
        >
          Name
        </div>
        <div
          className="bg-white w-full text-left rounded-2xl p-3 2xl:p-4"
          style={{ boxShadow: "inset 0 6px 8px 0 rgba(0, 0, 0, 0.35)" }}
        >
          The plase you born in (country and city/town)
        </div>
        <div
          className="bg-white w-full text-left rounded-2xl p-3 2xl:p-4"
          style={{ boxShadow: "inset 0 6px 8px 0 rgba(0, 0, 0, 0.35)" }}
        >
          Religious beliefs before accepting Christ
        </div>
        <div
          className="bg-white w-full rounded-2xl p-3 2xl:p-4"
          style={{ boxShadow: "inset 0 6px 8px 0 rgba(0, 0, 0, 0.35)" }}
        >
          Sins of the past
        </div>
        <div className="flex flex-wrap justify-center items-center w-full my-4 gap-10">
          {images.map((image, index) => (
            <div
              key={index}
              className="rounded-2xl relative"
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
          className="bg-white w-full text-left rounded-2xl p-3 2xl:p-4"
          style={{ boxShadow: "inset 0 6px 8px 0 rgba(0, 0, 0, 0.35)" }}
        >
          Year of Acceptance of Christ
        </div>
      </div>
    </div>
  );
};

export default Slider;
