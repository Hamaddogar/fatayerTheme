import { ToggleButton } from "@mui/material";
import Image from "next/image";
import React from "react";
import TopMethods from "./PaymentMethod/TopMethods";
import PaymentItem from "./PaymentMethod/PaymentItem";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import GooglePayButton from "@google-pay/button-react";
import { useSelector } from "react-redux";

const PaymentMethod = () => {
  const globalState = useSelector((state: any) => state?.cartList);

  return (
    <div className="mt-5">
      <h1 className="font-semibold text-xl">Pay With</h1>
      <div className="w-full border mt-3 border-gray-200 rounded-lg p-4 bg-white">
        <TopMethods />
        <div className="flex flex-col w-full gap-4">
          <PaymentItem src={"/samsung-pay-.svg"} name="" />
          {/* <PaymentItem src={"/google-pay.png"} name="Google Pay" /> */}

          <GooglePayButton
            className="w-full border  border-gray-200 !shadow-none"
            buttonColor="white"
            environment="TEST"
            paymentRequest={{
              apiVersion: 2,
              apiVersionMinor: 0,
              allowedPaymentMethods: [
                {
                  type: "CARD",
                  parameters: {
                    allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                    allowedCardNetworks: ["MASTERCARD", "VISA"],
                  },
                  tokenizationSpecification: {
                    type: "PAYMENT_GATEWAY",
                    parameters: {
                      gateway: "example",
                      gatewayMerchantId: "exampleGatewayMerchantId",
                    },
                  },
                },
              ],
              merchantInfo: {
                merchantId: "12345678901234567890",
                merchantName: "Demo Merchant",
              },
              transactionInfo: {
                totalPriceStatus: "FINAL",
                totalPriceLabel: "Total",
                totalPrice: globalState?.total,
                currencyCode: "KWD",
                countryCode: "KW",
              },

              shippingAddressRequired: false,
            }}
            onLoadPaymentData={(paymentRequest) => {
              console.log("load payment data", paymentRequest);
            }}
          />

          <div className="w-full  border rounded-lg mt-3 border-gray-300 p-5 flex items-center justify-between ">
            <h3 className="font-extralight">
              For faster and more secure checkout. Save your card details.
            </h3>
            <h1 className="font-semibold ">
              {" "}
              <ToggleSwitch />
            </h1>
          </div>
          <PaymentItem src={"/cash-on-delivery.png"} name="Cash On Delivery" />
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
