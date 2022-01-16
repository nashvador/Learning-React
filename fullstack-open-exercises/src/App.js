import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleChangeValue = (event) => {
    setNewName(event.target.value);
  };

  const clickFunction = (event) => {
    event.preventDefault();

    let result = persons.find((obj) => {
      if (obj.name === newName) {
        return true;
      }
    });

    if (result) {
      alert(`${newName} is already in the box`);
    } else {
      setPersons((prevPersons) => [...prevPersons, { name: newName }]);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={handleChangeValue} />
        </div>
        <div>
          <button onClick={clickFunction} type="submit">
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((names, i) => (
        <p key={i}>{names.name}</p>
      ))}
    </div>
  );
};

export default App;
