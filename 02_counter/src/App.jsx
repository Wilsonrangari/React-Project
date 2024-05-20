import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

    const  addValue = () =>{
      if (counter == 20) {
        console.log("Cant increase the value after 20");
        counter == 20
      } else {
        counter =  counter + 1
      }
     
     setCounter(counter)
      console.log("Clicked "+ counter)

    }

    const removeValue = () =>{
      if( counter == 0){
        counter == 0
      }
      else{
        counter = counter - 1

      }
      setCounter(counter)
      console.log("Clciked "+ counter);
    }

  return (
    <>
      <h1>Hi Wilson welcome to React + Vite</h1>
      <h3 >Counter Value {counter}</h3>
      <button 
        onClick={addValue}>Add Value {counter}</button>
      <br />
      <button
        onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
