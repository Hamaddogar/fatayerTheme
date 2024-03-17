import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
const QuantityManager = ({ qty, setQty }: any) => {
  // const [quantity, setQuantity] = useState(1);
  return (
    <div className="flex p-3 gap-6 w-full border border-gray-200 rounded-lg items-center justify-center">
      <div
        onClick={() => setQty(qty - 1)}
        className={`rounded-full border-2 ${qty === 1
          ? "text-[#666666] border-[#666666] pointer-none"
          : "text-primary border-primary "
          }`}
      >
        <RemoveIcon />
      </div>
      <span className="font-semibold">{qty}</span>
      <div
        onClick={() => setQty(qty + 1)}
        className="rounded-full border-2 border-primary text-primary">
        <AddIcon />
      </div>
    </div>
  );
};

export default QuantityManager;
