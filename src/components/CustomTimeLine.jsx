import React, { useState } from "react";
import Button from "./Button";
import GalleryCard from "./GalleryCard";

import mariia from "/mariia-card.png";
import pavel from "/pavel-card.jpg";
import oleg from "/oleg-card.jpg";
import def from "/def-card.jpg";

const cards = [
  { id: 1, photo: def, name: "1", placeOfBirth: "..." },
  {
    id: 2,
    photo: mariia,
    name: "Mary",
    placeOfBirth: "Kolos village, Russia",
  },
  { id: 3, photo: def, name: "...", placeOfBirth: "..." },
  { id: 4, photo: def, name: "...", placeOfBirth: "..." },
  { id: 5, photo: pavel, name: "Pavel", placeOfBirth: "Saratov, Russia" },
  { id: 6, photo: def, name: "...", placeOfBirth: "..." },
  { id: 7, photo: oleg, name: "Oleg", placeOfBirth: "Saratov, Russia" },
  { id: 8, photo: def, name: "...", placeOfBirth: "..." },
  { id: 9, photo: pavel, name: "Pavel", placeOfBirth: "Saratov, Russia" },
  { id: 10, photo: def, name: "...", placeOfBirth: "..." },
  { id: 11, photo: oleg, name: "Oleg", placeOfBirth: "Saratov, Russia" },
  { id: 12, photo: def, name: "...", placeOfBirth: "..." },
  { id: 13, photo: oleg, name: "13 Oleg", placeOfBirth: "Saratov, Russia" },
  { id: 14, photo: def, name: "14", placeOfBirth: "..." },
];

const timelineData = [
  {
    id: "1",
    title: "Nowadays",
    cards,
  },
  {
    id: "2",
    title: "20th century",
    cards,
  },
  {
    id: "3",
    title: "19th century",
    cards,
  },
  {
    id: "4",
    title: "18th century",
    cards,
  },
  {
    id: "5",
    title: "17th century",
    cards,
  },
];

const TimelineItem = ({ data, isOpen, toggleItem }) => {
  const dotClass = isOpen ? "bg-[#E85D04]" : "bg-[#264653]";
  const titleClass = isOpen ? "text-[#E85D04]" : "text-[#264653]";
  const contentClass = isOpen ? "max-h-screen" : "max-h-0";

  return (
    <div className="flex relative">
      <div className="h-16 flex items-center justify-center z-10">
        <button
          aria-expanded={isOpen ? "true" : "false"}
          className="focus:outline-none relative"
          onClick={toggleItem}
        >
          <svg
            className={`transform transition-transform ${isOpen ? "" : "-rotate-90"}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
          >
            <polyline
              points="7 10,12 15,17 10"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
            />
          </svg>
        </button>
        <span
          className={`absolute top-8 transform -translate-y-1/2 left-6 ml-2.5 w-4 h-4 ${dotClass} rounded-full`}
        />
      </div>
      <div className="flex-1 pl-4 w-full">
        <h3 className={`text-lg text-left mt-5 ml-10 ${titleClass}`}>
          {data.title}
        </h3>
        <div
          className={`overflow-hidden transition-all ease-in-out duration-200 ${contentClass}`}
        >
          <div className="mt-4 ml-16 text-gray-800">
            <GalleryCard cards={data.cards} />
          </div>
        </div>
      </div>
    </div>
  );
};

const CustomTimeLine = () => {
  const [openItems, setOpenItems] = useState({ [timelineData[0].id]: true });

  const handleExpandAll = () => {
    const allOpen = {};
    timelineData.forEach((item) => {
      allOpen[item.id] = true;
    });
    setOpenItems(allOpen);
  };

  const handleCollapseAll = () => {
    setOpenItems({});
  };

  return (
    <div className="bg-[#E3E4E8]">
      <div className="relative mx-auto md:px-20 2xl:max-w-7xl">
        <span className="absolute top-32 bottom-0 left-[120px] w-1 bg-[#264653]" />
        <div className="flex flex-row gap-4 pt-8">
          <Button label="Expand all" onClick={handleExpandAll} />
          <Button label="Collapse All" onClick={handleCollapseAll} />
        </div>
        <div className="mt-4">
          {timelineData.map((item) => (
            <TimelineItem
              key={item.id}
              data={item}
              isOpen={!!openItems[item.id]}
              toggleItem={() =>
                setOpenItems({ ...openItems, [item.id]: !openItems[item.id] })
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomTimeLine;
