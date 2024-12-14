import React from "react";
import {
  Navigation,
  Pagination,
  A11y,
  EffectCube,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Slideshow = (props) => {
  return (
    <div id="slideshow">
      <div className="container">
        <div className="section-title text-center">
          <h2>Slideshow-Slideshow</h2>
        </div>
        <div className="swiper-container">
          <Swiper
            modules={[Navigation, Pagination, A11y, EffectCube, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            // navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
            effect={"fade"}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {props.data &&
              props.data.map((slide, id) => (
                <SwiperSlide key={id}>
                  {/* <img src={slide.img} alt={slide.name} /> */}
                  <div
                    className="col-md-3"
                    style={{ height: "300px", backgroundColor: "blue" }}
                  ></div>
                  <div
                    className="col-md-9"
                    style={{ height: "300px", backgroundColor: "red" }}
                  ></div>
                  <div
                    className="col-md-12"
                    style={{ height: "300px", backgroundColor: "white" }}
                  ></div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
