import React from "react";
import { useDispatch } from 'react-redux';
import { addToCart } from "../../../RTK/slices/cartReducer";
import { useRouter } from "next/router";
const AddToCart = ({ quantity, price, name, id, desc, handleClose }: any) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    let object = { id: id, price: price, desc: desc, name: name, quantity: quantity };
    dispatch(addToCart(object as any));
    handleClose();
  }

  return (
    <button onClick={handleAddToCart} className="w-full rounded-custom flex items-center justify-between p-3 text-white font-semibold bg-primary">
      <span className="">{quantity * price} KWD</span>
      <span>ADD TO CART</span>
    </button>
  );
};

export default AddToCart;
