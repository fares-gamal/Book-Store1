import Image from "next/image";
import React from "react";

function Herosection() {
  return (
    <div>
      <br></br>
      <br></br>

      <div className="w-full px-5 flex items-center justify-between ">
        <Image src="/led.svg" width={100} height={100} alt="img"></Image>
        <div className="text-center">
          <h1 className="text-[#000000] text-4xl font-bold">Our Tracks</h1>
          <p className="text-[#00000085]">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
        </div>
        <Image src="/Vector.svg" width={100} height={100} alt="img"></Image>
      </div>
      <br></br>
      <br></br>
      <div className="w-full flex gap-[30px] px-[5%] max-[700px]:flex-col max-[700px]:items-center ">
        <div className="w-[33%] h-[510px] shadow-2xl flex  flex-col gap-1 max-[1300px]:h-[450px] max-[700px]:w-[73%] max-[700px]:h-[520px] max-[700px]: max-[520px]:h-[470px]  ">
          <Image
            src="/ab.jpg"
            width={450}
            height={450}
            alt="img"
            className="p-2 rounded-2xl   "
          ></Image>
          <div className="flex justify-between p-1 px-  ">
            <p className="px-1 text-[#ACACAC]">UI/UX Design</p>{" "}
            <Image src="/star.svg" width={70} height={70} alt="star"></Image>
          </div>
          <p className="px-2 text-[#000000] text-2xl ">
            UI/UX Design for Beginners
          </p>
          <p className="px-2 text-[#FF7426]">$98</p>
          <hr className="text-[#ACACAC] rounded-4xl"></hr>
          <Image
            src="/time.png"
            width={390}
            height={390}
            alt="a"
            className="p-2"
          ></Image>
          <div className="w-full flex items-center justify-center py-7">
            <button className="w-[200px] h-[55px] bg-[#FF7426] text-[#FFFFFF] rounded-[96px]  hover:bg-[#1D1D1D] max-[1000px]:w-[140px] max-[1000px]:h-[40px] ">
              Join Course
            </button>
          </div>
        </div>
        <div className="w-[34%] h-[510px] shadow-2xl flex  flex-col gap-1  max-[1300px]:h-[450px] max-[700px]:w-[73%] max-[700px]:h-[520px]  max-[520px]:h-[470px]">
          <Image
            src="/ab.jpg"
            width={450}
            height={450}
            alt="img"
            className="p-2 rounded-2xl "
          ></Image>
          <div className="flex justify-between p-1">
            <p className="px-1 text-[#ACACAC]">UI/UX Design</p>{" "}
            <Image src="/star.svg" width={70} height={70} alt="star"></Image>
          </div>
          <p className="px-2 text-[#000000] text-2xl ">
            UI/UX Design for Beginners
          </p>
          <p className="px-2 text-[#FF7426]">$98</p>
          <hr className="text-[#ACACAC] rounded-4xl"></hr>
          <Image
            src="/time.png"
            width={390}
            height={390}
            alt="a"
            className="p-2"
          ></Image>
          <div className="w-full flex items-center justify-center py-7">
            <button className="w-[200px] h-[55px] bg-[#FF7426] text-[#FFFFFF] rounded-[96px]  hover:bg-[#1D1D1D]  max-[1000px]:w-[140px] max-[1000px]:h-[40px]">
              Join Course
            </button>
          </div>
        </div>
        <div className="w-[33%] h-[510px] shadow-2xl flex  flex-col gap-1  max-[1300px]:h-[450px] max-[700px]:w-[73%] max-[700px]:h-[520px] max-[520px]:h-[470px]">
          <Image
            src="/ac.png"
            width={450}
            height={450}
            alt="img"
            className="p-2 rounded-2xl "
          ></Image>
          <div className="flex justify-between p-1">
            <p className="px-1 text-[#ACACAC]">UI/UX Design</p>{" "}
            <Image src="/star.svg" width={70} height={70} alt="star"></Image>
          </div>
          <p className="px-2 text-[#000000] text-2xl ">
            UI/UX Design for Beginners
          </p>
          <p className="px-2 text-[#FF7426]">$98</p>
          <hr className="text-[#ACACAC] rounded-4xl"></hr>
          <Image
            src="/time.png"
            width={390}
            height={390}
            alt="a"
            className="p-2"
          ></Image>
          <div className="w-full flex items-center justify-center py-7">
            <button className="w-[200px] h-[55px] bg-[#FF7426] text-[#FFFFFF] rounded-[96px]  hover:bg-[#1D1D1D] max-[1000px]:w-[140px] max-[1000px]:h-[40px] ">
              Join Course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
