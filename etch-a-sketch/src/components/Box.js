import React, { useState } from "react";
import App from "../App";

export default function Box(props) {
  const randomColor = () => Math.floor(Math.random() * 255);

  const styles = {
    width: "560px",
    height: "560px",
    border: "3px solid black",
    display: "grid",
    gridTemplateColumns: `repeat(${props.boxSize}, 1fr)`,
    gridTemplateRows: `repeat(${props.boxSize}, 1fr)`,
  };

  const styleBoxes = {
    border: "1px solid black",
    // backgroundColor: `rgb(${randomColor()},${randomColor()},${randomColor()})`,
  };

  function handleMouseOver(event) {
    const id = event.target.id;
    console.log(id);
  }

  let arrayBoxes = [];
  for (let i = 0; i < props.boxSize * props.boxSize; i++) {
    arrayBoxes.push(i);
  }

  return (
    <div style={styles}>
      {arrayBoxes.map((el, l) => {
        return (
          <div
            style={styleBoxes}
            id={l}
            key={l}
            onMouseOver={handleMouseOver}
          ></div>
        );
      })}
    </div>
  );
}
