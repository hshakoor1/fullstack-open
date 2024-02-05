import { useEffect, useState } from 'react'
import Person from "./components/Person"
import Search from "./components/Search"
import PersonForm from "./components/PersonForm"
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, []) 


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