import React from "react";
import UpperNav from "./UpperNav";
import LowNav from "./LowNav";

const Navbar = () => {
  return (
    <section
      // |========> MARCA <=========|
      className="shadow-md bg-white  dark:text-white
    duration-300 relative z-40">
      {/* |============> NAVBAR SUPERIOR <==========| */}
      <UpperNav />
      {/* |=========> NAVBAR INFERIOR <============| */}
      <LowNav/>
    </section>
  );
};

export default Navbar;
