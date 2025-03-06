import React from "react";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";

const App = () => {
  return (
    <section>
      <Navbar />
      <HeroSection/>
    </section>
  );
};

export default App;
