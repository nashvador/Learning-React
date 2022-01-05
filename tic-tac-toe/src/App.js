import "./App.css";
import React, { useState } from "react";

function App() {
  const [clickFunction, setClickfunction] = React.useState();
  const styles = {
    border: "1px solid black",
    display: "flex",
    fontSize: "90px",
    alignItems: "center",
    justifyContent: "center",
  };
  let tictactoeArray = [];
  for (let i = 0; i < 9; i++) {
    tictactoeArray.push({ id: i, clicked: false });
  }

  // setClickfunction(tictactoeArray);
  // function handleClick(id) {
  //   setClickfunction((prevState) => ({
  //     ...prevState,
  //     clicked: clicked.id === id ? {}
  //   }));
  // }

  return (
    <div className="grid">
      {tictactoeArray.map((el, i) => (
        <div style={styles} key={i}></div>
      ))}
    </div>
  );
}

export default App;
