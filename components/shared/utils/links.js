import { BiHome, BiSolidHome } from "react-icons/bi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { MdLibraryMusic, MdOutlineLibraryMusic } from "react-icons/md";

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
    href: "/library",
    icon: <MdOutlineLibraryMusic />,
    activeIcon: <MdLibraryMusic />,
  },
];
export default links;
