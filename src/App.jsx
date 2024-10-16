import { useState } from "react";
import "./App.css";
import images from "./images";

function App() {
  const [imgs, setImgs] = useState(images);
  const [curtImgIdx, setCurtimgTdx] = useState(0);

  function showimage(idx) {
    setCurtimgTdx(idx);
  }
  return (
    <>
      <div className="flex items-center justify-center pt-8 pb-12 bg-black">
        <img
          src={imgs[curtImgIdx]}
          alt="image"
          className="lg:w-[60rem] sm:w-[25rem] w-[15rem] lg:h-[32rem] sm:h-[16rem] h-[10rem]"
        />
      </div>
      <div className="flex items-center gap-10 overflow-x-scroll py-6 px-6 bg-[#092327] text-white">
        {imgs.map((image, index) => {
          return (
            <img
              src={image}
              alt={image}
              key={index}
              onClick={() => showimage(index)}
              className={
                curtImgIdx === index
                  ? "lg:w-[21rem] sm:w-[11rem] w-[7rem] md:h-[11rem] h-[6rem] rounded-lg border-4 border-orange-500"
                  : "lg:w-[20rem] sm:w-[10rem] w-[6rem] md:h-[10rem] h-[5rem] rounded-lg"
              }
            />
          );
        })}
      </div>
    </>
  );
}
export default App;
