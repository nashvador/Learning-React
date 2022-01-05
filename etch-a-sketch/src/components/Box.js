import React, { useState, useEffect, useMemo } from "react";
import App from "../App";

export default function Box(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  //  index

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

  function handleMouseOver(id) {
    // const id = Number(event.target.id);
    setActiveIndex(id);
    // console.log(activeIndex);
    const randomColor = () => Math.floor(Math.random() * 255);
  }

  let arrayBoxes = useMemo(() => {
    console.log(props.boxSize);
    let arrayBoxes = [];
    for (let i = 0; i < props.boxSize * props.boxSize; i++) {
      arrayBoxes.push(i);
    }
    return arrayBoxes;
  }, [props.boxSize]);

  // Have an object in the for loop with a colored property and then when you hover - set it to a rgb value,

  return (
    <div style={styles}>
      {arrayBoxes.map((el, l) => {
        return (
          <div
            style={
              activeIndex === l
                ? {
                    border: "1px solid black",
                    backgroundColor: `rgb(28,192,75)`,
                  }
                : { border: "1px solid black" }
            }
            id={l}
            key={l}
            onMouseOver={() => handleMouseOver(l)}
          ></div>
        );
      })}
    </div>
  );
}
