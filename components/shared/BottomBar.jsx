import { BiHome, BiSolidHome } from "react-icons/bi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { PiPlaylistBold, PiPlaylistLight } from "react-icons/pi";
import { MdLibraryMusic, MdOutlineLibraryMusic } from "react-icons/md";
import Link from "next/link";

const BottomBar = () => {
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
  return <div className="w-full h-10 md:hidden bg-black flex-props-b px-2 p-1">
    {
      links.map((link) => (
        <Link key={link.name} href={link.href} className="flex-props-c gap-x-2 text-lg font-sans font-semibold">{link.icon}{link.name}</Link>
      ))
    }
  </div>;
};

export default BottomBar;
