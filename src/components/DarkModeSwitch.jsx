"use client";
import React from "react";
import { IoIosMoon } from "react-icons/io";
import { IoMdSunny } from "react-icons/io";
import { useTheme } from "next-themes";

export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const currTheme = theme === "system" ? systemTheme : theme;
  return (
    <div>
      {currTheme == "dark" ? (
        <IoMdSunny
          onClick={() => {
            setTheme("light");
          }}
          className="text-2xl cursor-pointer hover:text-amber-500"
        />
      ) : (
        <IoIosMoon
          onClick={() => {
            setTheme("dark");
          }}
          className="text-2xl cursor-pointer hover:text-amber-500"
        />
      )}
    </div>
  );
}
