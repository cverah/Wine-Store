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
  const imgWines = [
    "https://res.cloudinary.com/dvxvdktvr/image/upload/v1702941596/samples/Wine-Store/slider/yvgfabipdmtnvwirkknd.webp",
    "https://res.cloudinary.com/dvxvdktvr/image/upload/v1702941596/samples/Wine-Store/slider/jddwqifsooebxxkhkgpk.webp",
    "https://res.cloudinary.com/dvxvdktvr/image/upload/v1702941596/samples/Wine-Store/slider/zd5tbvgw3o8rnaaal1hl.webp",
    "https://res.cloudinary.com/dvxvdktvr/image/upload/v1702941596/samples/Wine-Store/slider/xgcubey26zokzzan5lnr.webp",
    "https://res.cloudinary.com/dvxvdktvr/image/upload/v1702941596/samples/Wine-Store/slider/iszb1xwubo2fhvnjkkhc.webp",
    "https://res.cloudinary.com/dvxvdktvr/image/upload/v1702941597/samples/Wine-Store/slider/hwgotkpexvowsjoyjfig.webp",
    "https://res.cloudinary.com/dvxvdktvr/image/upload/v1702941597/samples/Wine-Store/slider/ebkhyfyhnvhdvulxqqvl.webp",
    "https://res.cloudinary.com/dvxvdktvr/image/upload/v1702941597/samples/Wine-Store/slider/lmaczupodtdnpitych73.webp",
    // "https://res.cloudinary.com/dvxvdktvr/image/upload/v1702941597/samples/Wine-Store/slider/rk9lrkqixfz5qfr3mopg.webp",
  ];
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {imgWines.map((imgWine, index) => (
          <SwiperSlide key={index}>
            <img src={imgWine} alt={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SliderWine;
