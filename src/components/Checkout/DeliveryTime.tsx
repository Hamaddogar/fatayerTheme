import React from "react";
import { deliveryTimeConstants } from "../../../constants/constants";
import CustomRadio from "../CustomRadio/CustomRadio";

const DeliveryTime = () => {
  return (
    <div className="bg-white mb-5 rounded-lg w-full">
      <div className="text-end border-b p-5 border-gray-200 ">
        <span className="font-semibold text-base">Switch To:</span>
        <span className="font-extralight ml-1 underline text-primary">
          Pickup
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-semibold">Delivery Time:</h3>
        <div className="mt-2">
          {deliveryTimeConstants.map((item) => (
            <div className="flex items-center gap-2" key={item}>
              <CustomRadio item={item} />
              <span
                className={`${item === "Choose Delivery Time" ? "text-gray-300" : ""
                  }`}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeliveryTime;
