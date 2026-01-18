import Image from "next/image";
import React from "react";

function Trackcard() {
  return (
    <div>
      <div>
        {/* TracksSection */}
        <div className="w-full flex items-center justify-center">
          <div>
            <h1 className="font-bold text-[30px] text-center">
              What student’s say
            </h1>
            <p className="text-[#8A8A8A]">
              Lorem Ipsum is simply dummy text of the printing.
            </p>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="w-[100%] h-[255px]   flex justify-center gap-[25px] max-[700px]:flex-col max-[700px]:items-center max-[700px]:my-[180px] ">
          <div className="w-[27%] h-[285px] p-7 bg-[#FFFFFF] shadow-2xl flex flex-col gap-7  max-[700px]:w-[70%] max-[700px]:h-[400px]  ">
            <p className="text-[#ACACAC] text-[19px] max-[1290px]:text-[18px]  max-[1060px]:text-[16px]  max-[795px]:text-[14px]">
              “Teachings of the great explore of truth, the master-builder of
              human happiness. no one rejects,dislikes, or avoids pleasure
              itself, pleasure itself”
            </p>
            <div className="flex gap-3">
              <Image
                className="rounded-[50%]"
                src="/m.png"
                width={47}
                height={47}
                alt="img"
              ></Image>
              <div>
                <p className="text-[23px] max-[1290px]:text-[14px]   ">
                  {" "}
                  Finlay Kirk
                </p>
                <p className="text-[#8E8E8E] max-[1290px]:text-[11px]">
                  Web Developper
                </p>
              </div>
            </div>
          </div>
          <div className="w-[27%] h-[285px] p-7 bg-[#FFFFFF] shadow-2xl flex flex-col gap-7 max-[700px]:w-[70%] max-[700px]:h-[400px] ">
            <p className="text-[#ACACAC] text-[19px] max-[1290px]:text-[18px]  max-[1060px]:text-[16px]  max-[795px]:text-[14px] max-[709px]:text-[13px] ">
              “Teachings of the great explore of truth, the master-builder of
              human happiness. no one rejects,dislikes, or avoids pleasure
              itself, pleasure itself”
            </p>
            <div className="flex gap-3">
              <Image
                className="rounded-[50%]"
                src="/girl.png"
                width={47}
                height={47}
                alt="img"
              ></Image>
              <div>
                <p className="text-[21px] max-[1290px]:text-[14px]">
                  {" "}
                  Dannette P. Cervantes
                </p>
                <p className="text-[#8E8E8E] max-[1290px]:text-[10px]">
                  Web Design
                </p>
              </div>
            </div>
          </div>
          <div className="w-[27%] h-[285px] p-7 bg-[#FFFFFF] shadow-2xl flex flex-col gap-7  max-[700px]:w-[70%] max-[700px]:h-[400px] ">
            <p className="text-[#ACACAC] text-[19px] max-[1290px]:text-[18px]  max-[1060px]:text-[16px]  max-[795px]:text-[14px] max-[709px]:text-[13px]">
              “Teachings of the great explore of truth, the master-builder of
              human happiness. no one rejects,dislikes, or avoids pleasure
              itself, pleasure itself”
            </p>
            <div className="flex gap-3">
              <Image
                className="rounded-[50%]"
                src="/gir.png"
                width={47}
                height={47}
                alt="img"
              ></Image>
              <div>
                <p className="text-[23px] max-[1290px]:text-[14px]">
                  {" "}
                  Clara R. Altman
                </p>
                <p className="text-[#8E8E8E] max-[1290px]:text-[11px]">
                  UI&UX Design
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between p-[5%]">
          <Image src="/up.png" width={120} height={68} alt="icon"></Image>
          <Image src="/roup.png" width={0} height={0} alt="icon"></Image>
          <Image src="/cd.png" width={120} height={68} alt="icon"></Image>
        </div>
      </div>

      <div>
        {/* Trackcard */}

        <div className="w-full flex items-center justify-center">
          <div>
            <h1 className="font-bold text-[30px] text-center">Our Tracks</h1>
            <p className="text-[#8A8A8A]">
              Lorem Ipsum is simply dummy text of the printing.
            </p>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="w-full  flex justify-center gap-[30px] max-[700px]:flex-col max-[700px]:items-center ">
          <div className="w-[30%]  h-[440px] shadow-2xl flex p-3  flex-col gap-3  max-[700px]:w-[70%]">
            <Image
              className=" rounded-4xl"
              src="/mann.jpg"
              width={454}
              height={28}
              alt="img"
            ></Image>
            <h1 className="text-[#000000] text-[20px]">Matthew E. McNatt</h1>
            <p className="text-[#868686] font-medium ">
              Professor @George Brown College
            </p>
            <p className="text-[#ACACAC] ">
              Ut enim ad minim veniam, quis nost exercitation ullamco laboris
              nisi ut allquip ex commodo.
            </p>

            <div className="flex justify-between">
              <p className="text-[#FF7426] font-medium text-[18px]">
                Engineering physics
              </p>
              <Image
                className=""
                src="/insta.png"
                width={88}
                height={38}
                alt="img"
              ></Image>
            </div>
          </div>
          <div className="w-[30%]  h-[440px] shadow-2xl flex p-3  flex-col gap-3 max-[700px]:w-[70%]">
            <Image
              className=" rounded-4xl"
              src="/mm.png"
              width={454}
              height={28}
              alt="img"
            ></Image>
            <h1 className="text-[#000000] text-[20px]">Tracy D. Wright</h1>
            <p className="text-[#868686] font-medium ">
              Professor @George Brown College
            </p>
            <p className="text-[#ACACAC] ">
              Ut enim ad minim veniam, quis nost exercitation ullamco laboris
              nisi ut allquip ex commodo.
            </p>

            <div className="flex justify-between">
              <p className="text-[#FF7426] font-medium text-[18px]">
                Engineering physics
              </p>
              <Image
                className=""
                src="/insta.png"
                width={88}
                height={38}
                alt="img"
              ></Image>
            </div>
          </div>
          <div className="w-[30%]  h-[440px] shadow-2xl flex p-3  flex-col gap-3 max-[700px]:w-[70%] ">
            <Image
              className=" rounded-4xl"
              src="/mmm.jpg"
              width={454}
              height={28}
              alt="img"
            ></Image>
            <h1 className="text-[#000000] text-[20px]">Cynthia A. Nelson</h1>
            <p className="text-[#868686] font-medium ">
              Professor @George Brown College
            </p>
            <p className="text-[#ACACAC] ">
              Ut enim ad minim veniam, quis nost exercitation ullamco laboris
              nisi ut allquip ex commodo.
            </p>

            <div className="flex justify-between">
              <p className="text-[#FF7426] font-medium text-[18px]">
                Engineering physics
              </p>
              <Image
                className=""
                src="/insta.png"
                width={88}
                height={38}
                alt="img"
              ></Image>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="w-full flex flex-row justify-center ">
        {/* NewsletterSection */}
        <div className="w-[75%] bg-[#4D2C5E] h-[310px] flex flex-wrap justify-center gap-[41px] p-[5%] rounded-[14px] max-[600px]:h-[190px]">
          <div className=" flex flex-col  gap-[14px] ">
            <h1 className="font-bold text-[#FFFFFF] text-[40px] max-[825px]:text-[33px] max-[690px]:text-[17px]">
              Subscribe to our newsletter
            </h1>
            <p className="font-medium text-[#FFFFFF] text-[15px] text-center max-[825px]:text-[12px] max-[690px]:text-[8px]">
              Lorem Ipsum is simply dummy text of the printing.
            </p>
          </div>
          <div className=" w-[57%] h-15 flex items-center justify-between bg-white rounded-full px-1 shadow-lg max-[900px]:w-[80%]  max-[500px]:h-11  max-[570px]:w-[90%] ">
            <div>
              <input
                placeholder="Email Address"
                className="focus:outline-none text-center max-[500px]:text-[11px]"
              />
            </div>
            <div>
              <button className="w-[110px] h-13 rounded-full text-white font-old hover:bg-[#1D1D1D]  bg-[#FF7426] text-center max-[700px]:w-[90px] max-[700px]:h-11 max-[500px]:w-[75px] max-[500px]:h-9">
                {" "}
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trackcard;
