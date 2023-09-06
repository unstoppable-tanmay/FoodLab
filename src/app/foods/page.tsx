"use client";

import RotateDish from "@/components/RotateDish";
import React, { useState } from "react";

import { useAppStore } from "../../store/store";

const Page = () => {
  const { items,cart,details,setDetails } = useAppStore();

  return (
    <div className="w-screen h-screen overflow-hidden back flex flex-col">
      <div className="flex gap-4 md:gap-8 items-center text-black px-4 rounded-full justify-center h-[50px]">
        <div
          className="items hover:scale-105 cursor-pointer duration-300"
          onClick={() => {
            setDetails(!details);
          }}
        >
          Dishes
        </div>
        <div className="items hover:scale-105 cursor-pointer duration-300">
          Fastfood
        </div>
        <div className="items hover:scale-105 cursor-pointer duration-300">
          Pizza
        </div>
        <div className="items hover:scale-105 cursor-pointer duration-300">
          Burger
        </div>
        <div className="items hover:scale-105 cursor-pointer duration-300">
          Cakes
        </div>
      </div>
      <section className="w-full h-full flex flex-col lg:flex-row items-center lg:justify-center md:px-5 duration-700">
        <RotateDish />

        {details?<div className=" h-20 bg-red-500 rounded-md">
          Toakishfklia hoihj
        </div>:<></>}
      </section>
    </div>
  );
};

export default Page;
