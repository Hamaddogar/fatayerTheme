/* eslint-disable */
"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import { sectionNavigatorConstants } from "../../constants/constants";
import WindowOutlinedIcon from "@mui/icons-material/WindowOutlined";
import CategoryModal from "./CategoryModal";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesList } from "../../RTK/actions/Categories";
import { AppDispatch } from "../../RTK/store/store";
import { productsList } from "@/constants/dummyData";

const SectionNavigator = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispath = useDispatch();
  const globalState = useSelector((state) => state);
  const [isHovered, setIsHovered] = useState(false);

  const [navigatorStyle, setNavigatorStyle] = useState(2);
  const [itemsStyles, setItemsStyles] = useState(2);
  const [categories, setCategories] = useState({
    categoriesBar: {
      status: true,
      backgroundColor: "white",
      borderRadius: "60px",
      shadow: "2",
    },
    categoriesList: {
      color: "blue",
      backgroundColor: "",
      hoverColor: "black",
      position: "left",
    },
    categoryView: "1,2,3,4",
  });
  // images
  useEffect(() => {
    if (!globalState?.categories?.list) {
      dispath(fetchCategoriesList());
    }
  }, [dispath]);
  useEffect(() => {
    if (globalState?.configration) {
      const itemsStyle =
        globalState?.configration?.defaultData?.layout?.categoryPage?.listView;
      setItemsStyles(itemsStyle === "empty value" ? 2 : itemsStyle);
    }
  }, [globalState?.configration]);
  const hoverColor = categories?.categoriesList?.hoverColor;

  return (
    categories?.categoriesBar?.status && (
      <div
        style={{
          ...categories?.categoriesBar,
          boxShadow:
            categories?.categoriesBar?.shadow !== "none"
              ? "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
              : "",
        }}
        className="flex mt-4  top-20 pt-2  z-50 p-1 border border-gray-300 bg-white items-center"
      >
        <div
          className={`whitespace-nowrap ${itemsStyles === 2 ? `grid grid-rows-2 grid-flow-col gap-4` : ""
            } noscrollbar overflow-x-auto w-full ${categories?.categoriesList?.position === "right"
              ? "justify-end"
              : categories?.categoriesList?.position === "left"
                ? "justify-start"
                : "justify-center"
            } overflow-y-hidden`}
        >
          {globalState?.categories?.list &&
            globalState?.categories?.list.map((item) => (
              <Link
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(item?.name?.localized)}
                href={
                  "#" +
                  item?.name?.localized
                    ?.toLocaleLowerCase()
                    .split(" ")
                    .join("-")
                }
                key={item._id}
                style={{
                  ...categories?.categoriesList,
                  color:
                    isHovered === item?.name?.localized && hoverColor
                      ? hoverColor
                      : categories?.categoriesList?.color,
                }}
                className={`p-3 navLink inline-block noscrollbar overflow-scroll px-4 duration-300  ${navigatorStyle === 1 ? "rounded-full" : "rounded-none"
                  } rounded-full`}
              >
                <div className="flex shadow-lg rounded-full p-1 flex-col items-center">
                  <img
                    className="w-16 h-16 object-cover rounded-full"
                    src={item?.image}
                  />
                  <span className="text-center">{item?.name?.localized}</span>
                </div>
              </Link>
            ))}
        </div>
        <div className="border-l px-3 border-gray-300">
          <div
            className="cursor-pointer flex items-end justify-end"
            onClick={handleOpen}
          >
            <WindowOutlinedIcon
              className="text-primary"
              sx={{ fontSize: 28 }}
            />
          </div>
          <CategoryModal
            open={open}
            setOpen={setOpen}
            handleClose={handleClose}
            list={globalState?.categories?.list}
            handleOpen={handleOpen}
          />
        </div>
      </div>
    )
  );
};

export default SectionNavigator;
