import { BiHome, BiSolidHome } from "react-icons/bi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { PiPlaylistBold, PiPlaylistLight } from "react-icons/pi";
import { MdLibraryMusic, MdOutlineLibraryMusic } from "react-icons/md";
import Link from "next/link";

const SideBar = () => {
  const links = [
    { name: "Home", href: "/", icon: <BiHome />, activeIcon: <BiSolidHome /> },
    {
      name: "Search",
      href: "/search",
      icon: <AiOutlineHeart />,
      activeIcon: <AiFillHeart />,
    },
    {
      name: "Library",
      href: "/",
      icon: <MdOutlineLibraryMusic />,
      activeIcon: <MdLibraryMusic />,
    },
  ];
  return (
    <div className="h-screen p-2 w-[10rem] hidden md:flex flex-col gap-y-4 pt-14 shadow-gray-900 shadow-md">
      {links.map((link) => (
        <Link key={link.name} href={link.href}>
          <div className="flex gap-2 text-xl font-semibold items-center text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg p-2">
            {link.icon}
            {link.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
