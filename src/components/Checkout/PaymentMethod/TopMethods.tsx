import ToggleSwitch from "@/components/ToggleSwitch/ToggleSwitch";
import { ToggleButton } from "@mui/material";
import Image from "next/image";
import React from "react";
import StripeCheckout from "react-stripe-checkout";
const TopMethods = () => {
  const onToken = (token: any) => {
    console.log(token);
  };
  return (
    <div className="border rounded-lg mb-3 border-gray-300">
      <div className="w-full hover:shadow-lg duration-300 p-5 flex items-center justify-between ">
        <div className="flex text-sm font-extralight gap-2 items-center">
          <Image alt="" width={40} height={40} src="/knet.png" />
          <h3>KNET</h3>
        </div>
        <h1 className="font-semibold  ">KWD 1300</h1>
      </div>
      {/* <StripeCheckout
        token={onToken}
        stripeKey={
          "pk_test_51OiJqOSBRf3R5sNkOpBgUnMBF3v7BAwjonVvuqqQhCkt8vHD3ULWmF56Shtl7hE7wLFHVetlhRGGVxBVrG8CQHz800bZ7mq20P"
        }
      > */}
      <div className="w-full hover:shadow-lg duration-300 p-5 border-y border-gray-200 flex items-center justify-between ">
        <div className="flex font-extralight gap-2 items-center">
          <Image alt="" width={40} height={40} src="/visa.png" />
          <h3 className="text-sm">Enter card details</h3>
        </div>
      </div>
      {/* </StripeCheckout> */}
      <div className="w-full text-sm font-extralight  p-5 flex items-center justify-between ">
        <h3>For faster and more secure checkout. Save your card details.</h3>
        <h1 className="font-semibold">
          {" "}
          <ToggleSwitch />
        </h1>
      </div>
    </div>
  );
};

export default TopMethods;
