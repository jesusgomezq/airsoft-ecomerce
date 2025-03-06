import React from "react";
import Slider from "react-slick";
import { heroImages } from "../../constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <section
      className="min-h-[550px]
    sm:min-h-[480px]  flex justify-center">
      {/* |==============> IMAGEN DE LA HERO <==============| */}
      <Slider {...settings} className="w-full">
        {heroImages.map(({ id, image }) => (
          <div key={""}>
            <img src={image} alt="" />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSection;
