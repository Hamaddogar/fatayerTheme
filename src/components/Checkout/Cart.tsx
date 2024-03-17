import React from "react";
import CartItem from "./Cart/CartItem";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import Link from "next/link";
import { useSelector } from "react-redux";
const Cart = () => {
  const globalState = useSelector((state: any) => state?.cartList);

  // const cartItem = [
  //   { name: "Dewaniya Box", price: 8.95 },
  //   { name: "Dewaniya Box", price: 8.95 },
  //   { name: "Dewaniya Box", price: 8.95 },
  //   { name: "Dewaniya Box", price: 8.95 },
  // ];
  return (
    <div className="flex-[0.3]  max-md:mt-4 ">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-xl font-semibold mb-1">Cart</h1>
        <h3 className="flex items-center cursor-pointer hover:text-[#f9794e] text-primary gap-1">
          <KeyboardBackspaceOutlinedIcon sx={{ fontSize: 18 }} />
          <Link href="/">
            <span className="font-semibold underline ">Continue Shopping</span>
          </Link>
        </h3>
      </div>
      <div className="bg-white p-3 mt-4 flex flex-col gap-3 rounded-t-lg">
        {globalState.selected?.map((item: any) => (
          <CartItem
            key={item.id}
            id={item.id}
            quantity={item.quantity}
            name={item.name}
            price={item.price}
          />
        ))}

        <div className="border-y font-extralight text-lg py-4 border-gray-200 flex items-center justify-between">
          <span>Cart Total</span>
          <span>{globalState?.total} KWD</span>
        </div>
        <div className=" font-semibold text-lg py-4  flex items-center justify-between">
          <span>Total</span>
          <span>{globalState?.total} KWD</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
