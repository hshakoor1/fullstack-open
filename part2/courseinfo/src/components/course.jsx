

const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p>Total number of exercises {sum}</p>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => {
  return (
    <Part part={parts}></Part>
  )
}

const Course = ({course}) => {
    const name = course.name
    const parts = course.parts
    return (
        <div>
        <Header course={name} />
        {parts.map(parts => <Content key={parts.id} parts={parts} />)}
        <Total sum={parts.map(parts => parts.exercises).reduce((a,b) => a+b)} />
      </div>
    )
}


export default Course