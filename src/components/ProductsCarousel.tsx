import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { carouselData } from "@/constants/dummyData";
import "swiper/css";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ProductCard } from ".";
import PrCard from "./PrCard";
import "./carousel.css";
import ProductCard2 from "./ProductCard2";
import ProductCard3 from "./ProductCard3";
import ProductCard4 from "./ProductCard4";

const ProductsCarousel = () => {
  return (
    <Swiper
      direction={"horizontal"} // Set direction to horizontal
      spaceBetween={50}
      slidesPerView={4}
      loop
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Navigation]}
      centeredSlides
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper: any) => console.log(swiper)}
      className="mt-32 min-h-full"
    >
      {carouselData.map((item, i) => (
        <SwiperSlide className="min-h-full pt-32" key={i}>
          <ProductCard3 />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductsCarousel;
