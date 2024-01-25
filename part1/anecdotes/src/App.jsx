import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const indexOfMax = (arr) => {
  var max = arr[0];
  var maxIndex = 0;

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      maxIndex = i;
      max = arr[i]
    }
  }
  return maxIndex
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const VoteClick = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  const randomNumber = (max) => {
    return Math.floor(Math.random() * anecdotes.length);
  }
  
   
  const [selected, setSelected] = useState(0)
  const numAnecdotes = anecdotes.length
  const [votes, setVotes] = useState(anecdotes.map(() => 0))
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br></br>
      has {votes[selected]} votes
      <div>
      <Button handleClick={() => VoteClick()} text="vote"/>
      <Button handleClick={() => setSelected(randomNumber(numAnecdotes))} text="next anecdote"/>
      </div>

      <h1>Anecdote with the most votes</h1>
      {anecdotes[indexOfMax(votes)]}
      <br></br>
      has {votes[indexOfMax(votes)]} votes

    </div>
  )
}

export default App