import React, { useState, useMemo, useEffect } from "react";

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

  // You can potentially use reduce for your functions

  const getButtonValues = (getButtonValue) => {
    props.setButtonValue(
      (prevValue) => prevValue + getButtonValue?.target?.value
    );
  };

  const getOperationValues = () => {
    if (props.operationValue.operation1 === null) {
      props.setOperationValue((PrevOpValue) => ({
        ...PrevOpValue,
        operation1: props.buttonValue,
        operator: "plus",
      }));
      props.setButtonValue("");
    } else {
      props.setButtonValue("");
      props.setOperationValue((PrevOpValue) => ({
        ...PrevOpValue,
        operation2: props.buttonValue,
      }));
    }
  };

  // when trying to make the function for each you can use ${} to set the operator to change

  const onEqualButtonPress = () => {
    props.setOperationValue((PrevOpValue) => ({
      ...PrevOpValue,
      operation2: props.buttonValue,
    }));
  };

  useEffect(() => {
    if (Object.values(props.operationValue).includes("plus")) {
      let a = parseInt(props.operationValue.operation1, 10);
      let b = parseInt(props.operationValue.operation2, 10);
      let c = String(a + b);
      console.log(a + b);
      props.setOperationValue((PrevOpValue) => ({
        ...PrevOpValue,
        output: c,
      }));
      console.log(props.operationValue.output);
    }
  }, [props.operationValue.operation2]);

  return (
    <div className="calculator-grid" style={styles}>
      <button style={{ gridColumn: "1/3" }}>C</button>
      <button>Backspace</button>
      <button onClick={onEqualButtonPress}>=</button>
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
