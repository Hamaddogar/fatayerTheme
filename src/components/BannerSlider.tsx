/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
const BannerSlider = ({ data }: any) => {
  return (
    <Swiper modules={[Autoplay]} autoplay={{ delay: 1700 }} loop>
      {data?.map((item: any, i: any) => (
        <SwiperSlide key={i} className="relative">
          <img className="w-full object-center" src={item?.file} />
          {item?.textStatus && (
            <h1
              style={item?.style}
              className="absolute text-2xl text-white w-1/2"
            >
              {item?.text}
            </h1>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BannerSlider;
