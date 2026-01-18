import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="w-full h-[86vh] px-[5%] flex items-center bg-[#FDF8EE] max-[960px]:flex-col max-[500px]:h-[70vh] ">
      <div className="w-[50%] flex flex-col gap-[50px max-[960px]:w-full  ">
        <div>
          <h1 className="font-bold text-[69px] flex gap-3  max-[1460px]:text-[55px]  max-[1063px]:text-[40px] max-[500px]:text-[35px]  ">
            {" "}
            The{" "}
            <span className="text-[#FF7426] max-[1460px]:text-[55px]  max-[1063px]:text-[40px] max-[500px]:text-[35px]   ">
              Smart
            </span>{" "}
          </h1>
          <h1 className="font-bold text-[69px] flex gap-3 max-[1460px]:text-[55px]  max-[1063px]:text-[40px] max-[500px]:text-[35px]  ">
            {" "}
            Choice For{" "}
            <span className="text-[#FF7426] max-[1460px]:text-[55px] max-[1063px]:text-[40px] max-[500px]:text-[35px] ">
              Future
            </span>{" "}
          </h1>
          <p className="w-[70%] font-Roboto  text-[#8A8A8A]  max-[583px]:text-[12px]">
            Elearn is a global training provider based across the UK that
            specialises in accredited and bespoke training courses. We crush
            the...
          </p>
        </div>
        <div className=" w-[70%] h-15 flex items-center justify-between bg-white rounded-full px-1 shadow-lg max-[1000px]:w-[60%] max-[600px]:w-[70%] max-[480px]:w-[80%]  max-[540px]:h-11 ">
          <div>
            <input
              placeholder="Search for a location..."
              className="focus:outline-none text-center max-[600px]:text-[13px] max-[480px]:text-[12px] "
            />
          </div>
          <div>
            <button className="w-[110px] h-13 rounded-full text-white font-old hover:bg-[#1D1D1D]  bg-[#4D2C5E] text-center max-[540px]:w-[90px] max-[540px]:h-10 max-[540px]:text-[13px] ">
              {" "}
              Continue
            </button>
          </div>
        </div>
      </div>

      <div className="w-[50%] h-full flex items-center justify-center  max-[960px]:w-full  max-[960px]:mb-[95px]">
        <Image src="/Oerer.svg" width={700} height={700} alt="imeg" />
      </div>
    </div>
  );
}

export default Header;
