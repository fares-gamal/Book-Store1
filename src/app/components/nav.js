"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  return (
    <div className="w-full h-20 bg-[#FDF8EE] flex justify-between items-center px-[5%] ">
      <div>
        <Image src="/Group.png" width={120} height={120} alt="logo"></Image>
      </div>
      <div className="flex items-center gap-[60px]">
        <div className="flex items-center gap-[45px] max-[960px]:hidden">
          <Link href="/" className="hover:text-[#4D2C5E]">
            Hoom
          </Link>
        </div>
        <button className="w-[161px] h-[55px] bg-[#4D2C5E] rounded-full text-white font-old hover:bg-[#1D1D1D]">
          Sign in
        </button>
      </div>
    </div>
  );
}
