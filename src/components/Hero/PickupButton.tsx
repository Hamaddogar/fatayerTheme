import React, { useState } from "react";
import PickupModal from "../PickupModal";

const PickupButton = ({ text, radius }: any) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{ borderRadius: radius }}
        className={
          "w-full text-white p-3 font-semibold hover:opacity-70 bg-primary "
        }
      >
        {text}
      </button>
      <PickupModal open={open} setOpen={setOpen} />
    </>
  );
};

export default PickupButton;
