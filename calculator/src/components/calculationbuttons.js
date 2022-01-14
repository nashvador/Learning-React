import React, { useState } from "react";

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
  const getButtonValues = (getButtonValue) => {
    myCalculatorValue += getButtonValue.currentTarget.value;
    console.log(myCalculatorValue);
    props.setButtonValue(myCalculatorValue);
    // console.log(props.buttonValue);
  };

  return (
    <div className="calculator-grid" style={styles}>
      <button style={{ gridColumn: "1/3" }}>C</button>
      <button>Backspace</button>
      <button>=</button>
      <button value="7" onClick={getButtonValues}>
        7
      </button>
      <button>8</button>
      <button>9</button>
      <button>+</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>-</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>X</button>
      <button style={{ gridColumn: "1/3" }}>0</button>
      <button>.</button>
      <button>
        <span>&#247;</span>
      </button>
    </div>
  );
}
