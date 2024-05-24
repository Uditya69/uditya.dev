import React from "react";
import NameCard from "./NameCard";
import NavTiles from "./NavTiles";
import Socials from "./Socials";

function Navbar() {
  return (
    <div
      className="flex flex-col h-[80%] mt-[5%] justify-between 
    "
    >
      <div>
        <NameCard />
      </div>
      <div>
        <NavTiles />
      </div>
      <div>
        <Socials />
      </div>
    </div>
  );
}

export default Navbar;
