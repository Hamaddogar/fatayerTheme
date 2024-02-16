"use client";
import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  ArrowLeftIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronUpIcon,
  PhoneIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import GoogleMapReact from "google-map-react";
import { useSelector } from "react-redux";

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

const StoreInfoSlide = ({ open, setOpen, paymentMethods }: any) => {

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



  const [toggle, setToggle] = useState(false);
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
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
              <Dialog.Panel
                className="pointer-events-auto w-screen max-w-xl"
                style={{
                  borderRadius: "0px 15px 15px 0px",
                  overflow: "hidden",
                }}
              >
                {/* Sticky Header */}

                <div className="sticky top-0 bg-white p-4 shadow-md z-50 px-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-md hover:bg-gray-50 border-0"
                    >
                      <ChevronLeftIcon className="h-6 w-6" />
                    </button>
                    <h1 className="text-lg font-semibold">Store Info</h1>

                    <div className="px-3.5 py-2.5"></div>
                  </div>
                </div>

                <div className="flex h-full flex-col bg-white shadow-xl overflow-y-auto hide-scrollbar">
                  <div className="w-full px-4 pb-0">
                    <div className="w-full mx-auto">
                      <button
                        className="btn flex bg-transparent py-4 text-black items-center justify-between w-full font-bold text-left truncate"
                        onClick={() => setToggle(!toggle)}
                      >
                        <span className="flex-1 min-w-0 truncate">
                          Fatayer Ala Altayer Jahra
                        </span>
                        {toggle ? (
                          <ChevronUpIcon className="w-4 h-4" />
                        ) : (
                          <ChevronDownIcon className="w-4 h-4" />
                        )}
                      </button>
                      <div className="w-full border-t border-ChineseWhite "></div>
                      <div className={`pt-2 pb-2 ${!toggle && "hidden"}`}>
                        <div className="flex items-center justify-between relative hover:cursor-pointer">
                          <div className="flex items-center flex-1 min-w-0">
                            <div className=" block">
                              <CheckCircleIcon className="text-defaultThemeColor w-5 h-5" />
                            </div>
                            <div className="flex items-center overflow-hidden">
                              <span className="truncate  text-ellipsis px-2">
                                Fatayer Ala Altayer Jahra
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 text-defaultThemeColor rtl:space-x-reverse min-w-0">
                            <div className="flex flex-col space-y-1 text-xs text-right block">
                              <div className="">Open 24 hours</div>
                            </div>
                            <div className="bg-defaultThemeColor text-white py-1 px-3 rounded-full text-sm">
                              OPEN
                            </div>
                          </div>
                        </div>
                        <div className="w-full border-t border-ChineseWhite my-2"></div>
                        <div className="flex items-center justify-between relative hover:cursor-pointer">
                          <div className="flex items-center flex-1 min-w-0">
                            <div className="flex items-center overflow-hidden">
                              <span className="truncate  text-ellipsis ">
                                Fatayer Ala Altayer Reggie
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 text-defaultThemeColor rtl:space-x-reverse min-w-0">
                            <div className="flex flex-col space-y-1 text-xs text-right block">
                              <div className="">Open 24 hours</div>
                            </div>
                            <div className="bg-defaultThemeColor text-white py-1 px-3 rounded-full text-sm">
                              OPEN
                            </div>
                          </div>
                        </div>
                        <div className="w-full border-t border-ChineseWhite my-2"></div>
                        <div className="flex items-center justify-between relative hover:cursor-pointer">
                          <div className="flex items-center flex-1 min-w-0">
                            <div className="flex items-center overflow-hidden">
                              <span className="truncate  text-ellipsis ">
                                Fatayer Ala Altayer Shamiya
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 text-defaultThemeColor rtl:space-x-reverse min-w-0">
                            <div className="flex flex-col space-y-1 text-xs text-right block">
                              <div className="">Open 24 hours</div>
                            </div>
                            <div className="bg-defaultThemeColor text-white py-1 px-3 rounded-full text-sm">
                              OPEN
                            </div>
                          </div>
                        </div>
                        <div className="w-full border-t border-ChineseWhite my-2"></div>
                        <div className="flex items-center justify-between relative hover:cursor-pointer">
                          <div className="flex items-center flex-1 min-w-0">
                            <div className="flex items-center overflow-hidden">
                              <span className="truncate  text-ellipsis ">
                                Fatayer Ala Altayer Hawally
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 text-defaultThemeColor rtl:space-x-reverse min-w-0">
                            <div className="flex flex-col space-y-1 text-xs text-right block">
                              <div className="">Open 24 hours</div>
                            </div>
                            <div className="bg-defaultThemeColor text-white py-1 px-3 rounded-full text-sm">
                              OPEN
                            </div>
                          </div>
                        </div>
                        <div className="w-full border-t border-ChineseWhite my-2"></div>
                        <div className="flex items-center justify-between relative hover:cursor-pointer">
                          <div className="flex items-center flex-1 min-w-0">
                            <div className="flex items-center overflow-hidden">
                              <span className="truncate  text-ellipsis ">
                                Fatayer Ala Altayer Salmiya
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 text-defaultThemeColor rtl:space-x-reverse min-w-0">
                            <div className="flex flex-col space-y-1 text-xs text-right block">
                              <div className="">Open 24 hours</div>
                            </div>
                            <div className="bg-defaultThemeColor text-white py-1 px-3 rounded-full text-sm">
                              OPEN
                            </div>
                          </div>
                        </div>
                        <div className="w-full border-t border-ChineseWhite my-2"></div>
                        <div className="flex items-center justify-between relative hover:cursor-pointer">
                          <div className="flex items-center flex-1 min-w-0">
                            <div className="flex items-center overflow-hidden">
                              <span className="truncate  text-ellipsis ">
                                Fatayer Ala Altayer Sabah Alsalem
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 text-defaultThemeColor rtl:space-x-reverse min-w-0">
                            <div className="flex flex-col space-y-1 text-xs text-right block">
                              <div className="">Open 24 hours</div>
                            </div>
                            <div className="bg-defaultThemeColor text-white py-1 px-3 rounded-full text-sm">
                              OPEN
                            </div>
                          </div>
                        </div>
                        <div className="w-full border-t border-ChineseWhite my-2"></div>
                        <div className="flex items-center justify-between relative hover:cursor-pointer">
                          <div className="flex items-center flex-1 min-w-0">
                            <div className="flex items-center overflow-hidden">
                              <span className="truncate  text-ellipsis ">
                                Fatayer Ala Altayer Aswaq Alqurain
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 text-defaultThemeColor rtl:space-x-reverse min-w-0">
                            <div className="flex flex-col space-y-1 text-xs text-right block">
                              <div className="">Open 24 hours</div>
                            </div>
                            <div className="bg-defaultThemeColor text-white py-1 px-3 rounded-full text-sm">
                              OPEN
                            </div>
                          </div>
                        </div>
                        <div className="w-full border-t border-ChineseWhite my-2"></div>
                        <div className="flex items-center justify-between relative hover:cursor-pointer">
                          <div className="flex items-center flex-1 min-w-0">
                            <div className="flex items-center overflow-hidden">
                              <span className="truncate  text-ellipsis ">
                                Fatayer Ala Altayer Sabahiya
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 text-defaultThemeColor rtl:space-x-reverse min-w-0">
                            <div className="flex flex-col space-y-1 text-xs text-right block">
                              <div className="">Open 24 hours</div>
                            </div>
                            <div className="bg-defaultThemeColor text-white py-1 px-3 rounded-full text-sm">
                              OPEN
                            </div>
                          </div>
                        </div>
                        <div className="w-full border-t border-ChineseWhite my-2"></div>
                      </div>
                    </div>
                  </div>

                  <div className="relative mt-1 mb-5">
                    <div className="rounded-lg bg-gray-100 px-3.5 py-5 w-100 ring-1 ring-inset ring-gray-200">
                      <div style={{ height: "200px", width: "100%" }}>
                        <GoogleMapReact
                          bootstrapURLKeys={{ key: "" }}
                          defaultCenter={defaultProps.center}
                          defaultZoom={defaultProps.zoom}
                        >
                          <AnyReactComponent
                            lat={59.955413}
                            lng={30.337844}
                            text="My Marker"
                          />
                        </GoogleMapReact>
                      </div>
                    </div>
                  </div>

                  {/* store profile */}

                  <div className="flex items-center space-x-3 px-5 sm:px-2 pb-3">
                    <Image
                      className="inline-block h-20 w-20 rounded-full object-contain"
                      src={themeLogo || "/logo.jpg"}
                      alt="logo"
                      width={150}
                      height={150}
                    />

                    <div className="flex flex-1 flex-col space-y-2 px-5 sm:px-2">
                      <h3 className="text-md font-semibold">
                        Fatayer Ala Al Tayer
                      </h3>
                      <div className="flex w-full">
                        <div className="grid grid-cols-2 gap-2 w-full">
                          <div className="col-span">
                            <button className="flex items-center justify-center gap-2 text-sm font-light w-full text-gray-900 rounded-custom bg-gray-100 p-3 ring-1 ring-inset ring-gray-300 hover:bg-white">
                              <Image
                                alt="apple"
                                src="/phone.png"
                                width={15}
                                height={15}
                              />
                              Call US
                            </button>
                          </div>
                          <div className="col-span">
                            <button className="flex items-center justify-center gap-2 text-sm w-full font-light text-gray-900 rounded-custom bg-gray-100 p-3 ring-1 ring-inset ring-gray-300 hover:bg-white">
                              <Image
                                alt="google"
                                src="/location.png"
                                width={20}
                                height={20}
                              />
                              Get Direction
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="flex items-center justify-between py-4 px-4 sm:px-2">
                    <div className="flex items-center">
                      <Image
                        alt="card"
                        src="/time.png"
                        width={25}
                        height={25}
                      />
                      <span className="px-1 text-md font-light">
                        Opening Hours
                      </span>
                    </div>
                    <span className="text-md font-light" style={{ margin: 0 }}>
                      Open 24 hours
                    </span>
                  </div>
                  <hr />
                  <div className="flex items-center justify-between py-4 px-4 sm:px-2">
                    <div className="flex items-center">
                      <Image
                        alt="card"
                        src="/cards.png"
                        width={25}
                        height={25}
                      />
                      <span className="px-1 text-md font-light">
                        Payment Options
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      {paymentMethods.map((method: any) => (
                        <div
                          key={method}
                          className="relative w-[20px]  md:h-[20px] md:w-[35px]   "
                        >
                          <Image
                            src={method}
                            alt="payment-method"
                            className="absolute"
                            layout="fill"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="my-10" style={{ margin: "100px" }}></div>
                </div>
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default StoreInfoSlide;
