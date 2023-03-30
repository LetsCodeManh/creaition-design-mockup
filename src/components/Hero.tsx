import MouseScrollDown from "./MouseScrollDown";

const Hero = () => {
  return (
    <section id="hero" className="text-center flex flex-col">
      <div className="flex flex-col gap-6 py-28">
        <div className="font-medium text-7xl uppercase flex flex-col gap-10 tracking-[2px]">
          <p>
            get inspired <br />
          </p>
          <p>by</p>

          <p>morph</p>
        </div>
        <h2 className="text-xl">
          combine two designs instantly and create new design
        </h2>
      </div>

      <MouseScrollDown />
    </section>
  );
};

export default Hero;
