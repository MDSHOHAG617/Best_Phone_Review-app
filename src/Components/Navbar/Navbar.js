import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const Navbar = () => {
  return (
    <div className="flex font-bold p-4 bg-green-300 justify-center ">
      <CustomLink className="p-8 text-xl" to="/">
        Home
      </CustomLink>
      <CustomLink className="p-8 text-xl" to="/Reviews">
        Reviews
      </CustomLink>
      <CustomLink className="p-8 text-xl" to="/Dashboard">
        Dashboard
      </CustomLink>
      <CustomLink className="p-8 text-xl" to="/Blogs">
        Blogs
      </CustomLink>
      <CustomLink className="p-8 text-xl" to="/About">
        About
      </CustomLink>
    </div>
  );
};

export default Navbar;
