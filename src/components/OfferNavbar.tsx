import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { useRouter } from "next/navigation";
import { sections } from "@/utils/response";
import { useSelector } from "react-redux";
const OfferNavbar = () => {
  const router = useRouter();
  const configrationState = useSelector((state: any) => state?.configration);
  const [adAppbar, setAdAppbar] = useState(sections[0].appBar.adAppBar);
  const { Slider, ...restOfStyles } = adAppbar;
  useEffect(() => {
    if (configrationState?.defaultData) {
      setAdAppbar(
        configrationState?.defaultData?.home?.sections?.appBar?.adAppBar
      );
    }
  }, [configrationState?.defaultData]);
  return (
    adAppbar.status && (
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 1700 }}
        loop
        className="w-full flex items-center justify-center"
      >
        {adAppbar?.Slider?.map((item, i) => (
          <SwiperSlide
            style={{
              ...restOfStyles,
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            key={i}
          >
            <div
              onClick={item?.href ? () => router.push(item?.href) : () => {}}
              className="flex cursor-pointer items-center w-full justify-center"
            >
              <img className="w-8 h-8" src={item?.imageURL} />
              <span>{item?.text}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    )
  );
};

export default OfferNavbar;
