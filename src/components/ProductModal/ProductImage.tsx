import React from "react";
import { Grid } from "@mui/material";
import Image from "next/image";
const ProductImage = ({ images }: { images: any }) => {
  return (
    <Grid
      className="border border-gray-200 flex items-center justify-center h-max "
      item
      xs={6}
    >
      <Image
        style={{
          borderRadius: "7px",
          objectFit: "contain",
          cursor: "pointer",
        }}
        className=""
        // src={"/p2.png"}
        src={images && images.length > 0 ? images[0] : ""}
        alt="men"
        width={380}
        height={270}
      />
    </Grid>
  );
};

export default ProductImage;
