import React, { useState } from "react";
import Hero from "../components/Hero/Hero";
import {
  BannerSlider,
  BrandAds,
  ImageTextBanner,
  Navbar,
  OfferNavbar,
  ProductsCarousel,
  SectionNavigator,
  VideoBanner,
  Wrapper,
} from "../components";
import Section from "../../sections/Section";
import { sections } from "../../constants/constants";
import { sections as respData } from "../utils/response";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchData from "../../RTK/actions/Products";
import { fetchCategoriesList } from "../../RTK/actions/Categories";
import { productsList } from "../constants/dummyData";
import Navbar2 from "../components/Navbar2";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import PreLoader from "@/components/Preloader/PreLoader";
const Home = () => {
  const dispath = useDispatch();
  const globalState = useSelector((state) => state);
  const components = [
    { id: 1, component: Navbar },
    { id: 2, component: Hero },
    { id: 3, component: SectionNavigator },
  ];

  useEffect(() => {
    if (!globalState?.products?.list || !globalState?.categories?.list) {
      dispath(fetchData());
      dispath(fetchCategoriesList());
    }
  }, []);

  const [bannerDetails, setBannerDetails] = useState(respData[0]?.banner);
  const configrationState = useSelector((state) => state?.configration);
  // useEffect(() => {
  //   // console.log(configrationState?.defaultData?.home?.sections?.banner);
  // }, [configrationState?.defaultData]);
  console.log(bannerDetails.bannerBackground.slider);
  return (
    <div className="">
      {/* <Navbar2 /> */}
      {/* <PreLoader /> */}
      <OfferNavbar />
      <Navbar />
      {/* <Hero /> */}

      {bannerDetails?.bannerBackground?.backgroundType === "video" ? (
        <VideoBanner />
      ) : bannerDetails?.bannerBackground?.backgroundType === "image" ? (
        <ImageTextBanner data={bannerDetails?.bannerBackground?.image} />
      ) : (
        <BannerSlider data={bannerDetails?.bannerBackground?.slider} />
      )}

      <Wrapper>
        <>
          <BrandAds />
          <SectionNavigator />

          {globalState.categories?.list?.map((section) => (
            <Section
              key={section._id}
              products={
                globalState?.products?.list?.filter(
                  (productObj) => productObj.categoryId === section._id
                ) || []
              }
              title={section.name.localized}
            />
          ))}
        </>
      </Wrapper>
      <ProductsCarousel />
    </div>
  );
};

export default Home;
