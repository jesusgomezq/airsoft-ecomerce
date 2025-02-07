import React from "react";
import { logoNav } from "../..";
import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
  return (
    <section className="">
      <div>
        <div>
          <div className="flex items-center">
            <img className="" src={logoNav} alt="Logo Navbar" />
            <h3 className="uppercase font-bold text-2xl">combat airdoft</h3>
          </div>
          <div>
            <div className="group">
              <input 
              className="w-[200px] group-hover:w-[300px]"
              type="text" 
              placeholder="Buscar"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
