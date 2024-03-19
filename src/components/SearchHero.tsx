import React from "react";
import SearchIcon from "@mui/icons-material/Search";
const SearchHero = () => {
  return (
    <div className="flex gap-3 flex-col items-center justify-center w-full absolute bottom-10">
      <h1 className="text-[2vw] text-center text-white font-extrabold">
        WE ARE HERE TO MAKE
        <br />
        <h2 className="text-[3vw]">COOKING FUN AGAIN</h2>
      </h1>
      <div className="w-[30%] p-2 rounded-full  bg-white flex items-center justify-center">
        <input
          placeholder="Aaj kya pakana hai?"
          className="w-full text-gray-400 placeholder:text-gray-400 outline-none "
        />
        <div className="bg-orange-400 flex items-center justify-center w-[20%] p-1 rounded-full  text-white">
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};

export default SearchHero;
