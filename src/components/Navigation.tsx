import creaitionLogo from "../assets/images/creaition_logo.svg";
import { navigationRoutes } from "../data/creaitionData";

const Navigation = () => {
  return (
    <header className="flex justify-between items-center max-w-[1200px] p-8 mx-auto">
      <img src={creaitionLogo} alt="creaition company logo" className="h-8" />
      <div className="flex gap-6 text-xl">
        {navigationRoutes.map((item, index) => (
          <a href={item.link} key={index} className="px-8 py-4 hover:bg-black hover:text-white rounded-full transition-colors">
            {item.name}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Navigation;
