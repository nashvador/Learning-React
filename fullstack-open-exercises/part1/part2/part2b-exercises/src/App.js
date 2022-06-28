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
}, []) 

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
let inBook = false
let personId = null
persons.find(person => person.name == newName ? phoneBool = true : phoneBool = false)
persons.find(person => person.name == newName ? personId = person.id : personId = null)
if (phoneBool) {
  persons.find(person => person.number == newNumber ? inBook = true : inBook = false)
  if (inBook) {
    window.alert(`${newName} is already in the phonebook`)
  } else {
    if (window.confirm("Are you sure you want to replace the number?")) {
      axios.put(`http://localhost:3001/persons/${personId}`, {name: newName, number: newNumber}).then( () => {
        return axios.get('http://localhost:3001/persons')
      }).then(response => setPersons(response.data))
      
    }
    }
  } else {
let newPerson = {name: newName, number: newNumber} 
// setPersons((prevPersons) => ([...prevPersons, {name: `${newName}`, number: `${newNumber}`}])) Previous for setting state
axios.post(`http://localhost:3001/persons`, newPerson).then(response => {console.log(response.data);
setPersons((previousPersons) => [...previousPersons, response.data])}) 
}}

// Delete without updating the state
// const deleteItem = (index) => {
//   setPersons((prevState) => {
//     let items = [...prevState];
//     console.log(items);
//     items.splice(index, 1);
//     return items;
//   });
// }

const deleteItem = (index) => {
  axios.delete(`http://localhost:3001/persons/` + index).then( () => {
    return  axios.get('http://localhost:3001/persons')  }
  ).then(response => {
    setPersons(response.data)
  })

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
      {persons.map((personElements, id)=><p>{personElements.name}, {personElements.number}<button onClick={() => deleteItem(personElements.id)}>delete</button></p>)}
    </div>
  )
}

export default App