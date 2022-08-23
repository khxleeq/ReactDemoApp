import { React, useState } from 'react'


const Count = () => {
    const [counter, setCounter] = useState(0);
    const [savedCounts, setSavedCounts] = useState([]);
    

      //increase counter
    const increase1 = () => {
    setCounter(count => count + 1);
  };

     //increase counter
    const increase5 = () => {
    setCounter(count => count + 5);
          };
 
  //decrease minus 1
    const decrease1 = () => {
    setCounter(count => count - 1);
  };

  //decrease minus 5

    const decrease5 = () => {
    setCounter(count => count - 5);
  };
 
  //reset counter 
    const reset = () =>{
    setCounter(0)
  }

  // save count
  const saveCount = () => {
    setSavedCounts([...savedCounts, counter]);
    console.log(counter);
    reset();
  };

    
  return(
  <div className="counter">
  <h1>React Counter</h1>
  <span className="counter__output">{counter}</span>
  <div className="btn__container">
    <button className="control__btn" onClick={increase1}>+1</button>
    <button className="control__btn" onClick={decrease1}>-1</button>
    <button className="reset" onClick={reset}>Reset</button>
    <button className="reset" onClick={saveCount}>Save</button>
    <button className="control__btn" onClick={increase5}>+5</button>
    <button className="control__btn" onClick={decrease5}>-5</button>
  </div>

  <div className='history_container'>
  <ul className='historyList'>
      {savedCounts.map((saveCount,index) => (
        <li key={index}>{saveCount}</li>
      ))}
    </ul>
  </div>
</div>
);

}


export default Count;
 

