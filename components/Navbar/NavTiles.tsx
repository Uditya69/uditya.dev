import Link from "next/link";
import React from "react";

function NavTiles() {
  return (
    <div className="flex flex-col font-semibold gap-4 ">
      <Link
        href={"#about"}
        className=" hover:text-blue-400 transition duration-300"
      >
        About
      </Link>
      <Link
        href={"#projects"}
        className=" hover:text-blue-400 transition duration-300"
      >
        Projects
      </Link>
      <Link
        href={"#gallery"}
        className=" hover:text-blue-400 transition duration-300"
      >
        Photo Gallery
      </Link>
    </div>
  );
}

export default NavTiles;
