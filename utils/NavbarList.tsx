import { INavbarItem } from "@/types/INavbarItem";
import {
  RiHome6Fill,
  RiHome6Line,
  RiMessageFill,
  RiMessageLine,
} from "react-icons/ri";

export const NavbarList: INavbarItem[] = [
  {
    label: "Home",
    href: "/",
    icon: <RiHome6Line />,
    activeIcon: <RiHome6Fill />,
  },
  {
    label: "Message",
    href: "/message",
    icon: <RiMessageLine />,
    activeIcon: <RiMessageFill />,
  },
];
