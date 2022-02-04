import React from "react";
import {useState} from 'react';

export function Counter(){
  const [counter, setCounter] = useState(0)
  
  function Increment(){
    setCounter(counter+1)
  }
  function Drecrement(){
    setCounter(counter-1)
  }
  return(
    <>
    <h1>{counter}</h1>
    
      <button onClick={Increment}>Increment</button>
      <button onClick={Drecrement}>Decrement </button>
    </>
  )
}
