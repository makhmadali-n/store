import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import "./AboutStyle.css";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";
function AboutSlider({ foundProduct }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="slider-about__wrapper">
      <div className="about-slider__wrapper">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          navigation={false}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <img className="about-slider__img" src={foundProduct.img1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="about-slider__img" src={foundProduct.img2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="about-slider__img" src={foundProduct.img3} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="wrapper-slider__about">
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="img-slider__wrapper" src={foundProduct.img1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img-slider__wrapper" src={foundProduct.img2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img-slider__wrapper" src={foundProduct.img3} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default AboutSlider;
