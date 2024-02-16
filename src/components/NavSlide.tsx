"use client";
import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  ArrowLeftIcon,
  ChevronLeftIcon,
  PhoneIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";

const NavSlide = ({ open, setOpen }: any) => {

  const [themeLogo, setthemeLogo] = useState<any>(null)
  const configrationState = useSelector((state: any) => state?.configration);

  useEffect(() => {
    if (configrationState?.defaultData) {
      // const logoValue = configrationState?.defaultData?.builderId?.logo;
      let logoValue = configrationState?.defaultData?.logo;
      logoValue = logoValue !== "empty value" ? logoValue : ""
      setthemeLogo(logoValue || "");
    }
  }, [configrationState?.defaultData])

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden z-60"
        onClose={() => setOpen(false)}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-75"
            leave="ease-in-out duration-300"
            leaveFrom="opacity-75"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-black bg-opacity-75" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10">
              <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                <div className="flex h-full flex-col bg-white py-6 shadow-xl overflow-y-auto hide-scrollbar">
                  <div className="px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-md hover:bg-gray-50 border-0"
                      >
                        <ChevronLeftIcon className="h-6 w-6" />
                      </button>
                      <div className="w-16 h-16 relative">
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            position: "absolute",
                            inset: "0px",
                          }}
                        >
                          <Image
                            alt="logo"
                            src={themeLogo || "/logo.jpg"}
                            width={90}
                            height={120}
                            style={{ height: "60px", objectFit: "cover" }}
                          />
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="rounded-lg bg-gray-100 px-3.5 py-2.5 m-1 text-sm font-semibold text-gray-900 shadow-md hover:bg-gray-50 ring-1 ring-inset ring-gray-200"
                      >
                        <span className="text-sm">ﻉ</span>
                      </button>
                    </div>
                  </div>
                  <div className="relative my-5 px-4 sm:px-2">
                    <div className="rounded-lg bg-gray-100 px-3.5 py-5 w-100 ring-1 ring-inset ring-gray-200">
                      <h3 className="text-md flex items-center gap-2">
                        <span>
                          <QuestionMarkCircleIcon className="w-6 h-6" />
                        </span>
                        Need help?
                      </h3>
                      <div className="grid grid-cols-2 my-3">
                        <div className="mr-5">
                          <div className="rounded-md text-center col-span-1 bg-white px-4 py-4 ring-1 ring-inset ring-gray-300">
                            <PhoneIcon className="h-5 w-5 m-auto mb-2" />
                            <p className="text-xs">Call US</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-3 px-4 sm:px-2 pb-3">
                    <div className="flex">
                      <span className="px-1 font-semibold text-sm">
                        Enable Quick &amp; Secure Checkouts
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Image
                        alt="card"
                        src="/cards.png"
                        width={25}
                        height={25}
                      />
                      <span className="px-1 text-xs">Save your cards</span>
                    </div>
                    <div className="flex items-center">
                      <Image
                        alt="card"
                        src="/location.png"
                        width={25}
                        height={25}
                      />
                      <span className="px-1 text-xs">Save your addresses</span>
                    </div>
                    <div className="flex items-center">
                      <Image
                        alt="card"
                        src="/recycle.png"
                        width={25}
                        height={25}
                      />
                      <span className="px-1 text-xs">1-Click Re-order</span>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-3 my-4 px-4 sm:px-2 gap-1">
                    <button className="rounded-md w-full text-white p-3 font-light hover:bg-[#f98c56] bg-primary rounded-custom">
                      CREATE AN ACCOUNT
                    </button>
                    <p className="text-center text-xs">
                      Already a customer?{" "}
                      <span className="text-primary">Login</span>{" "}
                    </p>
                    <hr />
                    <h4 className="text-center text-sm font-semibold">
                      Or Continue with
                    </h4>
                    <div className="flex w-full">
                      <div className="grid grid-cols-2 gap-2 w-full">
                        <div className="col-span">
                          <button className="flex items-center justify-center gap-2 text-sm font-semibold w-full text-gray-900 rounded-custom bg-white p-3 ring-1 ring-inset ring-gray-300">
                            <Image
                              alt="apple"
                              src="/apple.png"
                              width={15}
                              height={15}
                            />
                            Apple
                          </button>
                        </div>
                        <div className="col-span">
                          <button className="flex items-center justify-center gap-2 text-sm w-full font-semibold text-gray-900 rounded-custom bg-white p-3 ring-1 ring-inset ring-gray-300">
                            <Image
                              alt="google"
                              src="/google.png"
                              width={15}
                              height={15}
                            />
                            Google
                          </button>
                        </div>
                      </div>
                    </div>
                    <hr />

                    <Image
                      alt="google"
                      src="/instagram.png"
                      width={30}
                      height={30}
                    />
                    <hr />
                  </div>
                  <div className="my-10"></div>
                </div>
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default NavSlide;
