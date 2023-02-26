import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "../slider/SliderStyle.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

function Slider() {
  return (
    <div className="container">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img
            className="hero-slider"
            src="./img/slider/slider1.png"
            alt="slider"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="hero-slider"
            src="./img/slider/slider2.jpg"
            alt="slider"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="hero-slider"
            src="./img/slider/slider3.jpg"
            alt="slider"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="hero-slider"
            src="./img/slider/slider4.jpg"
            alt="slider"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
