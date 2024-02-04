import React, {useState} from "react"
import Person from "./Person"

const Search = ({collection}) => {
    const [found, setFound] = useState([])
    const [input, setInput] = useState("")

    const inputTextChangeHandler = (event) => {
        event.preventDefault()
        setInput(event.target.value)

        if (event.target.value === '') {
            setFound([])
            return
        }
        setFound(collection.filter(i => i.name.toLowerCase().includes(event.target.value.toLowerCase())))
    }

    return (
        <div>
            <form>
                filter shown with: <input value={input} onChange={inputTextChangeHandler} />
            </form>
            <ul>
                {found.map(person => <Person key={person.name} person={person} />)}
            </ul>
        </div>
    )
}

export default Search