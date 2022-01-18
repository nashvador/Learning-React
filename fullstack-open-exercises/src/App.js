import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
  ]);

  async function fetchData() {
    try {
      let response = await axios.get(`http://localhost:3001/persons`);
      console.log(response);
      setPersons(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newSearch, setNewSearch] = useState("");

  const handleChangeValue = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneValue = (event) => {
    setNewPhone(event.target.value);
  };

  const handleSearchValue = (event) => {
    setNewSearch(event.target.value);
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

  const searchBar = persons
    .filter((eachPerson) => eachPerson.name.includes(newSearch))
    .map((elem, i) => <p key={i}> {elem.name}</p>);

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input onChange={handleSearchValue}></input>
        {searchBar}
      </div>
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
