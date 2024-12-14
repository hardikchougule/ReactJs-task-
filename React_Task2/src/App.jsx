// Task: Create a React counter app that has increment, decrement, and reset buttons.
// Use React state to manage the counter value.

import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
 
  const inc_count = ()=>{
    setCounter(counter+1);
  };

  const dec_count = ()=>{
    setCounter(counter-1);
  };

  const reset = ()=>{
    setCounter(0);
  };


  return (
    <>
      <div className="card">
      <h1 className='result'>{counter}</h1>
        <button className='increment' onClick={inc_count}>
         Increase Count 
        </button>
        <button className='decrement' onClick={dec_count}>
          Decrease Count
        </button>
        <button className='reset' onClick={reset}>
          Reset Count
        </button>
      </div>
    </>
  )
}

export default App
