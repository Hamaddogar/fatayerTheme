import React, { useEffect, useState } from "react";
import PaymentBox from "./PaymentBox";
import { useSelector } from "react-redux";

const Hero = () => {
  const [themeHeaderImage, setThemeHeaderImage] = useState<any>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const configrationState = useSelector((state: any) => state?.configration);
  const [backgroundPositionY, setBackgroundPositionY] = useState("50%");

  const handleMouseUp = () => {
    setIsMouseDown(false);
    document.body.style.cursor = "auto";
  };
  const handleMouseDown = () => {
    setIsMouseDown(true);
    document.body.style.cursor = "grabbing"; // Change cursor to grabbing
  };

  const handleMouseMove = (e: any) => {
    if (isMouseDown) {
      const boundingRect = e.currentTarget.getBoundingClientRect();
      const offsetY = e.clientY - boundingRect.top;
      const percentage = (offsetY / boundingRect.height) * 100;
      setBackgroundPositionY(`${percentage}%`);
    }
  };

  useEffect(() => {
    if (configrationState?.defaultData) {
      const imageValue =
        configrationState?.defaultData?.layout?.homePage?.header?.image;
      setThemeHeaderImage(imageValue || "");
    }
  }, [configrationState?.defaultData]);
  useEffect(() => {
    const handleMouseUpOutside = () => {
      setIsMouseDown(false);
      document.body.style.cursor = "auto"; // Restore default cursor
    };

    document.addEventListener("mouseup", handleMouseUpOutside);

    return () => {
      document.removeEventListener("mouseup", handleMouseUpOutside);
    };
  }, []);

  return (
    <div
      className={`bg-[url(${
        themeHeaderImage || "/heroImage.jpg"
      })] rounded-lg z-10 relative overflow-hidden h-[455px] bg-no-repeat bg-center bg-cover `}
      style={{
        backgroundImage: `url('${themeHeaderImage || "/heroImage.jpg"}')`,
        backgroundPositionY,
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div className="bg-black/20 z-0 hidden lg:flex w-full h-full "></div>
      <PaymentBox />
    </div>
  );
};

export default Hero;
