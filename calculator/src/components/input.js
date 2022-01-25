import React, { useState } from "react";

export default function Input(props) {
  const styles = {};
  console.log(props.operationValue);

  return (
    <div>
      <h1 style={styles}>
        {props.operationValue.output === false
          ? props.buttonValue
          : props.operationValue.output}
      </h1>
    </div>
  );
}
