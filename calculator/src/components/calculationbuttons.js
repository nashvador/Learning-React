import React, { useState, useMemo } from "react";

export default function Buttons(props) {
  const styles = {
    display: "grid",
    width: "480px",
    height: "480px",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "repeat(5, 1fr)",
    backgroundColor: "blue",
    padding: "10px",
  };
  let myCalculatorValue = "";

  // You can potentially use reduce for your functions

  const getButtonValues = useMemo(
    () =>
      function (getButtonValue) {
        myCalculatorValue += getButtonValue.currentTarget.value;
        props.setButtonValue(myCalculatorValue);
        console.log(myCalculatorValue);
      },
    [myCalculatorValue]
  );

  const getOperationValues = () => {
    if (props.operationValue.operation1 === null) {
      props.setOperationValue((PrevOpValue) => ({
        ...PrevOpValue,
        operation1: props.buttonValue,
      }));
      props.setButtonValue();
    } else {
      props.setButtonValue();
      props.setOperationValue((PrevOpValue) => ({
        ...PrevOpValue,
        operation2: props.buttonValue,
      }));
    }
  };

  // console.log(props.operationValue);
  return (
    <div className="calculator-grid" style={styles}>
      <button style={{ gridColumn: "1/3" }}>C</button>
      <button>Backspace</button>
      <button>=</button>
      <button value="7" onClick={getButtonValues}>
        7
      </button>
      <button value="8" onClick={getButtonValues}>
        8
      </button>
      <button value="9" onClick={getButtonValues}>
        9
      </button>
      <button onClick={getOperationValues}>+</button>
      <button value="4" onClick={getButtonValues}>
        4
      </button>
      <button value="5" onClick={getButtonValues}>
        5
      </button>
      <button value="6" onClick={getButtonValues}>
        6
      </button>
      <button>-</button>
      <button value="1" onClick={getButtonValues}>
        1
      </button>
      <button value="2" onClick={getButtonValues}>
        2
      </button>
      <button value="3" onClick={getButtonValues}>
        3
      </button>
      <button>X</button>
      <button value="0" onClick={getButtonValues} style={{ gridColumn: "1/3" }}>
        0
      </button>
      <button>.</button>
      <button>
        <span>&#247;</span>
      </button>
    </div>
  );
}
