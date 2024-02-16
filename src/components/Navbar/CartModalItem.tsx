import Image from "next/image";
import React from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useDispatch } from "react-redux";
import { remove } from "../../../RTK/slices/cartReducer";

const CartModalItem = ({
  name,
  price,
  quantity,
  id,
}: {
  name?: string;
  quantity?: number;
  price?: number;
  id?: number;
}) => {
  const dispatch = useDispatch();

  return (
    <div className="flex border-b px-4 pt-4 border-gray-200 pb-3 items-center gap-4">
      <div className="border border-gray-300">
        <Image width={48} height={48} alt="cart-product" src="/p2.png" />
      </div>
      <div className="flex w-full flex-col gap-1">
        <span className="font-semibold">{name}</span>
        <div className="flex justify-between items-center ">
          <span className="font-light">
            {quantity} x {price} KWD
          </span>
          <div onClick={() => dispatch(remove({ id: id } as any))}>
            <DeleteOutlineOutlinedIcon sx={{ color: "red" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModalItem;
