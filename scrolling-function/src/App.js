import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  var someElement = document.querySelectorAll(".content-box");

  let i = 0;
  let oldScrollY = 0;

  const [direction, setDirection] = useState("up");

  const controlDirection = () => {
    if (window.scrollY > oldScrollY) {
      setDirection("down");
      console.log("down");
    } else {
      setDirection("up");
    }
    oldScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", controlDirection);
    return () => {
      window.removeEventListener("scroll", controlDirection);
    };
  }, []);

  return (
    <div>
      <h1>Scroll to see the animation</h1>
      <div className="content-box"></div>
      <div className="content-box"></div>
      <div className="content-box"></div>
      <div className="content-box active"></div>
      <div className="content-box active"></div>
      <div className="content-box active"></div>
      <div className="content-box active"></div>
      <div className="content-box active"></div>
      <div className="content-box active"></div>
    </div>
  );
}

export default App;
