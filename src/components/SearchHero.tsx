import React from "react";
import SearchIcon from "@mui/icons-material/Search";
const SearchHero = ({ searchHero }: any) => {
  return (
    <div
      style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      className="flex gap-3 flex-col items-center justify-center w-full absolute bottom-10"
    >
      <h1 className="text-[2.5vw] w-[40%] text-center text-white font-extrabold">
        {searchHero.topText}
        <h2 className="text-[3.5vw]">{searchHero.bottomText}</h2>
      </h1>
      <div className="w-[40%] p-3 rounded-full  bg-white flex items-center justify-center">
        <input
          placeholder={searchHero.placeholder}
          className="w-full text-gray-400 placeholder:text-gray-400 outline-none "
        />
        <div className="bg-orange-400 flex items-center justify-center w-[20%] p-3 rounded-full  text-white">
          <SearchIcon sx={{ fontSize: "30px" }} />
        </div>
      </div>
    </div>
  );
};

export default SearchHero;
