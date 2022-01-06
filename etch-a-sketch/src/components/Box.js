import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import App from "../App";

export default function Box(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  // const [colorHover, setColorHover] = useState();
  // console.log(arrayBoxes);

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

  let arrayBoxes = useMemo(() => {
    console.log(props.boxSize);
    let arrayBoxes = [];
    for (let i = 0; i < props.boxSize * props.boxSize; i++) {
      arrayBoxes.push({ hoverOver: false, rgbValue: `rgb(255,255,255)` });
    }
    return arrayBoxes;
  }, [props.boxSize]);

  let handleMouseOver = useCallback(
    (id) => {
      // const id = Number(event.target.id);
      setActiveIndex(id);
      // console.log(activeIndex);

      // setColorHover(arrayBoxes);
      // let temp_state = [...colorHover];
      // let temp_element = { ...temp_state[id] };
      // temp_element.hoverOver = temp_element.hoverOver + true;
      // temp_state[id] = temp_element;
      // setColorHover(temp_state);
      arrayBoxes[id].hoverOver = true;
      const randomColor = () => Math.floor(Math.random() * 255);
      arrayBoxes[
        id
      ].rgbValue = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
    },
    [arrayBoxes]
  );

  // Have an object in the for loop with a colored property and then when you hover - set it to a rgb value,
  return (
    <div style={styles}>
      {arrayBoxes.map((el, l) => {
        const styleBox = { border: "1px solid black" };

        if (el.hoverOver) {
          styleBox.backgroundColor = el.rgbValue;
        }

        return (
          <div
            style={activeIndex === l ? { ...styleBox } : styleBox}
            id={l}
            key={l}
            onMouseOver={() => handleMouseOver(l)}
          ></div>
        );
      })}
    </div>
  );
}
