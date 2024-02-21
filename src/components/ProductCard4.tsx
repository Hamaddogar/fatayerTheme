import React from "react";

const ProductCard4 = () => {
  return (
    <div className="relative bg-white py-6 px-6 shadow-xl">
      <div className=" text-white flex items-center absolute rounded-full py-4 px-4 translate-x-[20%] -top-[40%]">
        <img
          className="w-48 hover:scale-110 transition-all duration-[350ms]"
          src="https://www.sliderrevolution.com/wp-content/uploads/revslider/food-recipe-carousel/dish3-min.png"
        />
      </div>
      <div className="mt-12 text-center w-[95%] mx-auto flex flex-col gap-5 items-center justify-center">
        <p className="text-2xl font-semibold my-2">Healthy Berry Fruit Bowl</p>
        <div className="flex space-x-2 text-gray-400 text-lg">
          <p>Easy Preparation</p>
        </div>

        <div className="flex border-t w-full mt-5 border-gray-300 justify-between">
          <div className="my-2">
            <p className="font-semibold text-base mb-2">35 mins</p>
          </div>
          <div className="my-2">
            <p className="font-semibold text-base mb-2">200 Calories</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard4;
