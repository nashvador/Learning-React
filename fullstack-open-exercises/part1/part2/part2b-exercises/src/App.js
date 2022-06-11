import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

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