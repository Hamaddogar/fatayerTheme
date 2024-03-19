import React, { useState } from "react";
import "iconify-icon";
import { Box } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
const Footer = ({
  menuItems,
  menuItemColor,
  containerBackgroundColor,
  footerStyling,
}: {
  menuItems: any;
  menuItemColor: string;
  containerBackgroundColor: string;
  footerStyling: any;
}) => {
  const socialIcons = [
    { icon: footerStyling.socials.facebook && FacebookRoundedIcon },
    { icon: footerStyling.socials.instagram && InstagramIcon },
    { icon: footerStyling.socials.twitter && TwitterIcon },
    { icon: footerStyling.socials.google && GoogleIcon },
  ];
  return (
    <footer
      style={{ ...footerStyling.container, width: "100%", padding: "18px" }}
    >
      <div style={{ padding: "8px" }} className="footerContainer">
        <div
          style={{ display: "flex", justifyContent: "center", gap: "6px" }}
          className="socialIcons"
        >
          {socialIcons.map((item, i) => (
            <item.icon className="bg-white rounded-full p-1" key={i} />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            marginTop: "10px",
            ...footerStyling.menuItems,
          }}
          className="footerNav"
        >
          {menuItems.map((item: string) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
