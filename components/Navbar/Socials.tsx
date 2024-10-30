import Link from "next/link";
import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";

function Socials() {
  return (
    <div id="socials" className="flex flex-row gap-3 items-center text-gray-400 ">
      <Link href={"https://github.com/uditya69"} target="_blank" className="hover:text-gray-100 transition duration-500">
        <FiGithub size={20} />
      </Link>
      <Link href={"mailto:hi@uditya.dev"} target="_blank" className="hover:text-gray-100 transition duration-500">
        <IoMailOutline size={25} />
      </Link>
      <Link href={"https://linkedin.com/in/uditya"} target="_blank" className="hover:text-gray-100 transition duration-500">
        <SlSocialLinkedin size={20} />
      </Link>
      <Link href={"https://x.com/uditya04"} target="_blank" className="hover:text-gray-100 transition duration-500">
        <RiTwitterXLine size={20} />
      </Link>
      <Link href={"https://www.instagram.com/the_noob_clicker/"} target="_blank" className="hover:text-gray-100">
        {" "}
        <AiOutlineInstagram size={25} />
      </Link>
      
    </div>
  );
}

export default Socials;
