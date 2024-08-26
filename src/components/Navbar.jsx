"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [genre, setGenre] = useState("");
  return (
    <div className="mb-8 flex justify-center gap-11 bg-amber-200 dark:bg-gray-500 p-2">
      <Link
        href={`/?genre=fetchTrending`}
        className={`lg:text-lg hover:text-amber-600 hover:underline hover:underline-offset-4 hover:decoration-2 font-semibold ${
          genre === "fetchTrending"
            ? "underline underline-offset-4 decoration-2 decoration-amber-600"
            : " "
        }`}
        onClick={() => setGenre("fetchTrending")}
      >
        Trending
      </Link>
      <Link
        href={`/?genre=fetchTopRated`}
        className={`lg:text-lg hover:text-amber-600 hover:underline hover:underline-offset-4 hover:decoration-2 font-semibold ${
          genre === "fetchTopRated"
            ? "underline underline-offset-4 decoration-2 decoration-amber-600"
            : " "
        }`}
        onClick={() => setGenre("fetchTopRated")}
      >
        Top Rated
      </Link>
    </div>
  );
}
