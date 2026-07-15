import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card2 from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-2xl rounded-2xl'>Tailwind</h1>
      <Card2 userName="ghost" btnText="click me" />
      <Card2 userName="code" btnText="visit me" />

    </>
  )
}

export default App
