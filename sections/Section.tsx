"use client";
import React, { useEffect, useState } from "react";
import { sections } from "../constants/constants";
import { ProductCard } from "../src/components";
import { useSelector } from "react-redux";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
const Section = ({
  title,
  products,
}: {
  title: string;
  products: Array<any>;
}) => {
  const configrationState = useSelector((state: any) => state?.configration);
  const [navLinkStyle, setNavLinkStyle] = useState(1);
  useEffect(() => {
    const navLinks = document.querySelectorAll(".navLink");
    const sections = document.querySelectorAll(".section");

    let currentSection = "gathering-boxes";
    window.addEventListener("scroll", () => {
      sections.forEach((sectionItem: any) => {
        if (window.scrollY >= sectionItem?.offsetTop - 300) {
          currentSection = sectionItem.id;
        }
      });
      navLinks.forEach((navItem: any) => {
        if (navItem.href.includes(currentSection)) {
          document
            .querySelector(navLinkStyle === 1 ? ".active1" : ".active")
            ?.classList.remove(navLinkStyle === 1 ? "active1" : "active");
          navItem.classList.add(navLinkStyle === 1 ? "active1" : "active");
        }
      });
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [navLinkStyle]);

  const [productsLayout, setProductsLayout] = useState(2);
  const [titleStyle, setTitleStyle] = useState(1);
  const [wishlistStyle, setWishListStyle] = useState(2);
  const [imageStyle, setImageStyle] = useState(1);
  const [foodProducts, setFoodProducts] = useState(products);
  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = (e: any, id: any) => {
    setDraggedItem(id);
  };

  const handleDragOver = (e: any, id: any) => {
    e.preventDefault();
    if (draggedItem === id) return;

    const draggedOverIndex = foodProducts?.findIndex((item) => item?.id === id);
    const draggedItemIndex = foodProducts?.findIndex(
      (item) => item.id === draggedItem
    );

    const updatedProducts = [...foodProducts];
    const draggedItemData = updatedProducts[draggedItemIndex];
    updatedProducts.splice(draggedItemIndex, 1);
    updatedProducts.splice(draggedOverIndex, 0, draggedItemData);

    setFoodProducts(updatedProducts);
  };

  useEffect(() => {
    if (configrationState?.defaultData) {
      const productStyleValue =
        configrationState?.defaultData?.layout?.homePage?.product?.rowType;
      const titleStyleValue = configrationState?.defaultData?.css?.categoryShow;
      const imgStyle =
        configrationState?.defaultData?.layout?.productPage?.imagesView;
      setImageStyle(imgStyle === "empty value" ? 1 : 2);
      setTitleStyle(Number(titleStyleValue) || 1);
      setProductsLayout(Number(productStyleValue) || 1);
    }
    // console.log(configrationState?.defaultData);
  }, [configrationState?.defaultData]);

  return (
    <div
      id={title.toLocaleLowerCase().split(" ").join("-")}
      className={`section mt-10`}
    >
      <h1 className="font-semibold ml-5 text-lg">{title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 rounded-lg mt-4 bg-white">
        {foodProducts.map((product) => (
          <div
            key={product?.id}
            draggable
            onDragStart={(e) => handleDragStart(e, product?.id)}
            onDragOver={(e) => handleDragOver(e, product?.id)}
            className="relative"
          >
            <ProductCard
              imageStyle={imageStyle}
              wishlistStyle={wishlistStyle}
              productsLayout={productsLayout}
              images={product?.images}
              titleStyle={titleStyle}
              id={product?.id}
              name={product?.name?.localized}
              price={product?.price}
              desc={product?.description?.localized}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
