import Link from "next/link";
import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";

function Socials() {
  return (
    <div id="socials" className="flex flex-row gap-3 items-center">
      <Link href={"https://github.com/uditya69"} target="_blank">
        <FiGithub size={23} />
      </Link>
      <Link href={"mailto:hi@uditya.xyz"} target="_blank">
        <IoMailOutline size={30} />
      </Link>
      <Link href={"https://linkedin.com/in/uditya"} target="_blank">
        <SlSocialLinkedin size={23} />
      </Link>
      <Link href={"https://x.com/uditya04"} target="_blank">
        <RiTwitterXLine size={23} />
      </Link>
      <Link href={"https://instagram.com/am_uditya"} target="_blank">
        {" "}
        <AiOutlineInstagram size={29} />
      </Link>
      
    </div>
  );
}

export default Socials;
