import React from "react";
import MenuItem from "./MenuItem";
import { IoIosHome } from "react-icons/io";
import { FaCircleInfo } from "react-icons/fa6";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-6 px-9 max-w-7xl mx-auto">
      <div className="flex justify-start gap-8">
        <MenuItem title="Home" url="/" icon={<IoIosHome />} />
        <MenuItem title="About" url="/about" icon={<FaCircleInfo />} />
      </div>
      <Link href="/" className="flex items-center gap-1">
        <span className="bg-amber-300 px-2 py-1 text-2xl font-bold rounded-md">
          IMDB
        </span>
        <span className="hidden sm:inline">Clone</span>
      </Link>
    </div>
  );
}
