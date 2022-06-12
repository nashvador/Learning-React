import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

useEffect(()=> {
  axios.get('http://localhost:3001/persons').then(response => {
    setPersons(response.data)
  })
}, [] ) 

const handleNameChange = (event) => {
  setNewName(event.target.value)
}

const handlePhoneChange = (event) => {
  setNewNumber(event.target.value)
}

const handleSearchChange = (event) => {
  setNewSearch(event.target.value)
}

const onClick = () => {
let phoneBool = false
persons.find(person => person.name == newName ? phoneBool = true : phoneBool = false)
if (phoneBool) {
  window.alert(`${newName} is already in the phonebook`)
} else setPersons((prevPersons) => ([...prevPersons, {name: `${newName}`, number: `${newNumber}`}])) 
}

const preventReset = (event) => {
  event.preventDefault()
}

  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with <input value={newSearch} onChange={handleSearchChange}></input></div>
      {persons.filter(person => person.name.toLowerCase().includes(newSearch) === true).map(values => <p>{values.name}</p>)}
      <h2>Add a new</h2>
      <form onSubmit={preventReset}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>number: <input value={newNumber} onChange={handlePhoneChange}/></div>
        <div>
          <button type="submit" onClick={onClick}>add</button>
        </div>
        
      </form>
      <h2>Numbers</h2>
      {persons.map((personElements)=><p>{personElements.name}, {personElements.number}</p>)}
    </div>
  )
}

export default App