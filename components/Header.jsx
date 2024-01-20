import React from "react";
import { FaFacebook, FaInstagram, FaPhone, FaYoutube } from "react-icons/fa";

const Header = () => {
  return (
    <div className="container mx-auto px-4 pt-4 flex justify-between">
      <span className="flex items-center gap-1">
        <FaPhone className="text-primary"></FaPhone> +888 777 788
      </span>
      <div className="flex gap-4">
        <span className=" flex items-center gap-3 text-lg text-orange-400">
          <FaFacebook></FaFacebook>
          <FaYoutube></FaYoutube>
          <FaInstagram></FaInstagram>
        </span>
        <button class="smky-btn3 relative hover:text-[#778464] py-2 px-3 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#abd373] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-gray-300">LOGIN</button>
      </div>
    </div>
  );
};

export default Header;
