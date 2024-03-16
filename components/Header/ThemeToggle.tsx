import { useTheme } from "next-themes";
import React from "react";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className="w-10 h-10 border-2 border-ctp-text rounded-md text-2xl flex items-center justify-center hover:bg-ctp-text hover:text-ctp-base transition-all duration-300 ease-in-out"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle Dark Mode"
    >
      {theme === "dark" ? <RiSunFill /> : <RiMoonClearFill />}
    </button>
  );
};

export default ThemeToggle;
