import backgroundImage from "/bg-header.svg";
import burger from "/burger.svg";
import logoImage from "/logo.svg";
import darkMode from "/dark-mode.svg";
import lang from "/lang.svg";

const Header = () => {
  return (
    <div
      className="relative w-full md:h-52 2xl:h-80 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="p-5 bg-white bg-opacity-50 md:absolute md:bottom-0 md:w-full md:h-16">
        <div className="flex justify-between items-center h-full md:px-20 2xl:max-w-7xl mx-auto">
          <img src={burger} alt="Menu" />

          <img className="h-10" src={logoImage} alt="Logo" />

          <div className="flex gap-5">
            <img src={darkMode} alt="Dark Mode" />
            <img src={lang} alt="Lang" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
