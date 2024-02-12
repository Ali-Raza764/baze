import { BiHome, BiSolidHome } from "react-icons/bi";
import { AiOutlineHeart, AiFillHeart, AiOutlineSearch } from "react-icons/ai";
import {
  MdLibraryMusic,
  MdOutlineLibraryMusic,
  MdSearch,
} from "react-icons/md";

const links = [
  {
    name: "Home",
    href: "/",
    icon: <BiHome size={30} />,
    activeIcon: <BiSolidHome size={30} />,
  },
  {
    name: "Search",
    href: "/search",
    icon: <AiOutlineSearch size={30} />,
    activeIcon: <MdSearch size={30} />,
  },
  {
    name: "Library",
    href: "/library",
    icon: <MdOutlineLibraryMusic size={30} />,
    activeIcon: <MdLibraryMusic size={30} />,
  },
];
export default links;
