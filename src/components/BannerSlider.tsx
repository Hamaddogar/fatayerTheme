import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import PaymentBox from "./Hero/PaymentBox";
import { sections } from "@/utils/response";
import { Navigation } from "swiper/modules";
import "swiper/css/effect-fade";
import { EffectFade } from "swiper/modules";
import { useSelector } from "react-redux";
import SearchHero from "./SearchHero";
const BannerSlider = ({ data }: any) => {
  const bannerType = sections[0]?.banner?.bannerBackground?.sliderType;
  console.log(bannerType);
  return (
    <Swiper
      modules={
        bannerType === "Manual"
          ? [Navigation]
          : bannerType === "Auto"
          ? [Autoplay]
          : [EffectFade, Autoplay]
      }
      className="relative"
      effect={(bannerType === "Fade" && "fade") || ""}
      navigation={bannerType === "Manual"}
      autoplay={{ delay: 1200 }}
      loop
    >
      {data?.map((item: any, i: any) => (
        <SwiperSlide key={i} className="relative">
          <img className="w-full object-center" src={item?.src} />
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
      {/* <PaymentBox />
       */}
      <SearchHero />
    </Swiper>
  );
};

export default BannerSlider;
