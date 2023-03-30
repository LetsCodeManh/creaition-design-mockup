import imgOne from "../assets/images/i1.png";
import imgTwo from "../assets/images/i2.png";

const Morph = () => {
  return (
    <section id="morph" className="flex flex-col gap-6 items-center py-28">
      <div className="text-center flex flex-col gap-6">
        <div className="font-medium text-7xl uppercase flex flex-col gap-10 tracking-[2px]">
          <p>Choose your</p>
          <p>Muse</p>
        </div>
        <p className="text-xl">get new inspiration by generating new ideas</p>
      </div>
      <div className="flex gap-6 lg:gap-20 items-center py-10">
        <div className="border-[1px] border-black cursor-pointer">
          <img
            src={imgOne}
            alt="test Image One"
            className="h-80 aspect-square"
          />
        </div>
        <p className="text-4xl">+</p>
        <div className="border-[1px] border-black cursor-pointer">
          <img
            src={imgTwo}
            alt="test Image Two"
            className="h-80 aspect-square"
          />
        </div>
      </div>
      <a href="#design" className="px-8 py-4 border-[1px] border-black rounded-full hover:bg-black hover:text-white">Morph</a>
    </section>
  );
};

export default Morph;
