import backgroundImage from "/bg-header.svg";
import logoImage from "/logo.svg";
import darkMode from "/dark-mode.svg";
import lang from "/lang.svg";
import { MenuDrawer } from "./MenuDrawer";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const showDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      // className="relative w-full md:h-40 2xl:h-[380px] bg-cover bg-center"
      className="relative w-full bg-cover bg-center md:h-[30vh]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="p-5 bg-white bg-opacity-50 md:absolute md:bottom-0 md:w-full md:h-16">
        <div className="flex justify-between items-center h-full md:px-20 2xl:max-w-7xl mx-auto">
          <MenuDrawer showDrawer={showDrawer} isOpen={isOpen} />

          <img className="h-10" src={logoImage} alt="Logo" />

          <div className="flex gap-5">
            <img src={darkMode} alt="Dark Mode" className="w-9 h-9" />
            <img src={lang} alt="Lang" className="w-9 h-9" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
