import * as React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Dialog, Transition } from "@headlessui/react";

const PickupModal = ({ open, setOpen }: { open: boolean; setOpen: any }) => {
  return (
    <div className="">
      <Transition.Root show={open} as={React.Fragment}>
        <Dialog as="div" className="relative z-60" onClose={setOpen}>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-60 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-60 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center sm:items-center sm:p-0">
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm">
                  {/* px-4  sm:p-6  */}
                  <div className="flex items-center border-bottom sm:p-2">
                    <h1 className="w-full p-2 ml-5 font-semibold text-lg  text-center">
                      Select Delivery Location
                    </h1>
                    <div
                      onClick={() => setOpen(false)}
                      className="border-gray-200 m-1 rounded-lg border p-2"
                    >
                      <CloseIcon />
                    </div>
                  </div>
                  <hr />
                  <div
                    dir="ltr"
                    id="0"
                    className="bg-white scrollbar-hide app-modal-body overflow-y-auto scrollbar-hide flex flex-col min-h-400"
                    data-type="modal-body"
                  >
                    <div className="sticky top-0 w-full p-4 items-center z-50 bg-white border-b border-ChineseWhite">
                      <div
                        className="flex bg-ChineseWhite p-1 rounded-sm justify-center ring-4 ring-inset ring-gray-200"
                        role="tablist"
                        aria-orientation="horizontal"
                      >
                        <button
                          className="w-full py-2.5 text-sm leading-5 rounded-custom bg-white font-bold"
                          id="headlessui-tabs-tab-13"
                          role="tab"
                          type="button"
                          aria-selected="true"
                          tabIndex={0}
                          aria-controls="headlessui-tabs-panel-14"
                        >
                          Pickup
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-grow">
                      <div
                        className="flex flex-1 flex-col flex-grow relative w-full"
                        id="headlessui-tabs-panel-14"
                        role="tabpanel"
                        aria-labelledby="headlessui-tabs-tab-13"
                        tabIndex={0}
                      >
                        <div className="sticky top-[81px] w-full z-50 bg-white">
                          <div className="border-b border-b-ChineseWhite  mb-0 p-4 relative">
                            <span className="absolute inset-y-0 px-4 flex items-center">
                              <div className="py-1">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="15"
                                  height="15"
                                  viewBox="0 0 15 15"
                                  className=""
                                >
                                  <path
                                    id="Path_277"
                                    data-name="Path 277"
                                    d="M16.768,15.715l-2.781-2.76A6.743,6.743,0,1,0,12.946,14l2.758,2.76a.745.745,0,1,0,1.064-1.043ZM8.741,14a5.251,5.251,0,1,1,5.247-5.251A5.249,5.249,0,0,1,8.741,14Z"
                                    transform="translate(-1.979 -1.979)"
                                  ></path>
                                </svg>
                              </div>
                            </span>
                            <input
                              type="text"
                              placeholder="Search by area"
                              className="rounded-lg text-xxl h-[45px] w-full py-2 px-10 bg-gray-100"
                              value=""
                            />
                          </div>
                        </div>
                        <div className="flex flex-grow">
                          <div
                            className="flex flex-1 flex-col flex-grow relative w-full"
                            id="headlessui-tabs-panel-15"
                            role="tabpanel"
                            tabIndex={0}
                          >
                            <div className="flex p-4 justify-between relative cursor-pointer border-b border-ChineseWhite z-0 opacity-1 font-semibold">
                              <div className="flex items-center overflow-hidden">
                                <span className="truncate text-ellipsis">
                                  Fatayer Ala Altayer Sabahiya
                                </span>
                              </div>
                              <div className="">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                  className="text-defaultThemeColor h-6"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6 px-4">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-custom bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      onClick={() => setOpen(false)}
                    >
                      Confirm
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default PickupModal;
