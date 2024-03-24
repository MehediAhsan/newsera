import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTwitter, FaYoutube } from "react-icons/fa";

const Header = () => {
  const date = new Date();
  return (
    <div className="container mx-auto px-4 pt-4 flex justify-between">
      <span className="flex items-center gap-1">
        {/* <FaPhone className="text-primary"></FaPhone> +888 777 788 */}
        {date.toUTCString().slice(0,16)}
      </span>
      <div className="flex gap-4">
        <div class="card">
          <a href="#" class="socialContainer containerOne">
            <FaInstagram class="socialSvg instagramSvg"></FaInstagram>
          </a>

          <a href="#" class="socialContainer containerTwo">
            <FaTwitter class="socialSvg twitterSvg" /></a>

          <a href="#" class="socialContainer containerThree">
            <FaLinkedin class="socialSvg"></FaLinkedin>
          </a>

          <a href="#" class="socialContainer containerFour">
            <FaFacebook class="socialSvg" ></FaFacebook>
          </a>
        </div>


        <Link href="/login" class="smky-btn3 relative hover:text-[#f5f5f4] py-2 px-3 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-primary after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-gray-100">LOGIN</Link>
      </div>
    </div>
  );
};

export default Header;
