import React from "react";
import UpperNav from "./UpperNav";
import { navLinkData } from "../../constants";
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section
      //============== MARCA==========
      className="shadow-md bg-white dark:bg-gray-900 dark:text-white
    duration-300 relative z-40">
      <UpperNav />
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-6">
          {navLinkData.map(({ id, title, link }) => (
            <li key={id}>
              <a 
              className="inline-block px-4 hover:text-gray-400 cursor-pointer duration-300"
              to={link}>
                <h2 className="text-xl">{title}</h2>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
