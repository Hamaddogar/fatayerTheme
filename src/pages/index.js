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
  const [bannerDetails, setBannerDetails] = useState({
    mainCard: {
      status: true,
      logo: true,
      heading: "",
    },

    bannerBackground: {
      status: true,
      backgroundType: "slider",
      file: {
        file: "https://graphicsfamily.com/wp-content/uploads/edd/2021/10/Business-Website-Banner-Design-1180x664.jpg",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,",
        textStatus: true,
        style: {
          top: "90px",
          left: "30px",
          fontWeight: 300,
          color: "red",
        },
        adjustPicturePosition: "10%",
      },

      slider: [
        {
          file: "https://graphicsfamily.com/wp-content/uploads/edd/2021/10/Business-Website-Banner-Design-1180x664.jpg",
          text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,",
          textStatus: true,
          style: {
            top: "90px",
            left: "90px",
            fontWeight: 900,
            color: "blue",
          },
        },
        {
          file: "https://graphicsfamily.com/wp-content/uploads/edd/2021/10/Business-Website-Banner-Design-1180x664.jpg",
          text: "007",
          textStatus: true,
          style: {
            top: "10px",
            left: "10px",
            fontWeight: 900,
            color: "red",
          },
        },
        {
          file: "https://graphicsfamily.com/wp-content/uploads/edd/2021/10/Business-Website-Banner-Design-1180x664.jpg",
          text: "Hassaan 82 007",
          textStatus: true,
          style: {
            top: "10px",
            left: "10px",
            fontWeight: 900,
            color: "red",
          },
        },
      ],
    },
  });

  const configrationState = globalState?.configration;

  useEffect(() => {
    if (configrationState?.defaultData) {
      // ----------- New AppBar Response Values -----------------
      const sections = configrationState?.defaultData?.home?.sections;
      // container

      if (sections?.banner && typeof sections?.banner === 'object') {
        // console.log(sections?.banner);
        setBannerDetails({ ...bannerDetails, ...(sections?.banner) })
      }
    }
  }, [configrationState?.defaultData]);


  useEffect(() => {

    console.log("bannerDetails", bannerDetails);
  }, [bannerDetails])


  return (
    <div className="">
      {/* <Navbar2 /> */}
      {/* <PreLoader /> */}
      <OfferNavbar />
      <Navbar />
      <Hero />

      {bannerDetails?.bannerBackground?.backgroundType === "video" ? (
        <VideoBanner />
      ) : bannerDetails?.bannerBackground?.backgroundType === "image" ? (
        <ImageTextBanner data={bannerDetails?.bannerBackground?.file} />
      ) : (
        <BannerSlider data={bannerDetails?.slider} />
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
