import { Socials } from "../constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-gradient-to-r from-purple-500 to-red-500 flex items-center px-10 md:px-20">
      {/* Logo and Brand Name */}
      <div className="flex flex-row gap-3 items-center">
        <div className="relative">
          <Image
            src="/horseLogo.jpg"
            alt="logo"
            width={40}
            height={40}
            className="w-full h-full object-contain rounded-full"
          />{" "}{" "}
        </div>
        <h1 className="italic text-white text-[25px] font-bold">
          Tayyaba{" "}
          <span className="italic text-white text-[25px] font-bold">
            Shahid{" "}{" "}
          </span>
        </h1>
      </div>

      <div className="absolute top-0 right-0 pr-6 flex gap-5 mb-2">
        {Socials.map((social: any) => (
          <Image
            key={social.name}
            src={social.src}
            alt={social.name}
            width={28}
            height={28}
          />
        ))}
      </div>
    </div>
  );
};
export default Navbar;
       