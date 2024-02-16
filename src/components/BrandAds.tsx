/* eslint-disable react/jsx-key */
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const BrandAds = () => {
  const router = useRouter();
  const [adDetails, setAdDetails] = useState([
    {
      textDetails: {
        heading: {
          value: "Heading 1",
          headingStyles: {
            display: "block",
            fontSize: "18px",
            color: "white",
            fontWeight: 800,
          },
        },

        desc: {
          value: "Hassaan OG 007",
          descStyles: {
            color: "white",
            display: "block",
            fontWeight: 100,
          },
        },
      },
      button: {
        value: "Shop Now",
        href: "/checkout",
        buttonStyles: {
          backgroundColor: "white",
          width: "100px",
          height: "30px",
          borderRadius: "20px",
        },
      },
      image: {
        url: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_737,c_limit/80cb385c-b6e5-42ef-bf52-8890e46d9df7/nike-just-do-it.jpg",
        imageStyles: {
          width: "100%",
          height: "500px",
        },
      },
    },
    {
      textDetails: {
        heading: {
          value: "Heading 3",
          headingStyles: {
            display: "block",
            fontSize: "18px",
            color: "white",
            fontWeight: 800,
          },
        },

        desc: {
          value: "Hassaan OG 007",
          descStyles: {
            color: "white",
            display: "block",
            fontWeight: 100,
          },
        },
      },
      button: {
        href: "/checkout",
        value: "Shop Now",
        buttonStyles: {
          backgroundColor: "white",
          width: "100px",
          height: "30px",
          borderRadius: "20px",
        },
      },
      image: {
        url: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_737,c_limit/088a0ec3-ff14-41aa-9188-84ce04064a33/nike-just-do-it.jpg",
        imageStyles: {
          width: "100%",
          height: "500px",
        },
      },
    },
  ]);
  return (
    <div className="flex  gap-4">
      {adDetails?.map((item: any,ind:any) => (
        <div className="relative" key={"card_"+ind}>
          <img style={item?.image?.imageStyles} src={item?.image?.url} />
          <div className="absolute bottom-6 left-6">
            <h1
              style={item?.textDetails?.heading?.headingStyles}
              className="font-bold text-white"
            >
              {item?.textDetails?.heading?.value}
            </h1>
            <p style={item?.textDetails?.desc?.descStyles}>
              {item?.textDetails?.desc?.value}
            </p>
            <button
              onClick={
                item?.button?.href
                  ? () => router.push(item?.button?.href)
                  : () => {}
              }
              style={item?.button?.buttonStyles}
            >
              {item?.button?.value}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BrandAds;
