import { FormControl, OutlinedInput } from "@mui/material";
import React from "react";

const Form = ({ placeholder }: { placeholder: string }) => {
  return (
    <form noValidate className="w-full" autoComplete="off">
      <FormControl sx={{ width: "100%" }}>
        <OutlinedInput placeholder={placeholder} />
      </FormControl>
    </form>
  );
};

export default Form;
