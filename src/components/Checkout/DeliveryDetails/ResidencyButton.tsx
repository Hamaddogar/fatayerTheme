import React from "react";

const ResidencyButton = ({
  selectedResidency,
  setSelectedResidency,
  icon: Icon,
  id,
  title,
}: {
  icon: any;
  title: string;
  selectedResidency: any;
  setSelectedResidency: any;
  id: number;
}) => {
  return (
    <div
      onClick={() => setSelectedResidency(id)}
      className={`flex cursor-pointer border justify-center rounded-lg ${
        selectedResidency == id ? "border-black" : "border-gray-200"
      } h-[70px] md:h-[100px] lg:h-[150px] w-full flex-col items-center`}
    >
      <Icon />
      <span>{title}</span>
    </div>
  );
};

export default ResidencyButton;
