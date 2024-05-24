import React from "react";

function page() {
  return (
    <div className=" my-8 text-md flex flex-col gap-3">
      <div className="text-xl lg:block hidden font-semibold">About me</div>
      <div className="text-gray-300">
        <p className="mb-4">
          A self-driven developer embarking on a journey through the digital
          landscape, driven by a passion for creating visually captivating
          websites and pushing the boundaries of technology.
        </p>
        <p className="mb-4">
          With a background in Computer Science Engineering, I seamlessly blend
          technical expertise with creative ingenuity to bring digital visions
          to life.
        </p>
        <p className="mb-4">
          In my free time, I enjoy playing games and clicking pictures.
        </p>
        <p className="text-lg">
          Ready to collaborate and usher innovation to the forefront of digital
          evolution!
        </p>
      </div>
    </div>
  );
}

export default page;
