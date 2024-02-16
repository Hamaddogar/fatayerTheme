import React from "react";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

const SpecialRequests = () => {
  return (
    <div className="w-full px-4 rounded-lg border border-gray-200 mt-5 py-5 flex items-center justify-between bg-white ">
      <div className="flex gap-2">
        <DescriptionOutlinedIcon />
        <span>Any special request?</span>
      </div>
      <span className="text-primary cursor-pointer ">Add Note</span>
    </div>
  );
};

export default SpecialRequests;
