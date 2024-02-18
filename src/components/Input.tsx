import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Input = ({
  location,
  placeholder,
  style,
  input,
  className = "",
}: any) => {
  return (
    <div
      style={style}
      className={`border w-full rounded-full flex items-center ${className} border-gray-200 px-2 mx-2`}
    >
      <SearchOutlinedIcon
        sx={{ color: style.color }}
        className="text-gray-500 "
      />
      {input && (
        <input
          style={{
            color: style?.textColor,
            backgroundColor: style.backgroundColor,
          }}
          placeholder={placeholder}
          className={`outline-none placeholder:text-[${style?.textColor}] p-2 w-full rounded-full`}
        />
      )}
    </div>
  );
};

export default Input;
