import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(6)




  // let counter = 6


  const addValue = () => {
    // console.log("value added", Math.random()); 
    console.log("clicked",counter);
    // counter = counter + 1
    // setCounter(counter + 1)

    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
    <h1>Javascript and react</h1>
    <h2>Counter value: {counter} </h2>

    <button
    onClick={addValue}
    >Add value{counter}</button>
    <br />
    <br />
    <button
      onClick={removeValue}
    >remove value {counter} </button>
    <p>footer: {counter} </p>

    </>
  )
}

export default App
