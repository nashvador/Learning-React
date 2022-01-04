import "./App.css";
import Input from "./components/Input";
import Box from "./components/Box";
import React, { useState } from "react";
function App() {
  const [boxSize, setBoxSize] = useState(64);
  return (
    <div>
      <Input setBoxSize={setBoxSize} boxSize={boxSize} />
      <Box setBoxSize={setBoxSize} boxSize={boxSize} />
    </div>
  );
}

export default App;
