import logoImage from "/logo.svg";

const Footer = () => {
  return (
    <div className="w-full h-36 bg-white flex items-center justify-between px-20 2xl:max-w-7xl mx-auto cursor-pointer">
      <div className="w-1/5">
        <img className="h-10" src={logoImage} alt="Logo" />
      </div>

      <div className="w-4/5 flex justify-evenly uppercase text-2xl pb-6">
        <a
          className="border-0 rounded-lg flex items-center transition-all p-4 active:shadow-inner"
          href="/about"
        >
          About Us
        </a>
        <a
          className="border-0 rounded-lg flex items-center transition-all p-4 active:shadow-inner"
          href="/"
        >
          testimony
        </a>
        <a
          className="border-0 rounded-lg flex items-center transition-all p-4 active:shadow-inner"
          href="/read-gospel"
        >
          Read the Gospel
        </a>
        <a
          className="border-0 rounded-lg flex items-center transition-all p-4 active:shadow-inner"
          href="/contact"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Footer;
