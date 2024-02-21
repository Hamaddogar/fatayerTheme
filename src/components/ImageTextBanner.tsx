import React from "react";
import PaymentBox from "./Hero/PaymentBox";

const ImageTextBanner = ({ data }: { data: any }) => {
  return (
    <div className="w-full relative">
      <img
        // width={data?.style?.width}
        // height={data?.style?.height}
        src={data?.src}
        className="w-full object-cover"
        style={{ width: data?.style?.width, height: data?.style?.height }}
      />
      {data?.textStatus && (
        <h1 style={data?.style} className="absolute text-2xl text-white w-1/2">
          {data?.text}
        </h1>
      )}
      <PaymentBox />
    </div>
  );
};

export default ImageTextBanner;
