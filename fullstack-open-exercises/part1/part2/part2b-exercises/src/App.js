import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

const handlePhoneChange = (event) => {
  setNewName(event.target.value)
}

const saveNmae = () => {
  setPersons((prevPersons)=>({...prevPersons, newName}))

}

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handlePhoneChange} />
        </div>
        <div>
          <button type="submit" onClick={(saveNmae)}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(persons => <p>{persons.name}</p>)}
    </div>
  )
}

export default App