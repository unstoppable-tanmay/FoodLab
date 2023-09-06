import React, { useEffect, useRef } from "react";

import Image from "next/image";

import { Items } from "@/store/slices/itemSlice";
import { useAppStore } from "../store/store";

import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

const RotateDish = () => {
  const dragTarget = useRef(null);

  const { items, cart, details, setDetails } = useAppStore();

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
    <div className="max-w-[90vw] w-[80%] md:w-[50%] lg:w-[43%] lg:pl-5 drop-shadow-2xl flex items-center justify-center">
      <div
        ref={dragTarget}
        id="rotateplate"
        className="w-full aspect-square rounded-full relative cursor-grab duration-500 table-back"
      >
        <div
          onClick={() => {
            setDetails(!details);
          }}
          className=" circle deg-0 "
        ></div>
        <div
          onClick={() => {
            setDetails(!details);
          }}
          className=" circle deg-45 "
        ></div>
        <div
          onClick={() => {
            setDetails(!details);
          }}
          className=" circle deg-90 "
        ></div>
        <div
          onClick={() => {
            setDetails(!details);
          }}
          className=" circle deg-135 "
        ></div>
        <div
          onClick={() => {
            setDetails(!details);
          }}
          className=" circle deg-180 "
        ></div>
        <div
          onClick={() => {
            setDetails(!details);
          }}
          className=" circle deg-225 "
        ></div>
        <div
          onClick={() => {
            setDetails(!details);
          }}
          className=" circle deg-270 "
        ></div>
        <div
          onClick={() => {
            setDetails(!details);
          }}
          className=" circle deg-315 "
        ></div>
      </div>
    </div>
  );
};

export default RotateDish;
