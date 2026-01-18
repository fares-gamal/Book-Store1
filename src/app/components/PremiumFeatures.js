import Image from "next/image";
import React from "react";

function PremiumFeatures() {
  return (
    <div className="w-full h-[636px] bg-[#FDF8EE] my-[126px] p-[5%] flex max-[700px]:flex-col max-[700px]:items-center   ">
      <div className="w-[45%] max-[700px]:w-[60%]">
        <div>
          {" "}
          <Image src="jroup.svg" width={550} height={550} alt="img"></Image>
        </div>
      </div>

      <div className="w-[55%] max-[700px]:w-full ">
        <h1 className="font-bold text-[69px] flex gap-3 max-[1460px]:text-[55px]  max-[1063px]:text-[40px] max-[700px]:text-[25px] ">
          {" "}
          Premium{" "}
          {/* <h1 className="text-[#FF7426] max-[1460px]:text-[55px]  max-[1063px]:text-[40px] max-[700px]:text-[25px] ">
            Learning
          </h1> */}
        </h1>
        <h1 className="font-bold text-[69px] max-[1460px]:text-[55px]  max-[1063px]:text-[40px] max-[700px]:text-[25px] ">
          Experience
        </h1>

        <div className="">
          {" "}
          <div className="flex gap-3 py-5">
            <div className="w-[70px] h-[70px] rounded-[15px] bg-[#4D2C5E] flex items-center justify-center">
              {" "}
              <Image src="/hart.png" width={40} height={40} alt="img"></Image>
            </div>
            <div>
              {" "}
              <h1 className="font-bold text-[29px] max-[700px]:text-[15px] ">
                Fun learning expe
              </h1>
              <p className="text-[#8A8A8A] max-[700px]:">
                Learning Will fell Very Comfortable With Courslab.
              </p>
            </div>
          </div>
          <div className="flex gap-3 py-3.5">
            <div className="w-[70px] h-[70px] rounded-[15px] bg-[#4D2C5E] flex items-center justify-center">
              {" "}
              <Image src="/rt.png" width={40} height={40} alt="img"></Image>
            </div>
            <div>
              {" "}
              <h1 className="font-bold text-[29px] max-[700px]:text-[15px] ">
                Fun learning expe
              </h1>
              <p className="text-[#8A8A8A]">
                Learning Will fell Very Comfortable With Courslab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PremiumFeatures;
