import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="bg-[#FDF8EE] w-full p-8 md:p-[5%]">
      {/* Footer Main */}
      <div className="flex flex-col md:flex-row flex-wrap gap-10 md:gap-[154px]">
        {/* Logo & Description */}
        <div className="flex flex-col gap-5 md:w-[200px]">
          <Image src="/Group.png" width={140} height={140} alt="logo" />
          <p className="font-serif text-[#606060] text-sm md:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy a type
            specimen book.
          </p>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-3 md:gap-4 flex-1 min-w-[120px]">
          <h1 className="text-[#00052E] text-lg md:text-[25px] font-bold">
            Company
          </h1>
          <p className="font-serif text-[#606060] text-sm md:text-base">
            About Us
          </p>
          <p className="font-serif text-[#606060] text-sm md:text-base">
            How to work?
          </p>
          <p className="font-serif text-[#606060] text-sm md:text-base">
            Popular Course
          </p>
          <p className="font-serif text-[#606060] text-sm md:text-base">
            Service
          </p>
        </div>

        {/* Courses */}
        <div className="flex flex-col gap-3 md:gap-4 flex-1 min-w-[120px]">
          <h1 className="text-[#00052E] text-lg md:text-[25px] font-bold">
            Courses
          </h1>
          <p className="font-serif text-[#606060] text-sm md:text-base">
            Categories
          </p>
          <p className="font-serif text-[#606060] text-sm md:text-base">
            Offline Course
          </p>
          <p className="font-serif text-[#606060] text-sm md:text-base">
            Video Course
          </p>
        </div>

        {/* Support */}
        <div className="flex flex-col gap-3 md:gap-4 flex-1 min-w-[120px]">
          <h1 className="text-[#00052E] text-lg md:text-[25px] font-bold">
            Support
          </h1>
          <p className="font-serif text-[#606060] text-sm md:text-base">FAQ</p>
          <p className="font-serif text-[#606060] text-sm md:text-base">
            Help Center
          </p>
          <p className="font-serif text-[#606060] text-sm md:text-base">
            Career
          </p>
          <p className="font-serif text-[#606060] text-sm md:text-base">
            Privacy
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-3 md:gap-4 flex-1 min-w-[150px]">
          <h1 className="text-[#00052E] text-lg md:text-[25px] font-bold">
            Contact Info
          </h1>
          <p className="font-serif text-[#606060] text-sm md:text-base">
            +0913-705-3875
          </p>
          <p className="font-serif text-[#606060] text-sm md:text-base">
            ElizabethJ@jourrapide.com
          </p>
          <p className="font-serif text-[#606060] text-sm md:text-base">
            4808 Skinner Hollow Road, Days Creek, OR 97429
          </p>
        </div>
      </div>

      <hr className="border-[#B7B7B7] my-6" />

      {/* Footer Bottom */}
      <p className="font-serif text-[#606060] text-sm md:text-[19px] text-center">
        BookStore All Right Reserved, 2022
      </p>
    </div>
  );
}

export default Footer;
