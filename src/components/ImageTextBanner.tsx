import React from "react";

const ImageTextBanner = ({ data }: { data: any }) => {
  return (
    <div className="w-full relative">
      <img src={data?.src} className="w-full " />
      {data?.textStatus && (
        <h1 style={data?.style} className="absolute text-2xl text-white w-1/2">
          {data?.text}
        </h1>
      )}
    </div>
  );
};

export default ImageTextBanner;
