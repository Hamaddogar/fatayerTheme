"use client";
import Cart from "@/components/Checkout/Cart";
import DeliveryDetails from "@/components/Checkout/DeliveryDetails";
import DeliveryTime from "@/components/Checkout/DeliveryTime";
import Navbar from "@/components/Checkout/Navbar";
import PaymentMethod from "@/components/Checkout/PaymentMethod";
import SpecialRequests from "@/components/Checkout/SpecialRequests";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import GooglePayButton from "@google-pay/button-react";

const Checkout = () => {
  const router = useRouter();
  const items = useSelector((state: any) => state.cartList.selected);
  useEffect(() => {
    if (items.length == 0) {
      router.push("/");
    }
  }, [items]);
  return (
    <div>
      <Navbar />
      <div className="md:flex  flex-row-reverse max-lg:px-3 gap-8 rounded-lg max-w-[1330px] mx-auto items-start mt-32">
        <Cart />
        <div className="flex-[0.7]">
          <h1 className="text-xl  font-semibold mb-5">Delivery</h1>
          <DeliveryTime />
          <DeliveryDetails />
          <SpecialRequests />
          <PaymentMethod />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
