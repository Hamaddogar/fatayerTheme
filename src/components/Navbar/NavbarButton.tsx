import React from "react";

const NavbarButton = ({ Icon }: { Icon: any }) => {
  return (
    <div className="p-2 rounded-lg border border-black bg-white">
      <Icon sx={{ fontSize: "28px" }} />
    </div>
  );
};

export default NavbarButton;
