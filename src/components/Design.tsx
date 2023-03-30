import designOne from "../assets/images/o1.png";
import designTwo from "../assets/images/o2.png";
import designThree from "../assets/images/o3.png";

const Design = () => {
  return (
    <section id="design" className="flex flex-col gap-24 items-center">
      {/* Repeat... New Component */}
      <div className="flex items-center gap-12">
        <img
          src={designOne}
          alt="test design one"
          className="h-80 aspect-square border-[1px] border-black"
        />
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-6">
            <input
              id="shapeOne"
              type="range"
              min="0"
              max="100"
              defaultValue="50"
              className="w-[250px] h-[2px] appearance-none bg-black accent-black"
            />
            <label htmlFor="shapeOne">shape</label>
          </div>
          <div className="flex items-center gap-6">
            <input
              id="colorOne"
              type="range"
              min="0"
              max="100"
              defaultValue="80"
              className="w-[250px] h-[2px] appearance-none bg-black accent-black"
            />
            <label htmlFor="colorOne">color</label>
          </div>
          <div className="flex items-center gap-6">
            <input
              id="appearanceOne"
              type="range"
              min="0"
              max="100"
              defaultValue="30"
              className="w-[250px] h-[2px] appearance-none bg-black accent-black"
            />
            <label htmlFor="appearanceOne">apperance</label>
          </div>
        </div>
      </div>

      {/* Repeat... New Component */}
      <div className="flex items-center gap-12 flex-row-reverse">
        <img
          src={designTwo}
          alt="test design two"
          className="h-80 aspect-square border-[1px] border-black"
        />
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-6 flex-row-reverse">
            <input
              id="shapeTwo"
              type="range"
              min="0"
              max="100"
              defaultValue="50"
              className="w-[250px] h-[2px] appearance-none bg-black accent-black"
            />
            <label htmlFor="shapeTwo">shape</label>
          </div>
          <div className="flex items-center gap-6 flex-row-reverse">
            <input
              id="colorTwo"
              type="range"
              min="0"
              max="100"
              defaultValue="80"
              className="w-[250px] h-[2px] appearance-none bg-black accent-black"
            />
            <label htmlFor="colorTwo">color</label>
          </div>
          <div className="flex items-center gap-6 flex-row-reverse">
            <input
              id="appearanceTwo"
              type="range"
              min="0"
              max="100"
              defaultValue="30"
              className="w-[250px] h-[2px] appearance-none bg-black accent-black"
            />
            <label htmlFor="appearanceTwo">apperance</label>
          </div>
        </div>
      </div>

      {/* Repeat... New Component */}
      <div className="flex items-center gap-12">
        <img
          src={designThree}
          alt="test design three"
          className="h-80 aspect-square border-[1px] border-black"
        />
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-6">
            <input
              id="shapeThree"
              type="range"
              min="0"
              max="100"
              defaultValue="50"
              className="w-[250px] h-[2px] appearance-none bg-black accent-black"
            />
            <label htmlFor="shapeThree">shape</label>
          </div>
          <div className="flex items-center gap-6">
            <input
              id="colorThree"
              type="range"
              min="0"
              max="100"
              defaultValue="80"
              className="w-[250px] h-[2px] appearance-none bg-black accent-black"
            />
            <label htmlFor="colorThree">color</label>
          </div>
          <div className="flex items-center gap-6">
            <input
              id="appearanceThree"
              type="range"
              min="0"
              max="100"
              defaultValue="30"
              className="w-[250px] h-[2px] appearance-none bg-black accent-black"
            />
            <label htmlFor="appearanceThree">apperance</label>
          </div>
        </div>
      </div>

      <div className="flex gap-16"> 
        <a href="/download" className="px-8 py-4 border-[1px] border-black hover:bg-black hover:text-white">Save</a>
        <a href="#morph" className="px-8 py-4 border-[1px] border-black hover:bg-black hover:text-white">
          Reset</a>
      </div>
    </section>
  );
};

export default Design;
