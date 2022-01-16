import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const handleChangeValue = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneValue = (event) => {
    setNewPhone(event.target.value);
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
      setPersons((prevPersons) => [
        ...prevPersons,
        { name: newName, number: newPhone },
      ]);
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
          number: <input onChange={handlePhoneValue} />
        </div>
        <div>
          <button onClick={clickFunction} type="submit">
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((names, i) => (
        <p key={i}>
          {names.name}, {names.number}
        </p>
      ))}
    </div>
  );
};

export default App;
