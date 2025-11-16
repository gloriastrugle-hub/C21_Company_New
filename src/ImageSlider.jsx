import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import gambar SPA
import spa1 from "./assets/bawah.jpg";
import spa2 from "./assets/refleksi.jpg";
import spa3 from "./assets/roomcouple.jpg";
import spa4 from "./assets/singleroom.jpg";

const ImageSlider = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation={true}
    >
      <SwiperSlide>
        <img src={spa1} alt="Spa Bawah" style={{ width: "100%" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={spa2} alt="Spa Refleksi" style={{ width: "100%" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={spa3} alt="Spa Room Couple" style={{ width: "100%" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={spa4} alt="Spa Single Room" style={{ width: "100%" }} />
      </SwiperSlide>
    </Swiper>
  );
};

export default ImageSlider;
