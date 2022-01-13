import "./App.css";
import Buttons from "./components/calculationbuttons";
import Input from "./components/input";
import React, { useState } from "react";

function App() {
  const [buttonValue, setButtonValue] = useState([]);
  return (
    <div>
      <Input />
      <Buttons setButtonValue={setButtonValue} buttonValue={buttonValue} />
    </div>
  );
}

export default App;