import React from "react";
import Image from "next/image";

// Images
import logo1 from "../app/static/logo1.webp"
import logo2 from "../app/static/delevery.gif"

const Nav = () => {
  return (
    <nav className="px-6 py-2 mt-3 flex flex-col md:flex-row justify-between items-center z-20 absolute bg-brown-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 left-[50%] translate-x-[-50%] rounded-[200px] ">
      {/* <div className="relative logo h-[60px] aspect-square ">
        <Image
          className=""
          alt=""
          src={logo2}
          fill
        ></Image>
      </div> */}
      <div className="menu flex gap-10 items-center">
        <div className="item">Home</div>
        <div className="item">Foods</div>
        <div className="item">Orders</div>
        <div className="button bg-yellow-400 px-6 py-1.5 rounded-full text-black border-white border-2">You</div>
      </div>
    </nav>
  );
};

export default Nav;
