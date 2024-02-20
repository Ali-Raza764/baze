"use client";
import Image from "next/image";
import links from "./utils/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineGlobal, AiOutlineUser } from "react-icons/ai";
import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";

const SideBar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`max-w-[11rem] p-2 hidden md:flex flex-col justify-between items-center shadow-gray-800 shadow-sm relative transition-all duration-500 ${
        open ? "w-60" : "w-20"
      }`}
    >
      <div className="controller absolute top-6 -right-2 flex justify-between items-center duration-500">
        <BsArrowLeftShort
          className={`bg-white text-green-500 text-3xl 
        rounded-full absolute -right-3 top-9 border
        border-green-500 cursor-pointer duration-500 ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
      </div>
      <div className="cover">
        <div className="flex items-center mb-7">
          <Image src={"/assets/icon.svg"} alt="icon" width={50} height={50} />
          {open && <h2 className="text-2xl font-semibold font-sans">Baze</h2>}
        </div>
        <nav
          className={`gap-y-6 flex-props-c flex-col transition-all duration-500 `}
        >
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`flex gap-2 text-xl font-semibold items-center text-gray-500 hover:text-white hover:bg-gray-700 rounded-lg p-2 ${
                pathname === link.href && "text-green-500"
              } transition duration-500`}
            >
              {pathname === link.href ? link.activeIcon : link.icon}
              {open && link.name}
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex-props-c flex-col w-full">
        <div className="flex items-center text-xl font-semibold font-sans gap-2 duration-500">
          <AiOutlineGlobal size={30} /> {open && "Global"}
        </div>
        <div className="flex items-center text-xl font-semibold font-sans gap-2 duration-500">
          <AiOutlineUser size={30} />
          {open && "Profile"}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
