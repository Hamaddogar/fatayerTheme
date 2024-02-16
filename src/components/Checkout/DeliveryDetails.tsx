"use client";
import React, { useState } from "react";
import Heading from "./DeliveryDetails/Heading";
import Form from "./DeliveryDetails/Form";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import DomainIcon from "@mui/icons-material/Domain";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import ResidencyButton from "./DeliveryDetails/ResidencyButton";

const DeliveryDetails = () => {
  const [selectedResidency, setSelectedResidency] = useState(1);
  const residencyDetails = [
    {
      title: "House",
      logo: CottageOutlinedIcon,
      id: 1,
    },
    {
      title: "Apartment",
      logo: DomainIcon,
      id: 2,
    },
    {
      title: "Office",
      logo: HomeWorkOutlinedIcon,
      id: 3,
    },
  ];
  return (
    <div className="w-full border border-gray-200 rounded-lg p-3 bg-white">
      <Heading />
      <div className="flex mt-4   gap-5 w-full">
        <Form placeholder="Full Name" />
        <Form placeholder="Email Address" />
      </div>
      <div className="flex gap-4 mt-4 items-center">
        {residencyDetails.map((item) => (
          <ResidencyButton
            id={item.id}
            setSelectedResidency={setSelectedResidency}
            selectedResidency={selectedResidency}
            key={item.title}
            title={item.title}
            icon={item.logo}
          />
        ))}
      </div>
      <div className="flex mt-4   gap-5 w-full">
        <Form placeholder="Block" />
        <Form placeholder="Street" />
      </div>
      <div className="flex mt-4   gap-5 w-full">
        <Form placeholder="House" />
        <Form placeholder="Avenue" />
      </div>
      <div className="border-t py-5 mt-6 flex items-center gap-3 border-gray-300 ">
        <input type="checkbox" />
        <span>Use the details to create an account</span>
      </div>
    </div>
  );
};

export default DeliveryDetails;
