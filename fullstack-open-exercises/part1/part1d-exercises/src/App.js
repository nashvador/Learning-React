import { useState } from 'react'

const Good = ({good, bad, neutral, all}) => {
return (
  <div>
  <p>good {good}</p>
  <p>neutral {neutral}</p>
  <p>bad {bad}</p>
  <p>all {all}</p>
  <p>average {(good-bad)/all}</p>
  <p>average {good/all*100}%</p>
  </div>
)
}

const Button = ({setBad, setGood, setNeutral}) => {

  return( <div>  <button onClick={() => setGood((count) => count +1)}>good</button>
  <button onClick={() => setNeutral((count) => count +1)}>neutral</button>
  <button onClick={() => setBad((count) => count +1)}>bad</button>
  </div>)
  }

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = bad+good+neutral


  return (
    <div>
    <h1>give feedback</h1>
<Button setBad={setBad} setGood={setGood} setNeutral={setNeutral} />
  <h1>Stats</h1>
    {all ==0 ? <p>No feedback given</p> :<Good good={good} bad={bad} neutral={neutral} all={all}/>}
    </div>
  )
}

export default App