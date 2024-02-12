"use client";

import { usePathname } from "next/navigation";
import links from "./utils/links";
import Link from "next/link";

const BottomBar = () => {
  const pathname = usePathname();

  return (
    <div className="w-full h-[10vh] md:hidden bg-black flex-props-b px-2 p-1">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={`flex-props-c gap-x-2 text-lg font-sans font-semibold ${pathname === link.href && 'text-green-500'}`}
        >
          {pathname === link.href ? link.activeIcon : link.icon}
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default BottomBar;
