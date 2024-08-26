import Link from "next/link";
import React from "react";

export default function MenuItem({ title, url, icon }) {
  return (
    <div>
      <Link href={url} className="hover:text-amber-500">
        <p className="sm:hidden text-2xl">{icon}</p>
        <p className="uppercase hidden sm:inline ">{title}</p>
      </Link>
    </div>
  );
}
