import React from "react";
import PaymentBox from "./Hero/PaymentBox";
import SearchHero from "./SearchHero";

const ImageTextBanner = ({ data }: { data: any }) => {
  return (
    <div className="w-full relative">
      <img
        src={data?.src}
        className="w-full object-cover"
        style={{ height: data?.style?.height }}
      />
      {data?.textStatus && (
        <h1 style={data?.style} className="absolute text-2xl text-white w-1/2">
          {data?.text}
        </h1>
      )}
      {/* <PaymentBox /> */}
      <SearchHero />
    </div>
  );
};

export default ImageTextBanner;
