import "./Components/steps.css";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(1);

  return (
    <div>
      <div className="container">
        <div className="number active">1</div>
        <div className={count >= 2 ? "number active" : "number"}>2</div>
        <div className={count >= 3 ? "number active" : "number"}>3</div>
        <div className={count >= 4 ? "number active" : "number"}>4</div>
      </div>
      <div className="buttons">
        <button
          className={count >= 2 ? "btn active" : "btn previous"}
          onClick={() => setCount(count - 1)}
        >
          Previous
        </button>
        <button
          className={count < 4 ? "btn active" : "btn previous"}
          onClick={() => setCount(count + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
