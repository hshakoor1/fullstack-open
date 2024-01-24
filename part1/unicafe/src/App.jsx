import { useState } from 'react'

const Display = props => <div>{props.text} {props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => {
  return (
    <tr>
      <td>
      {props.text}
      </td> 
      <td>
      {props.value}
      </td>
    </tr>
  )
}
const Statistics = ({good, bad, neutral}) => {

  if (good+bad+neutral === 0) {
    return (
      <div>
        No feedback given
      </div>
    )

  }
  return (
    <table>
      <tbody>
      <StatisticLine text='good' value={good} />
      <StatisticLine text='neutral' value={neutral} />
      <StatisticLine text='bad' value={bad} />
      <StatisticLine text='all' value={bad+neutral+good} />
      <StatisticLine text='average' value={Average(good, bad, neutral)} />
      <StatisticLine text='positive' value={PositivePct(good, bad, neutral)} />  
      </tbody>
    </table>
  )
}


const Average = (good, bad, neutral) => {
  return (good + -1 * bad)/(good + bad + neutral)
}

const PositivePct = (good, bad, neutral) => {
  return ((good/(good+bad+neutral)*100) + " %")
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
    <h1>give feedback</h1>
    <Button handleClick={() => setGood(good+1)} text="good" />
    <Button handleClick={() => setNeutral(neutral+1)} text="neutral" />
    <Button handleClick={() => setBad(bad+1)} text="bad" />
    <h1>statistics</h1>
    <Statistics good={good} bad={bad} neutral={neutral} />
    </div>

    
  )
}

export default App