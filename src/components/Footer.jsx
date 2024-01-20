import logoImage from "/logo.svg";

const Footer = () => {
  return (
    <div className="flex flex-col mx-auto w-full items-center my-4 px-2 md:flex-row md:px-20 md:justify-between 2xl:max-w-7xl cursor-pointer">
      <div className="md:w-1/5">
        <img className="h-10" src={logoImage} alt="Logo" />
      </div>

      <div className="flex flex-col uppercase lg:text-2xl pb-6 md:flex-row md:w-4/5 md:justify-evenly">
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
