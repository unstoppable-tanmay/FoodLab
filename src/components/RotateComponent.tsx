import React, { useEffect, useRef } from "react";

import Image from "next/image";
// Images
import burger from "../app/static/rotate/Food-Plate-Healthy-PNG.png";
import pizza from "../app/static/rotate/Food-Plate-Top-View-Non-Veg-PNG.png";
import fastfood from "../app/static/rotate/Food-Plate-Top-View-Snack-PNG.png";
import pasty from "../app/static/rotate/KFC-Food-Plate-Top-View-PNG.png";

import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const RotateComponent = () => {
  const dragInstance = useRef(null);
  const dragTarget = useRef(null);

  useEffect(() => {
    Draggable.create("#rotateplate", {
      type: "rotation",
      inertia: true,
      autoScroll: 1,
      snap: function (endValue) {
        return Math.round(endValue / 90) * 90;
      },
    });
  }, []);
  return (
    <div className="wrapper w-[150%] mb-[-70%] md:w-[120%] md:mb-[-80%] lg:mb-0 lg:w-auto lg:h-[150%] lg:mr-[-30%] drop-shadow-2xl">
      <div
        ref={dragTarget}
        id="rotateplate"
        className="h-full aspect-square rounded-full bg-red-400 border-[50px] shadow-inner relative cursor-grab duration-500 rotate-[40deg] "
      >
        <div className="hover:scale-110 duration-300 plate1 select-none absolute w-[40%] top-0 left-[50%] aspect-square ">
          <Image
            alt=""
            draggable={false}
            className="object-cover"
            fill
            src={burger}
          ></Image>
        </div>
        <div className="hover:scale-110 duration-300 plate1 select-none absolute w-[40%] bottom-0 left-[50%]  aspect-square ">
          <Image
            alt=""
            draggable={false}
            className="object-cover"
            fill
            src={pizza}
          ></Image>
        </div>
        <div className="hover:scale-110 duration-300 plate1 select-none absolute w-[40%] top-[50%] left-0 aspect-square ">
          <Image
            alt=""
            draggable={false}
            className="object-cover"
            fill
            src={fastfood}
          ></Image>
        </div>
        <div className="hover:scale-110 duration-300 plate1 select-none absolute w-[40%] top-0 left-[0] aspect-square ">
          <Image
            alt=""
            draggable={false}
            className="object-cover"
            fill
            src={pasty}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default RotateComponent;
