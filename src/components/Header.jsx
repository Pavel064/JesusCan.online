import { useState } from "react";
import { Link } from "react-router-dom";

import { MenuDrawer } from "./MenuDrawer";

import backgroundImage from "/bg-header.svg";
import logoImage from "/logo.svg";
import darkMode from "/dark-mode.svg";
import lang from "/lang.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const showDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className="relative w-full bg-cover bg-center md:h-[29vh]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-white bg-opacity-50 md:absolute md:bottom-0 md:w-full p-1">
        <div className="flex justify-between items-center h-full md:px-20 2xl:max-w-7xl mx-auto">
          <MenuDrawer showDrawer={showDrawer} isOpen={isOpen} />
          <Link to="/">
            <img className="h-10" src={logoImage} alt="Logo" />
          </Link>
          <div className="flex items-center gap-5">
            <img src={darkMode} alt="Dark Mode" className="w-6 h-6" />
            <img src={lang} alt="Lang" className="w-9 h-9" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
