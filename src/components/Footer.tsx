import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import creaitionLogo from "../assets/images/creaition_logo.svg";
import { socialLinks } from "../data/creaitionData";

const Footer = () => {
  return (
    <footer className="max-w-[1200px] p-8 mx-auto">
      <div className="flex justify-between items-center">
        <img src={creaitionLogo} alt="creaition company logo" className="h-8" />
        <div className="flex gap-8">
          {socialLinks.map((links, index) => (
            <a
              href={links.link}
              key={index}
              className="text-black hover:text-opacity-60"
            >
              <FontAwesomeIcon icon={links.icon} size="lg" />
            </a>
          ))}
        </div>
      </div>
      <div className="flex justify-between py-16">
        <div className="flex flex-col gap-5 items-start">
          <h1 className="text-lg font-medium tracking-widest uppercase">
            ADDRESS
          </h1>
          <div className="flex flex-col text-opacity-60 text-black">
            <p>Hanauer Landstraße 150</p>
            <p>60314, Frankfurt am Main</p>
          </div>
          <a className="py-3 px-4 bg-black text-white rounded-full uppercase border-transparent border-2 hover:border-black hover:text-black hover:bg-transparent" href="/googlemap">find on map</a>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-lg font-medium tracking-widest uppercase">
            CONTACT
          </h1>
          <div className="flex flex-col gap-2 text-opacity-60 text-black">
            <a href="tel:069-678306751">P: +49 69 6783 067 - 51</a>
            <a href="mailto:hello@creaition.io">E: hello@creaition.io</a>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-lg font-medium tracking-widest uppercase">
            SITEMAP
          </h1>
          <div className="flex flex-col gap-2 uppercase text-opacity-60 text-black">
            <a href="/about">ABOUT</a>
            <a href="/legal">LEGAL</a>
            <a href="/beta">BETA</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
