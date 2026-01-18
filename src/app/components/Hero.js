import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="w-full flex items-center justify-center">
      {" "}
      <div className="w-[75%] h-[200px] flex items-center  bg-[#4D2C5E]  max-[1300px]:w-[90%] max-[1200px]:h-[400px] gap-[px] px-10 rounded-[10px] max-[1200px]:flex-col">
        <div className="flex  gap-[25px] p-3 bg-[#4D2C5E]  max-[1200px]:w-full  max-[1200px]:p-3  w-[33%] h-[200px] ">
          <div className="w-[170px] h-[80px] bg-[#FFFFFF33] flex  justify-center  p-2 rounded-[23px]">
            {" "}
            <Image src="/a.png" width={35} height={35} alt="img "></Image>
          </div>

          <div className="flex flex-col ">
            <h1 className="font-bold  py-2 text-[#FFFFFF] max-[747px]:text-[14px] max-[402px]:text-[13px]">
              Learn The Latest Skills
            </h1>
            <p className="text-[#ffffff8a] font-Roboto max-[747px]:text-[10px] max-[402px]:text-[9px]">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a BC, making it over 2000 years old.
            </p>
          </div>
        </div>
        <div className="flex  gap-[25px] p-3 bg-[#4D2C5E]  max-[1200px]:w-full  w-[33%] h-[200px] max-[1200px]:p-3">
          <div className="w-[170px] h-[80px] bg-[#FFFFFF33] flex justify-center  p-3 rounded-[23px] ">
            {" "}
            <Image src="/b.png" width={35} height={35} alt="img"></Image>
          </div>

          <div className="flex flex-col">
            <h1 className="font-bold  py-2 text-[#FFFFFF] max-[747px]:text-[14px] max-[402px]:text-[13px]">
              Learn The Latest Skills
            </h1>
            <p className="text-[#ffffff8a] font-Roboto max-[747px]:text-[10px] max-[402px]:text-[9px]  ">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a BC, making it over 2000 years old.
            </p>
          </div>
        </div>
        <div className="flex  gap-[25px] p-3 bg-[#4D2C5E]  max-[1200px]:w-full  w-[33%] h-[200px] max-[1200px]:p-3">
          <div className="w-[170px] h-[80px] bg-[#FFFFFF33] flex justify-center  p-3 rounded-[23px]">
            {" "}
            <Image src="/c.png" width={35} height={35} alt="img"></Image>
          </div>

          <div className="flex flex-col">
            <h1 className="font-bold  py-2 text-[#FFFFFF] max-[747px]:text-[14px] max-[402px]:text-[13px]">
              Learn The Latest Skills
            </h1>
            <p className="text-[#ffffff8a] font-Roboto max-[747px]:text-[10px] max-[402px]:text-[9px]">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a BC, making it over 2000 years old.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
