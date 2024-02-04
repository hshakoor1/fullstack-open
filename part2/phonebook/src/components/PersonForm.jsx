import { useState } from 'react'
import Person from "./Person"

const PersonForm = ({persons, setPersons}) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }

    const addPerson = (event) => {
        event.preventDefault()
        const personObject = {
            name: newName,
            number: newNumber,
            id: persons.length + 1,
        }
        if (persons.some(e => e.name == newName)) {
            alert(`${newName} is already added to phonebook`)
            console.log("already exists")
        } else {
            setPersons(persons.concat(personObject))
        }
        setNewName('')
        setNewNumber('')
    }

    return (
        <div>
            <form onSubmit={addPerson}>
                <div>
                name: 
                <input 
                    value={newName}
                    onChange={handleNameChange}/>
                </div>
                <div>
                number: 
                <input
                    value={newNumber}
                    onChange={handleNumberChange}/>
                </div>
                <div><button type="submit">add</button></div>
            </form>
        </div>
    )
}

export default PersonForm
