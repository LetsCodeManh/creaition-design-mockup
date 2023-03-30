
const CallOnAction = () => {
  return (
    <section className="text-center flex flex-col gap-6 items-center py-28">
      <div className="uppercase flex flex-col gap-6">
        <h1 className="text-xl tracking-wide">do you want more design</h1>
        <h2 className="font-medium text-7xl tracking-[2px]">Let's Talk</h2>
      </div>
      <a
        href="/beta"
        className="px-8 py-4 border-[1px] border-black rounded-full hover:bg-black hover:text-white"
      >
        apply for beta
      </a>
    </section>
  );
};

export default CallOnAction;
