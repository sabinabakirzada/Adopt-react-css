import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import "./Body.css";

const Body = () => {
  return (
    <div>
      <slider>
        <>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className="slide1">
              <div className="slide1-wr">
                <span>Celine Richardson, 12 yrs. old</span>
                <h1>NEEDS A CARING PARENTS</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  nemo eaque quisquam eum accusantium dicta pariatur, rem sequi
                  odit enim libero eos suscipit ex quasi voluptatum totam eius
                  repellat nisi.
                </p>
                <button>Adopt Her Now</button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide2">
              <div className="slide1-wr slide2-wr">
                <span>Mark Rodriguez, 12 yrs. old</span>
                <h1>NEEDS A LOVING PARENTS</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  nemo eaque quisquam eum accusantium dicta pariatur, rem sequi
                  odit enim libero eos suscipit ex quasi voluptatum totam eius
                  repellat nisi.
                </p>
                <button>Adopt Him Now</button>
              </div>
            </SwiperSlide>
          </Swiper>
        </>
      </slider>
    </div>
  );
};

export default Body;
