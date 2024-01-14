import backgroundImage from "/bg-header.svg";
import burger from "/burger.svg";
import logoImage from "/logo.svg";
import darkMode from "/dark-mode.svg";
import lang from "/lang.svg";

const Header = () => {
  return (
    <div
      className="relative w-full h-[350px] bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute bottom-0 w-full h-[70px] bg-white bg-opacity-50">
        <div className="flex justify-between items-center h-full px-20">
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
