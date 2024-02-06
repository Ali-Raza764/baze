"use client";
import Image from "next/image";
import links from "./utils/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineGlobal, AiOutlineUser } from "react-icons/ai";

const SideBar = () => {
  const pathname = usePathname();

  return (
    <div className="h-screen p-2 w-[10rem] hidden md:flex flex-col justify-between shadow-gray-900 shadow-md">
      <div className="cover">
        <div className="flex items-center mb-7">
          <Image src={"/assets/icon.svg"} alt="icon" width={50} height={50} />
          <h2 className="text-2xl font-semibold font-sans">Baze</h2>
        </div>
        <nav className="gap-y-6 flex flex-col">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`flex gap-2 text-xl font-semibold items-center text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg p-2 ${
                pathname === link.href && "text-green-500"
              }`}
            >
              {pathname === link.href ? link.activeIcon : link.icon}
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      <div className="bottom flex flex-col w-full sticky bottom-0">
        <div className="flex items-center text-xl font-semibold font-sans gap-2">
          <AiOutlineGlobal /> Global
        </div>
        <div className="flex items-center text-xl font-semibold font-sans gap-2">
          <AiOutlineUser />
          User
        </div>
      </div>
    </div>
  );
};

export default SideBar;
