import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(5)

  // let counter = 5
  
  

  const addValue = () => {
    if (counter < 20){
      counter += 1;
      setCounter(counter)
    }
  
  }

  const removeValue = () => {
    if (counter > 0){
      counter -= 1;
      setCounter(counter)
    }
  
  }

  return (
    <>

      <h1>Chai aur React</h1>
      <h3>counter value is {counter}</h3>

      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
