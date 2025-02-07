import React from "react";
import { logoNav } from "../..";
import { BsCart3 } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import UpperBaner from "./UpperBaner";


const Navbar = () => {
  return (
    <section
      //============== MARCA==========
      className="shadow-md bg-white dark:bg-gray-900 dark:text-white
    duration-300 relative z-40">
  <UpperBaner/>
    </section>
  );
};

export default Navbar;
