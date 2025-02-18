import React from "react";

import { Carousel } from "react-responsive-carousel";
import { imgData } from "./img/data";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import carouselStyle from "./carouselEffect.module.css";

const CarouselEffect = () => {
  return (
    <>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {imgData.map((singleImgLink, index) => {
          return (
            <img
              key={index}
              src={singleImgLink}
              alt={`carousel-image-${index}`}
            />
          );
        })}
      </Carousel>
      <div className={carouselStyle.hero__img}></div>
    </>
  );
};

export default CarouselEffect;
