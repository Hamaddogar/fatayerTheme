'use client';
import Image from "next/image";
import React from "react";

import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useDispatch } from 'react-redux';
import { minus, plus, remove } from "../../../../RTK/slices/cartReducer";
import p2 from '../../../../public/p2.png';

const CartItem = ({ name, price, quantity, id }: { name: string; price: number, quantity: number, id: number }) => {
  const dispatch = useDispatch();
  // console.log(id);

  return (
    <div className="flex gap-2  p-1  items-center">
      <div>
        <Image width={100} height={100} alt="p2" src={p2} />
      </div>
      <div className="w-full">
        <h2 className="line-clamp-1">{name}</h2>
        <p>{price} KWD</p>
        <div className="flex items-center w-full justify-between">
          {/* Quantity */}
          <div className="border rounded-md flex gap-3">
            <span className="px-2 cursor-pointer" onClick={() => dispatch(minus({ id: id } as any))} >-</span>
            <span>{quantity}</span>
            <span className="px-2 cursor-pointer" onClick={() => dispatch(plus({ id: id } as any))} >+</span>
          </div>
          {/* Bin */}
          <div className="flex text-red-600 items-center cursor-pointer" onClick={() => dispatch(remove({ id: id } as any))} >
            <DeleteOutlineOutlinedIcon />
            <span className="text-xs font-light ">Remove</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
