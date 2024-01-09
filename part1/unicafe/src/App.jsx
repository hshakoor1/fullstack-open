import { useState } from 'react'

const Display = props => <div>{props.text} {props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

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
      <Display text='good' value={good} />
      <Display text='neutral' value={neutral} />
      <Display text='bad' value={bad} />
      <Display text='all' value={bad+neutral+good} />
      <Display text='average' value={Average(good, bad, neutral)} />
      <Display text='positive' value={PositivePct(good, bad, neutral)} />
    </div>
  )
}

export default App