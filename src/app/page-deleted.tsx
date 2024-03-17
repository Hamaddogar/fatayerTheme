"use client";
import React, { useState } from "react";
import Hero from "../components/Hero/Hero";
import { Navbar, SectionNavigator, Wrapper } from "../components";
import Section from "../../sections/Section";
("use client");
import { sections } from "../../constants/constants";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "../../RTK/store/store";
const Home = () => {
  const [navLinkStyle, setNavLinkStyle] = useState(1);

  useEffect(() => {
    const navLinks = document.querySelectorAll(".navLink");
    const sections = document.querySelectorAll(".section");

    let currentSection = "gathering-boxes";
    window.addEventListener("scroll", () => {
      sections.forEach((sectionEl: any) => {
        if (window.scrollY >= sectionEl.offsetTop - 300) {
          currentSection = sectionEl.id;
        }
      });
      navLinks.forEach((navLink) => {
        if (navLink.id.includes(currentSection)) {
          document
            .querySelector(navLinkStyle === 1 ? ".active1" : ".active")
            ?.classList.remove(navLinkStyle === 1 ? "active1" : "active");
          navLink.classList.add(navLinkStyle === 1 ? "active1" : "active");
        }
      });
    });
  }, [navLinkStyle]);

  return (
    <Provider store={store}>
      <div className="">
        <Navbar />
        <Hero />
        <Wrapper>
          <>
            <SectionNavigator />
            {sections.map((section) => (
              <Section
                key={section.title}
                products={section.products}
                title={section.title}
              />
            ))}
          </>
        </Wrapper>
      </div>
    </Provider>
  );
};

export default Home;
