import "./App.css";
import Buttons from "./components/calculationbuttons";
import Input from "./components/input";
import React, { useState } from "react";

function App() {
  const [buttonValue, setButtonValue] = useState("");
  const [operationValue, setOperationValue] = useState({
    operation1: null,
    operation2: "",
    operator: "",
    output: false,
  });
  const [outputValue, setOutputValue] = useState();
  const [operator, setOperator] = useState();

  return (
    <div>
      <Input
        setButtonValue={setButtonValue}
        buttonValue={buttonValue}
        setOperationValue={setOperationValue}
        operationValue={operationValue}
        outputValue={outputValue}
        setOutputValue={setOutputValue}
        operator={operator}
        setOperator={setOperator}
      />
      <Buttons
        setButtonValue={setButtonValue}
        buttonValue={buttonValue}
        setOperationValue={setOperationValue}
        operationValue={operationValue}
        outputValue={outputValue}
        setOutputValue={setOutputValue}
        operator={operator}
        setOperator={setOperator}
      />
    </div>
  );
}

export default App;
