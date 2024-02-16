import * as React from "react";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { sections } from "../../constants/constants";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const CategoryModal = ({
  open,
  setOpen,
  handleClose,
  handleOpen,
  list
}: {
  open: boolean;
  setOpen: any;
  handleClose: any;
  handleOpen: any;
  list: any
}) => {
  const mobile = useMediaQuery("(max-width:500px)");
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: mobile ? 375 : 500,
    height: "100vh",
    bgcolor: "background.paper",
    borderRadius: "10px",
    outline: "none",
    boxShadow: 24,
  };
  const router = useRouter();
  const handleLink = (link: any) => {
    router.push(link);
    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex items-center  border-b border-gray-200">
            <h1 className="w-full p-3 ml-5 font-semibold text-lg  text-center">
              Categories
            </h1>
            <div
              onClick={handleClose}
              className="border-gray-200 cursor-pointer m-1 rounded-lg border p-2"
            >
              <CloseIcon />
            </div>
          </div>
          <div className="overflow-y-scroll max-h-screen noscrollbar ">
            {list && list.map((section: any) => (
              <div
                onClick={() =>
                  handleLink(
                    "#" + section.name.localized.toLocaleLowerCase().split(" ").join("-")
                  )
                }
                key={section._id}
                className="p-4 flex items-center justify-between border-b border-gray-200"
              >
                <div className="font-semibold">{section.name.localized}</div>
                <div className="flex items-center">
                  {/* <div className="w-[30px] flex items-center justify-center h-[30px] text-white rounded-full bg-primary">
                    {section.products.length}
                  </div> */}
                  <ArrowForwardIosIcon />
                </div>
              </div>
            ))}
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default CategoryModal;
