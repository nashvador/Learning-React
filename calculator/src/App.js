import "./App.css";
import Buttons from "./components/calculationbuttons";
import Input from "./components/input";
import React, { useState } from "react";

function App() {
  const [buttonValue, setButtonValue] = useState("");
  const [operationValue, setOperationValue] = useState({
    operation1: null,
    operation2: "",
    output: "",
  });
  return (
    <div>
      <Input setButtonValue={setButtonValue} buttonValue={buttonValue} />
      <Buttons
        setButtonValue={setButtonValue}
        buttonValue={buttonValue}
        setOperationValue={setOperationValue}
        operationValue={operationValue}
      />
    </div>
  );
}

export default App;
