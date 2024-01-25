import { useState } from 'react'
import viteLogo from '/vite.svg'

const Header = (props) => {
  return (
    <h1>
        {props.header}
    </h1>
  )
}

const Part = (props) => {
  return (
      <p>
        {props.part} {props.exercise}
      </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part = {props.parts[0].name} exercise = {props.parts[0].exercises} />
      <Part part = {props.parts[1].name} exercise = {props.parts[1].exercises} />
      <Part part = {props.parts[2].name} exercise = {props.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  return (
      <p>
        Number of exercises {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}
      </p>
  )
}


const App = () => {
  const [ counter, setCounter ] = useState(0)

  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>
        plus
      </button>
      <button onClick={() => setCounter(0)}> 
        zero
      </button>
    </div>
  )
}

export default App

