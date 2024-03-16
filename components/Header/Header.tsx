"use client";
import { NavbarList } from "@/utils/NavbarList";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaLeaf } from "react-icons/fa";
import { RiSearch2Line } from "react-icons/ri";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const pathName = usePathname();

  return (
    <header className="bg-ctp-crust flex items-center justify-between px-3 py-2">
      <div className="flex items-center gap-5 justify-start flex-1">
        <Link href="/">
          <FaLeaf className="text-4xl" />
        </Link>
        <div className="flex items-center bg-ctp-base px-2 rounded-full">
          <input
            type="text"
            className="bg-transparent outline-none border-none py-2 px-2"
            placeholder="Search for anything"
          />
          <div className="p-2">
            <RiSearch2Line />
          </div>
        </div>
      </div>
      <nav className="flex items-center justify-center flex-1">
        {NavbarList.map((item, index) => (
          <Link href={item.href} key={index} className="px-10 relative">
            <span
              className={`${
                pathName === item.href ? "text-ctp-pink" : "text-ctp-text"
              } text-3xl`}
            >
              {pathName === item.href ? item.activeIcon : item.icon}
            </span>
            <div
              className={`absolute bg-ctp-pink h-1 -bottom-3 left-0 ${
                pathName === item.href && "w-full"
              }`}
            ></div>
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-5 justify-end flex-1">
        <Image
          src="https://avatar.iran.liara.run/public"
          alt="profile"
          width={40}
          height={40}
          className="rounded-full shadow-md"
        />
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
