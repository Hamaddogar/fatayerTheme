import React from "react";
// import "./CustomRadio.css";
const CustomRadio = ({ item }: { item: string }) => {
  return (
    <>
      <input
        disabled={item === "Choose Delivery Time"}
        type="radio"
        name="checkbox"
        className="check"
        id="radio1"
      />
      <label htmlFor="radio1">
        <div className="container">
          <div className="cRadioBtn">
            <div className="overlay"></div>

            <div className="drops lgDrop"></div>
          </div>
        </div>
      </label>
    </>
  );
};

export default CustomRadio;
