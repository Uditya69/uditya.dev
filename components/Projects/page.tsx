import React from "react";
import Repos from "./Repos";

function page() {
  return (
    <div className="flex flex-col gap-5">
      <div className="text-xl font-semibold">Projects</div>
        <Repos />
    </div>
  );
}

export default page;
