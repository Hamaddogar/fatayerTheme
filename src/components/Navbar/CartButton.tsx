import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CartModalItem from "./CartModalItem";
import { useSelector } from "react-redux";
import Link from "next/link";
import useStyleConfig from "@/utils/styleConfig";

const CartButton = () => {
  const cartItems = useSelector((state: any) => state.cartList);
  const configrationState = useSelector((state: any) => state?.configration);

  const [cartStyle, setCartStyle] = useState<number>(Number(configrationState?.defaultData?.cart) || 1);

  useEffect(() => {
    if (configrationState?.defaultData) {
      const cartValue = configrationState?.defaultData?.cart;
      setCartStyle(Number(cartValue) || 1);
    }
  }, [configrationState?.defaultData])


  return (
    <Popover className="relative">
      <Popover.Button as="div">
        {cartStyle === 1 ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
          </svg>
        ) : cartStyle === 2 ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        ) : cartStyle === 3 ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute -right-1/2 z-60 mt-5 flex flex-col w-screen max-w-min px-4">
          <div className="w-64  shrink rounded-lg    bg-white  text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5">
            <div className=" overflow-y-scroll noscrollbar max-h-[50vh]">
              {cartItems?.selected?.length !== 0 ? (
                cartItems?.selected?.map((item: any) => (
                  <CartModalItem
                    quantity={item.quantity}
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                  />
                ))
              ) : (
                <div className=" shrink rounded-xl bg-white p-4 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5">
                  <p className="text-sm font-light text-center my-5">
                    Your cart is empty!
                  </p>
                </div>
              )}
            </div>
            {cartItems?.selected.length > 0 && (
              <>
                {/* Subtotal */}
                <div className="flex border-b border-gray-200 p-3  justify-between w-full">
                  <h3 className="text-lg font-semibold">Sub Total</h3>
                  <h3 className="text-lg font-semibold">
                    {cartItems?.total} KWD
                  </h3>
                </div>
                {/* Buttons */}
                <div className="flex gap-2 p-2 w-full">
                  <Link
                    href="/checkout"
                    className="w-full flex items-center justify-center rounded-custom uppercase text-white p-2 bg-primary "
                  >
                    View cart
                  </Link>

                  <button className="w-full rounded-md uppercase text-white p-2 bg-[#888787] ">
                    empty cart
                  </button>
                </div>
              </>
            )}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default CartButton;
