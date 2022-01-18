import React, { useState } from "react";

export default function Input(props) {
  const styles = {
    backgroundColor: "black",
    width: "360px",
    color: "white",
  };
  console.log(props.operationValue);

  return (
    <div>
      <h1>
        {props.operationValue.output === false
          ? props.buttonValue
          : props.operationValue.output}
      </h1>
    </div>
  );
}
