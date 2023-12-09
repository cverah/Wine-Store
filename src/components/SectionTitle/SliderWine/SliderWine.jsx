//import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const SliderWine = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 102500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/dvxvdktvr/image/upload/v1702055658/samples/Wine-Store/vqxsy4doxcmucy4ai2mk.jpg"
            alt="img-1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/dvxvdktvr/image/upload/v1702055661/samples/Wine-Store/aly1ouokieezlplop8md.jpg"
            alt="img-2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/dvxvdktvr/image/upload/v1702055661/samples/Wine-Store/ruxqb3dwq9usimvpen5m.jpg"
            alt="img-3"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SliderWine;
