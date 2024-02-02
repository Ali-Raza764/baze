import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="h-14 flex-props-b p-3 shadow-gray-900 shadow-md">
      <div className="flex-props-b">
        <Image src={"/assets/icon.svg"} alt="icon" width={50} height={50} />
        <h2 className="text-2xl font-semibold font-sans">Baze</h2>
      </div>
      <div className="search">
        <input type="text" placeholder="Search" className="outline-none bg-gray-600 p-2 text-xl rounded-2xl w-[26rem] hidden md:flex" />
      </div>
      <div className="controls flex-props-b gap-5">
        <div className="theme h-8 w-8 bg-black rounded-full"></div>
        <div className="theme h-8 w-8 bg-black rounded-full"></div>
      </div>
    </div>
  );
};

export default Header;
