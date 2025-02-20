import React from "react";
import {
  accesoriosData,
  marcadorasData,
  marcasData,
  partesAccData,
} from "../../constants";

const LowNav = () => {
  return (
    // |===============> MENU <===============|

    <div className="mx-auto py-4 bg-bgDesingColor">
      <ul className="flex justify-center items-center font-semibold">

          {/* |==========> MARCADORAS <==============| */}
        <li className="relative group px-5">
          <button className="hover:opacity-40 capitalize duration-300">
            marcadoras
          </button>
          <div
            className="absolute top-0 -left-48 transition group-hover:translate-y-5
            translate-y-0 opacity-0 invisible group-hover:opacity-100
            group-hover:visible duration-300 ease-in-out group-hover:transform z-50
            min-w-[560px] transform">
            <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
              <div
                className="w-10 h-10 bg-white transform rotate-45 absolute top-0
                z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem]
                duration-300 ease-in-out rounded-sm"></div>
              <div className="relative z-10">
                <div className="flex justify-center items-center">
                  <ul className="grid grid-cols-3 gap-1">
                    {marcadorasData.map(({ id, title, link }) => (
                      <li key={id} className="px-2 hover:opacity-50">
                        <a to={link}>
                          <h4
                            className="cursor-pointer text-gray-800 font-medium text-[14px] capitalize 
                            tracking-wide">
                            {title}
                          </h4>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>

        {/* |================> REPUESTROS <==============| */}
        <li className="relative group px-5">
          <button className="hover:opacity-40 capitalize duration-300">
            repuestos
          </button>
          <div
            className="absolute top-0 -left-48 transition group-hover:translate-y-5
            translate-y-0 opacity-0 invisible group-hover:opacity-100
            group-hover:visible duration-300 ease-in-out group-hover:transform z-50
            min-w-[470px] transform">
            <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
              <div
                className="w-10 h-10 bg-white transform rotate-45 absolute top-0
                z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem]
                duration-300 ease-in-out rounded-sm"></div>
              <div className="relative z-10">
                <div className="flex justify-center items-center">
                  <ul className="grid grid-cols-3 gap-1">
                    {partesAccData.map(({ id, title, link }) => (
                      <li key={id} className="px-2 hover:opacity-50">
                        <a to={link}>
                          <h4 className="cursor-pointer text-gray-800 font-medium text-[14px] capitalize tracking-wide">
                            {title}
                          </h4>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>

        {/* |================> ACCESORIOS <=================| */}
        <li className="relative group px-5">
          <button className="hover:opacity-40 capitalize duration-300">
            accesorios
          </button>
          <div
            className="absolute top-0 -left-48 transition group-hover:translate-y-5
            translate-y-0 opacity-0 invisible group-hover:opacity-100
            group-hover:visible duration-300 ease-in-out group-hover:transform z-50
            min-w-[410px] transform">
            <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
              <div
                className="w-10 h-10 bg-white transform rotate-45 absolute top-0
                z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem]
                duration-300 ease-in-out rounded-sm"></div>
              <div className="relative z-10">
                <div className="flex justify-center items-center">
                  <ul className="grid grid-cols-3 gap-1">
                    {accesoriosData.map(({ id, title, link }) => (
                      <li key={id} className="px-2 hover:opacity-50">
                        <a to={link}>
                          <h4 className="cursor-pointer text-gray-800 font-medium text-[14px] capitalize tracking-wide">
                            {title}
                          </h4>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>

        {/* |==============> MARCAS <=================| */}
        <li className="relative group px-5">
          <button className="hover:opacity-40 capitalize duration-300">
            marcas
          </button>
          <div
            className="absolute top-0 -left-48 transition group-hover:translate-y-5
            translate-y-0 opacity-0 invisible group-hover:opacity-100
            group-hover:visible duration-300 ease-in-out group-hover:transform z-50
            min-w-[370px] transform">
            <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
              <div
                className="w-10 h-10 bg-white transform rotate-45 absolute top-0
                z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem]
                duration-300 ease-in-out rounded-sm"></div>
              <div className="relative z-10">
                <div className="flex justify-center items-center">
                  <ul className="grid grid-cols-3 gap-1">
                    {marcasData.map(({ id, title, link }) => (
                      <li key={id} className="px-2 hover:opacity-50">
                        <a to={link}>
                          <h4 className="cursor-pointer text-gray-800 font-medium text-[14px] capitalize tracking-wide">
                            {title}
                          </h4>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default LowNav;
