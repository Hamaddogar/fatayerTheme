import React, { useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
const Navbar2 = () => {
  const [navbarStyle, setNavbarStyle] = useState(1);
  return (
    <div className="bg-white flex items-center justify-between px-6 py-4  w-full">
      <div className="flex items-center gap-4">
        <MenuOutlinedIcon />
        {navbarStyle !== 1 && <p className="text-xl font-bold">LOGO</p>}
      </div>
      {navbarStyle == 1 && <p className="text-xl font-bold">LOGO</p>}
      <div className="flex items-center gap-4">
        <SearchOutlinedIcon />
        <ShoppingCartOutlinedIcon />
      </div>
    </div>
  );
};

export default Navbar2;
