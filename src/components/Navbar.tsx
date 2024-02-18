/* eslint-disable jsx-a11y/alt-text */
"use client";
import React, { Fragment, useEffect, useState } from "react";
import NavbarButton from "./Navbar/NavbarButton";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useRouter } from "next/navigation";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import NavSlide from "./NavSlide";
import CartButton from "./Navbar/CartButton";
import { useSelector } from "react-redux";
import Link from "next/link";
import { Image, Input, Span } from ".";
import { useMediaQuery } from "@mui/material";
import { sections } from "@/utils/response";
const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const matches = useMediaQuery("(max-width:600px)");
  const router = useRouter();
  const configrationState = useSelector((state: any) => state?.configration);
  const [generalIcons, setGeneralIcons] = useState(sections[0].generalIcons);
  const [appBarSearch, setAppBarSearch] = useState(sections[0].appBar.search);
  // console.log(generalIcons);

  const [appBarContainer, setAppBarContainer] = useState(
    sections[0].appBar.container
  );
  const [appBarRightDetails, setAppBarRightDetails] = useState([
    {
      id: "",
      key: "mobile_home_app_bar_show_icon_search",
      show: true,
      icon: "https://i.imgur.com/K79NGcT.png",
      type: "icon",
      screen: "search",
      // Search is usually on both sides so if we add required here or anything which will decide the position of search
    },
    {
      id: "",
      key: "mobile_home_app_bar_show_icon_cart",
      show: true,
      icon: "https://i.imgur.com/ZiNDkOU.png",
      type: "icon",
      hasBadge: true,
      screen: "Cart",
    },
    {
      id: "",
      key: "mobile_home_app_bar_show_icon_notification",
      show: false,
      icon: "https://i.imgur.com/21iWy7Y.png",
      type: "icon",
      screen: "Notification",
    },
    {
      id: "",
      key: "mobile_home_app_bar_show_icon_wishlist",
      show: false,
      icon: "https://i.imgur.com/2Xe02qj.png",
      type: "icon",
      screen: "Wishlist",
    },
    {
      id: "",
      key: "mobile_home_app_bar_show_icon_lang",
      show: true,
      icon: "https://i.imgur.com/s9xSNdP.png",
      type: "icon",
      screen: "Wishlist",
    },
  ]);
  const [appBarLeftDetails, setAppBarLeftDetails] = useState([
    {
      id: "",
      key: "mobile_home_app_bar_show_icon_drawer",
      show: true,
      icon: "https://i.imgur.com/GgleigG.png",
      type: "icon",
      screen: "drawer",
    },
  ]);
  const globalState = useSelector((state: any) => state?.cartList);

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  const [showSearchBar, setShowSearchBar] = useState(true);
  useEffect(() => {
    if (configrationState?.defaultData) {
      const searchbarValue =
        configrationState?.defaultData?.layout?.productDetailsPage
          ?.showSearchBarSection;
      setShowSearchBar(searchbarValue);
      let logoValue = configrationState?.defaultData?.logo;
      logoValue = logoValue !== "empty value" ? logoValue : "";
      // setThemeLogo(logoValue || "");
      // setAppBarSearch({
      //   ...configrationState?.defaultData?.appBar?.search,
      //   status: true,
      // });
      // setAppBarContainer(configrationState?.defaultData?.appBar?.container);
      // setLogoObj(configrationState?.defaultData?.appBar?.logoObj);
    }
  }, [configrationState?.defaultData]);

  // Banner
  const [appBarLogo, setAppBarLogo] = useState(sections[0]?.websiteLogo);

  const [centerMenu, setCenterMenu] = useState(sections[0]?.appBar?.menu);

  return (
    <>
      <div
        style={{
          ...appBarContainer,
          display: appBarContainer?.show ? "flex" : "none",
          boxShadow:
            appBarContainer?.boxShadow !== "none"
              ? "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
              : "",
        }}
        // borderTop:
        //   appBarContainer.borderPosition === "top"
        //     ? `1px solid ${appBarContainer.borderColor}`
        //     : "none",
        // borderLeft:
        //   appBarContainer.borderPosition === "left"
        //     ? `1px solid ${appBarContainer.borderColor}`
        //     : "none",
        // borderRight:
        //   appBarContainer.borderPosition === "right"
        //     ? `1px solid ${appBarContainer.borderColor}`
        //     : "none",

        className=" bg-transparent z-60 px-6 py-4 sticky w-full top-0 flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          {appBarLeftDetails?.find(
            (item) => item?.key == "mobile_home_app_bar_show_icon_drawer"
          )?.show && (
            <div onClick={() => setOpen(true)}>
              <Image
                style={{
                  ...generalIcons,
                  width: "34px",
                  height: "34px",
                }}
                src={
                  appBarLeftDetails?.find(
                    (item) =>
                      item?.key == "mobile_home_app_bar_show_icon_drawer"
                  )?.icon || ""
                }
              />
            </div>
          )}
          {appBarSearch?.position === "left" && appBarSearch?.status && (
            <Input
              input={appBarSearch?.input}
              style={
                appBarSearch?.input
                  ? {
                      textBg: "transparent !important",
                      color: appBarSearch?.textColor,
                      border: `${appBarSearch?.borderWidth?.toString()}px solid ${
                        appBarSearch?.borderColor
                      }`,
                      // background: "transparent",
                      display: appBarSearch?.status ? "flex" : "none",
                    }
                  : {
                      ...generalIcons,
                      backgroundColor: generalIcons?.hasBackground
                        ? generalIcons?.backgroundColor
                        : "transparent",
                      border: `${generalIcons?.border.toString()} ${
                        generalIcons?.borderColor
                      }`,
                      boxShadow: generalIcons?.isShadow
                        ? "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                        : "none",
                    }
              }
              className={`${
                appBarSearch?.mobileView?.status ? "max-sm:flex" : "hidden"
              }`}
              location="left"
            />
          )}
          <div className="flex items-center">
            {appBarLogo?.position === "left" && (
              <div className="flex items-center">
                <Image
                  // Style of centered Section
                  style={{ ...appBarLogo?.logo }}
                  // Image link
                  src={appBarLogo?.logo?.url}
                />

                {appBarLogo?.text?.value !== "empty value" && (
                  <Span
                    style={appBarLogo?.text}
                    text={appBarLogo?.text?.value}
                  />
                )}
              </div>
            )}
          </div>
        </div>
        {/* Center */}
        <div className="flex items-center">
          <div className="flex items-center gap-3">
            {centerMenu?.menuItems?.map((item: any, i) => (
              <span
                key={i}
                onMouseEnter={() => setIsHovered(item?.name)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                  ...centerMenu?.style,
                  fontSize: centerMenu?.style?.size,
                  color:
                    isHovered === item?.name && centerMenu?.style?.hoverColor
                      ? centerMenu?.style?.hoverColor
                      : centerMenu?.style?.color,
                }}
              >
                {item?.name}
              </span>
            ))}
          </div>
          {appBarLogo?.position === "center" && (
            <div className="flex items-center">
              <Image
                // Style of centered Section
                style={appBarLogo?.logo}
                // Image link
                src={appBarLogo?.logo?.url}
              />

              {appBarLogo?.text && (
                <Span style={appBarLogo?.text} text={appBarLogo?.text?.value} />
              )}
            </div>
          )}
          {appBarSearch?.position === "center" && (
            <Input
              input={appBarSearch?.input}
              style={
                appBarSearch?.input
                  ? {
                      color: appBarSearch?.textColor,
                      display: appBarSearch?.status ? "flex" : "none",
                      border: `${appBarSearch?.borderWidth?.toString()}px solid ${
                        appBarSearch?.borderColor
                      }`,
                    }
                  : generalIcons
              }
              className={`${
                appBarSearch?.mobileView?.status ? "max-sm:flex" : "hidden"
              }`}
              placeholder={"Hassaan"}
              location="center"
            />
          )}
        </div>

        <div className="flex items-center gap-3 text-white">
          {appBarLogo?.position === "right" && (
            <div className="flex items-center">
              <Image
                // Style of centered Section
                style={appBarLogo?.logo}
                // Image link
                src={appBarLogo?.logo?.url}
              />

              {appBarLogo?.text && (
                <Span style={appBarLogo?.text} text={appBarLogo?.text?.value} />
              )}
            </div>
          )}
          {appBarSearch?.position === "right" && (
            <Input
              className={`${
                appBarSearch?.mobileView?.status ? "max-sm:flex" : "hidden"
              }`}
              input={appBarSearch?.input}
              style={
                appBarSearch?.input
                  ? {
                      textBg: "transparent !important",
                      color: appBarSearch?.textColor,
                      border: `${appBarSearch?.borderWidth?.toString()}px solid ${
                        appBarSearch?.borderColor
                      }`,
                      // background: "transparent",
                      display: appBarSearch?.status ? "flex" : "none",
                    }
                  : generalIcons
              }
              location="right"
            />
          )}
          {appBarRightDetails?.find(
            (item) => item?.key == "mobile_home_app_bar_show_icon_lang"
          )?.show && (
            <Image
              style={{
                ...generalIcons,
              }}
              src={
                appBarRightDetails?.find(
                  (item) => item?.key == "mobile_home_app_bar_show_icon_lang"
                )?.icon || ""
              }
            />
          )}
          {/* <ShoppingCartOutlinedIcon /> */}
          {appBarRightDetails?.find(
            (item) => item?.key == "mobile_home_app_bar_show_icon_cart"
          )?.show && (
            <Image
              style={{
                ...generalIcons,
              }}
              src={
                appBarRightDetails?.find(
                  (item) => item?.key == "mobile_home_app_bar_show_icon_cart"
                )?.icon || ""
              }
            />
          )}
        </div>
      </div>
      <NavSlide open={open} setOpen={setOpen} />

      {/* if cart is not empty */}

      {isClient && globalState?.selected?.length > 0 && (
        <div className="fixed flex bottom-0 bg-white h-24 w-full items-center justify-center px-4 z-20">
          <Link
            href={"/checkout"}
            className="rounded-md btn w-full max-w-[424px] text-white-800 text-lg flex justify-between items-center px-4 py-2.5 hover:opacity-50 bg-primary "
          >
            <div className="flex space-x-2 items-center rtl:space-x-reverse">
              <div className="bg-white text-black rounded-full flex items-center justify-center w-7 h-7 ">
                {globalState?.itemsCounter}
              </div>
              <div className="text-white">{globalState?.total} KWD</div>
            </div>
            <div className="font-bold uppercase text-white">Review Cart</div>
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
