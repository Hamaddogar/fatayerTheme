import React from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Heading = () => {
  return (
    <div className="flex w-full items-center justify-between">
      <h1 className="font-semibold text-lg ">Enter your delivery details</h1>
      <button className="flex gap-2 bg-gray-200 px-4 py-2 rounded-custom items-center">
        <AccountCircleOutlinedIcon />
        Login
      </button>
    </div>
  );
};

export default Heading;
