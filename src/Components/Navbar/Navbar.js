import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const Navbar = () => {
  return (
    <div className="flex bg-gradient-to-r hover:from-green-400 hover:to-blue-500 from-pink-500 to-sky-300 rounded text-xl font-medium text-white  justify-center p-4 ">
      <CustomLink className=" hover:text-black p-8 text-xl" to="/">
        Home
      </CustomLink>
      <CustomLink className="p-8 text-xl hover:text-black " to="/Reviews">
        Reviews
      </CustomLink>
      <CustomLink className=" hover:text-black p-8 text-xl" to="/Dashboard">
        Dashboard
      </CustomLink>
      <CustomLink className="hover:text-black p-8 text-xl" to="/Blogs">
        Blogs
      </CustomLink>
      <CustomLink className=" hover:text-black p-8 text-xl" to="/About">
        About
      </CustomLink>
    </div>
  );
};

export default Navbar;
