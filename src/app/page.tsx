"use client";

import { useState } from "react";
import Image from "next/image";

import Nav from "@/components/Nav.comp";
import RotateComponent from "@/components/RotateComponent";

export default function Home() {
  return (
    <main className="w-screen h-screen text-black relative bg-white back">
      <Nav />
      <section className="flex lg:flex-row flex-col w-full h-full overflow-hidden items-center justify-center lg:justify-between gap-9 lg:gap-5 pt-20 md:pt-16 lg:pt-0">
        <div className=" text-black px-7 md:px-20 flex flex-col gap-4 lg:text-left text-center items-center lg:items-start">
          <div className=" text-5xl md:text-6xl lg:text-7xl font-bold">
            Meet,Eat & <br />
            Enjoy The{" "}
            <span className="text-[#f87171]">
              True <br /> Taste
            </span>
          </div>
          <div className="text-black text-lg font-medium ml-1">
            Food Tasted Better When You Eat It With <br /> Family And Friends.
          </div>
          <div className="lg:self-start px-5 py-3 bg-[#f87171] rounded-md mt-5 hover:scale-105 focus:scale-100 text-white  duration-200  select-none cursor-pointer">
            Lets Order
          </div>
        </div>
        <RotateComponent />
      </section>
    </main>
  );
}
