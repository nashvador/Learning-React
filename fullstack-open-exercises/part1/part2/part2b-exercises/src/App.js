import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

const handlePhoneChange = (event) => {
  setNewName(event.target.value)
}

const onClick = () => {
let phoneBool = false
persons.find(person => person.name == newName ? phoneBool = true : phoneBool = false)
if (phoneBool) {
  window.alert(`${newName} is already in the phonebook`)
} else setPersons((prevPersons) => ([...prevPersons, {name: newName}]) ) 
}


const preventReset = (event) => {
  event.preventDefault()
}

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={preventReset}>
        <div>
          name: <input value={newName} onChange={handlePhoneChange} />
        </div>
        <div>
          <button type="submit" onClick={onClick}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((personElements)=><p>{personElements.name}</p>)}
    </div>
  )
}

export default App