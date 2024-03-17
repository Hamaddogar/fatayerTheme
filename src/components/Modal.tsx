import * as React from "react";

import Modal from "@mui/material/Modal";
import Description from "./ProductModal/Description";
import ProductImage from "./ProductModal/ProductImage";
import CloseIcon from "@mui/icons-material/Close";

export default function BasicModal({
  id,
  open,
  handleOpen,
  handleClose,
  price,
  desc,
  name,
  images,
}: {
  open: any;
  handleOpen: any;
  handleClose: any;
  price: number;
  name: string;
  desc?: string;
  id: number;
  images: any;
}) {
  return (
    <div className="flex">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          className="w-[100%]  lg:w-[70vw]"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            height: "95vh",
            backgroundColor: "white",
            border: "none",
            outline: "none",
            boxShadow: "24",
            padding: "16px",
            overflowY: "auto",
          }}
        >
          <div
            onClick={handleClose}
            className="p-3 flex cursor-pointer w-full justify-end items-end"
          >
            <CloseIcon />
          </div>
          <div className="flex items-start max-md:flex-col ">
            <ProductImage images={images} />
            <Description
              id={id}
              desc={desc && desc}
              price={price}
              name={name}
              handleClose={handleClose}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}
