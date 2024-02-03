import { Link } from "react-router-dom";

import logoImage from "/logo.svg";

const Footer = () => {
  return (
    <div className="flex flex-col mx-auto w-full items-center mt-4 px-2 md:flex-row md:px-20 md:justify-between 2xl:max-w-7xl cursor-pointer">
      <div className="md:w-1/5">
        <Link to="/">
          <img className="h-10" src={logoImage} alt="Logo" />
        </Link>
      </div>

      <div className="flex flex-col uppercase lg:text-2xl pb-6 md:flex-row md:w-4/5 md:justify-evenly">
        <Link
          className="border-0 rounded-lg flex items-center self-center transition-all p-4 active:shadow-inner"
          to="/about-us"
        >
          About Us
        </Link>
        <Link
          className="border-0 rounded-lg flex items-center self-center transition-all p-4 active:shadow-inner"
          to="/"
        >
          home
        </Link>
        <Link
          className="border-0 rounded-lg flex items-center self-center transition-all p-4 active:shadow-inner"
          to="/bible"
        >
          bible
        </Link>
        <Link
          className="border-0 rounded-lg flex items-center self-center transition-all p-4 active:shadow-inner"
          to="/contact-us"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Footer;
