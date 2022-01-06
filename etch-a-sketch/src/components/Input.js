import React, { useState } from "react";
import App from "../App";

export default function Input(props) {
  const onClickButton = () => {
    const enterSize = prompt("Please Enter a Size between 1 and 100.");
    enterSize >= 101 || enterSize <= 1
      ? alert("Your size is outside the boundaries, please Reenter")
      : props.setBoxSize(enterSize);
  };

  return (
    <div className="button-outer">
      <button className="button" onClick={onClickButton}>
        Enter Size
      </button>
    </div>
  );
}
