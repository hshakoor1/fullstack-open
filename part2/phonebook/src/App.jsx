import { useState } from 'react'
import Person from "./components/Person"
import Search from "./components/Search"
import PersonForm from "./components/PersonForm"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 


  return (
    <div>
      <h2>Phonebook</h2>
      <Search collection={persons} />
      <h3>Add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h3>Numbers</h3>
      {persons.map((person) => <Person key={person.name} person={person} />)}
    </div>
  )
}

export default App