/* eslint-disable */
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
const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const matches = useMediaQuery("(max-width:600px)");
  const router = useRouter();
  const configrationState = useSelector((state) => state?.configration);
  const [generalIcons, setGeneralIcons] = useState({
    color: "transparent",
    border: "",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "transparent",
  });
  const [appBarSearch, setAppBarSearch] = useState({
    status: true,
    icon: "https://i.imgur.com/K79NGcT.png",
    position: "left",
    input: true,
    textColor: "black",
    borderColor: "blue",
    borderWidth: "5",
    mobileView: {
      status: "true, false",
      position: "left, center",
      width: "",
      height: "",
    },
  });

  const [themeLogo, setThemeLogo] = useState < any > null;

  const [logoObj, setLogoObj] = useState < any > null;

  const [appBarContainer, setAppBarContainer] = useState({
    show: true,
    boxShadow: "none, 1,2,3,4",
    backgroundColor: "white",
    width: "100%",
    height: "90px",
  });
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
  const globalState = useSelector((state) => state?.cartList);

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
      setThemeLogo(logoValue || "");
      // setAppBarSearch({
      //   ...configrationState?.defaultData?.appBar?.search,
      //   status: true,
      // });
      // setAppBarContainer(configrationState?.defaultData?.appBar?.container);
      setLogoObj(configrationState?.defaultData?.appBar?.logoObj);
    }
  }, [configrationState?.defaultData]);
  const [iconStyle, setIconStyle] = useState({
    borderRadius: 11,
    backgroundColor: "#FFFFFF",
    backgroundColorDark: "#000000",
    hasBackground: true,
    tintColor: "#000000",
    tintColorDark: "#000000",
    border: 1,
    borderColor: "#000000",
    borderColorDark: "#000000",
    isShadow: false,
    startColor: "#00000008",
    finalColor: "#00000000",
    width: 35,
    height: 35,
  });
  const [appBarCenter, setAppBarCenter] = useState([
    {
      id: "",
      key: "mobile_home_app_bar_show_logo",
      image: "https://i.imgur.com/lhzK1Ly.png",
      show: false,
      is_tint_color: false,
      width: 50,
      height: 50,
      color: "#000000",
      dark_color: "#000000",
      type: "image",
      screen: "",
      required: "", //Require Center Logo Or No
    },
    {
      id: "",
      show: false,
      key: "mobile_home_app_bar_show_text",
      text: "Store",
      type: "text",
      screen: "",
      required: "", //Require Center Text Or No
    },
  ]);
  const [textStyle, setTextStyle] = useState({
    size: 18,
    isBold: true,
    color: "#000000",
    colorDark: "#FFFFFF",
    numberOfLines: 1,
    style: [],
  });

  // Banner
  const [appBarLogo, setAppBarLogo] = useState({
    status: "true",
    position: "left",
    text: {
      value: "Hassaan",
      color: "black",
      backgroundColor: "",
    },
    logo: {
      url: "https://overzaki.fra1.cdn.digitaloceanspaces.com/robustidiot5576.overzaki.info/image/design/1707763191248-desktop-wallpaper-cobra-logo-computer-cobra-commander-computer.jpg",
      borderColor: "",
      borderWidth: "",
      width: "40px",
      height: "40px",
      borderRadius: "10%",
    },
  });

  const [centerMenu, setCenterMenu] = useState({
    status: true,
    menuItems: [
      {
        name: "Hamad",
        link: "",
      },
      {
        name: "Hamad 2",
        link: "",
      },
    ],
    style: {
      size: "18px",
      color: "red",
      backgroundColor: "transparent",
      hoverColor: "black",
      fontWeight: 100,
      fontStyle: "",
    },
  });

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
                  )?.icon
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
                  : generalIcons
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
            {centerMenu?.menuItems?.map((item, i) => (
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
                width: "34px",
                height: "34px",
              }}
              src={
                appBarRightDetails?.find(
                  (item) => item?.key == "mobile_home_app_bar_show_icon_lang"
                )?.icon
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
                width: "34px",
                height: "34px",
              }}
              src={
                appBarRightDetails?.find(
                  (item) => item?.key == "mobile_home_app_bar_show_icon_cart"
                )?.icon
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
