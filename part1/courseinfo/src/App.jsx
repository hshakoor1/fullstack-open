import { useState } from 'react'
import viteLogo from '/vite.svg'

// const Hello = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <p>
//         Hello {props.name}, you are {props.age} years old
//       </p>
//     </div>
//   )
// }

// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name='Maya' age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   )
// }


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
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header header = {course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App
