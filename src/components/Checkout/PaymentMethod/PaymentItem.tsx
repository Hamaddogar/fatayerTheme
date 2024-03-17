import Image from "next/image";
import React from "react";

const PaymentItem = ({ name, src }: { name: string; src: string }) => {
  return (
    <div className="w-full hover:shadow-lg duration-300 mt-3   rounded-lg p-5 border flex items-center justify-between border-gray-300">
      <div className="flex gap-2 items-center">
        <Image alt="" width={50} height={50} src={src} />
        <h3 className="font-extralight text-sm">{name ? name : ""}</h3>
      </div>
      <h1 className="font-semibold">KWD 1300</h1>
    </div>
  );
};

export default PaymentItem;
