import React, { useState } from "react";
import IosShareIcon from "@mui/icons-material/IosShare";
import QuantityManager from "./QuantityManager";
import AddToCart from "./AddToCart";
const Description = ({
  handleClose,
  id,
  name,
  price,
  desc,
}: {
  handleClose:any,
  id: number,
  name: string;
  price: number;
  desc?: string;
}) => {

  const [qty, setQty] = useState(1);



  return (
    <div className="flex w-full md:mx-8 font-semibold gap-6  flex-col">
      <h1 className="text-xl">{name}</h1>
      <span className="text-gray-400 font-normal ">{desc}</span>
      <div className="w-full pb-4 border-b border-gray-200 items-center flex justify-between">
        <h1 className=" font-semibold text-xl">{price} KWD</h1>
        <div className="flex items-center">
          <IosShareIcon />
          <span className="font-extralight  ">Share</span>
        </div>
      </div>
      <QuantityManager qty={qty} setQty={setQty} />
      <AddToCart handleClose={handleClose} quantity={qty} price={price} id={id} name={name} desc={desc} />
    </div>
  );
};

export default Description;
