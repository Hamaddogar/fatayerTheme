import React, { useState } from "react";
import PaymentBox from "./Hero/PaymentBox";
import SearchHero from "./SearchHero";

const VideoBanner = () => {
  const [video, setVideo] = useState({
    src: "/demo-video.mp4",
    borderRadius: "40px",
    heading: "", //Explain Heading
    description: "", //Explain description
    layout: "1,2", //What Layout
  });
  const [searchHero, setSearchHero] = useState({
    topText: "WE ARE HERE TO MAKE",
    bottomText: "COOKING FUN AGAIN",
    placeholder: "What to cook today?",
  });
  return (
    <div
      style={{ borderRadius: video?.borderRadius }}
      className="video-container relative h-[600px] "
    >
      <video autoPlay loop muted className="w-full object-cover h-full">
        <source src={video?.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <PaymentBox /> */}
      <SearchHero searchHero={searchHero} />
    </div>
  );
};

export default VideoBanner;
