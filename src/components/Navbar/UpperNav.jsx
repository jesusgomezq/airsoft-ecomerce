import React from "react";
import { logoNav } from "../../assets";
import { BsCart3 } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";

const UpperNav = () => {
  return (
    <section className="py-2 bg-bgBodyColor px-3">
      <div className="container flex justify-between items-center">
        <div className="flex items-center font-bold text-2xl sm:text-3xl">
          <img className="w-20" src={logoNav} alt="Logo Navbar" />
          <h3 className="font-titleFont capitalize">combat airsoft</h3>
        </div>

        {/* |============> BUSCADOR <==========| */}
        <div className="flex gap-4 items-center">
          <div className="group relative hidden sm:block">
            <input
              className="w-[200px] group-hover:w-[300px] transition-all duration-300
                  rounded-full border border-gray-400 px-2 py-1 focus:outline-none
                  focus:border-1 focus:border-bgDesingColor sm:w-[200px]"
              type="text"
              placeholder="Buscar"
            />
            <span
              className="absolute text-gray-500 group-hover:text-bgBodyColor
                  top-1/2 -translate-y-1/2 right-3 text-xl">
              <IoIosSearch />
            </span>
          </div>

          {/* |===============> CARRITO DE COMPRAS <===========| */}
          <button
            onClick={() => alert("Orden no autorizaada")}
            className="bg-gradient-to-r from-bgBodyColor to-bgDesingColor
              transition-all duration-300 text-white py-1 px-4 rounded-full flex items-center
              gap-3 group">
            <span className="capitalize group-hover:block hidden transition-all duration-300">
              orden
            </span>
            <span className="text-3xl text-white drop-shadow-sm cursor-pointer">
              <BsCart3 />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default UpperNav;
