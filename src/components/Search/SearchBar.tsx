"use client";
import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/navigation";
const SearchBar = () => {
  const router = useRouter();
  return (
    <div className="bg-white p-3 gap-2 items-center flex w-full">
      <div onClick={() => router.back()}>
        <KeyboardBackspaceIcon sx={{ fontSize: 28 }} />
      </div>
      <div className="w-full gap-2 bg-[#eae8e8] p-1 flex items-center">
        <SearchIcon sx={{ color: "#c3c2c2" }} />
        <input
          placeholder="Search Products"
          className="w-full  h-[40px] rounded-lg outline-none bg-transparent "
        />
      </div>
    </div>
  );
};

export default SearchBar;
