import logoImage from "/logo.svg";

const Footer = () => {
  return (
    <div className="w-full h-36 bg-white flex items-center justify-between px-20 2xl:max-w-7xl mx-auto">
      <div className="w-1/5">
        <img className="h-10" src={logoImage} alt="Logo" />
      </div>

      <div className="w-4/5 flex justify-evenly uppercase text-2xl">
        <a href="/about">About Us</a>
        <a href="/">testimony</a>
        <a href="/read-gospel">Read the Gospel</a>
        <a href="/contact">Contact Us</a>
      </div>
    </div>
  );
};

export default Footer;
