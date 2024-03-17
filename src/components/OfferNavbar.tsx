/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
const OfferNavbar = () => {
  const router = useRouter();
  const [adAppbar, setAdAppbar] = useState<any>({
    width: "100%",
    height: "60px",
    backgroundColor: "white",
    AdText: "",
    href: "",
    textPosition: "",
    Slider: [
      {
        text: "Hamad",
        image:
          "https://1000logos.net/wp-content/uploads/2020/09/James-Bond-Logo-2012.png",
        href: "/search",
      },
      {
        text: "Hamad",
        image:
          "https://1000logos.net/wp-content/uploads/2020/09/James-Bond-Logo-2012.png",
        href: "/checkout",
      },
      {
        text: "Hamad",
        image:
          "https://1000logos.net/wp-content/uploads/2020/09/James-Bond-Logo-2012.png",
        href: "",
      },
    ],
  });
  const { Slider, ...restOfStyles } = adAppbar;

  const configrationState = useSelector((state: any) => state?.configration);

  useEffect(() => {
    if (configrationState?.defaultData) {
      // ----------- New AppBar Response Values -----------------
      const sections = configrationState?.defaultData?.home?.sections;
      // container

      if (sections?.appBar?.adAppBar && typeof sections?.appBar?.adAppBar === 'object') {
        setAdAppbar({ ...adAppbar, ...(sections?.appBar?.adAppBar) })
      }
    }
  }, [configrationState?.defaultData]);

  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 1700 }}
      loop
      className={`w-full flex items-center justify-center bg-[${adAppbar.bakgroundColor}]`}
    >
      {adAppbar?.slider?.map((item: any, i: any) => (
        <SwiperSlide
          style={{
            ...restOfStyles,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: adAppbar.bakgroundColor
          }}
          key={i}
        >
          <div
            onClick={item?.href ? () => router.push(item?.href) : () => { }}
            className={`flex cursor-pointer items-center w-full justify-${adAppbar.textPosition === 'left' ? 'start' : adAppbar.textPosition === 'right' ? 'end' : "center"}`}
          >
            <img className="w-8 h-8" src={item?.file} />
            <span>{item?.text}</span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default OfferNavbar;
