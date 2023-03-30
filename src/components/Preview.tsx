import { useEffect, useState } from "react";
import previewOne from "../assets/images/other1.png";

const Preview = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY / 2);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const translateLeft = `translateX(${-scrollY}px)`;
  const translateRight = `translateX(${scrollY}px)`;

  return (
    <section
      id="preview"
      className="text-center flex flex-col gap-9 items-center pt-28 overflow-x-hidden"
    >
      <div
        className="flex gap-9"
        style={{ transform: translateLeft }}
      >
        <img
          src={previewOne}
          alt="PreviewPicture"
          className="h-60 aspect-square border-[1px] border-black"
        />
        <img
          src={previewOne}
          alt="PreviewPicture"
          className="h-60 aspect-square border-[1px] border-black"
        />
        <img
          src={previewOne}
          alt="PreviewPicture"
          className="h-60 aspect-square border-[1px] border-black"
        />
        <img
          src={previewOne}
          alt="PreviewPicture"
          className="h-60 aspect-square border-[1px] border-black"
        />
        <img
          src={previewOne}
          alt="PreviewPicture"
          className="h-60 aspect-square border-[1px] border-black"
        />
      </div>
      <div className="flex gap-9" style={{ transform: translateRight }}>
        <img
          src={previewOne}
          alt="PreviewPicture"
          className="h-60 aspect-square border-[1px] border-black"
        />
        <img
          src={previewOne}
          alt="PreviewPicture"
          className="h-60 aspect-square border-[1px] border-black"
        />
        <img
          src={previewOne}
          alt="PreviewPicture"
          className="h-60 aspect-square border-[1px] border-black"
        />
        <img
          src={previewOne}
          alt="PreviewPicture"
          className="h-60 aspect-square border-[1px] border-black"
        />
        <img
          src={previewOne}
          alt="PreviewPicture"
          className="h-60 aspect-square border-[1px] border-black"
        />
      </div>
      <div className="flex gap-9" style={{ transform: translateLeft }}>
        <img
          src={previewOne}
          alt="PreviewPicture"
          className="h-60 aspect-square border-[1px] border-black"
        />
        <img
          src={previewOne}
          alt="PreviewPicture"
          className="h-60 aspect-square border-[1px] border-black"
        />
        <img
          src={previewOne}
          alt="PreviewPicture"
          className="h-60 aspect-square border-[1px] border-black"
        />
        <img
          src={previewOne}
          alt="PreviewPicture"
          className="h-60 aspect-square border-[1px] border-black"
        />
        <img
          src={previewOne}
          alt="PreviewPicture"
          className="h-60 aspect-square border-[1px] border-black"
        />
      </div>
    </section>
  );
};

export default Preview;
