import { React, useState } from 'react'


const Count = () => {
    const [counter, setCounter] = useState(0);
    

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

  return(
  <div className="counter">
  {/* <h1>React Counter</h1> */}
  <span className="counter__output">{counter}</span>
  <div className="btn__container">
    <button className="control__btn" onClick={increase1}>+1</button>
    <button className="control__btn" onClick={decrease1}>-1</button>
    <button className="reset" onClick={reset}>Reset</button>
    <button className="control__btn" onClick={increase5}>+5</button>
    <button className="control__btn" onClick={decrease5}>-5</button>
  </div>
</div>
);

}


export default Count;
 
// export default function App() {
//   const [counter, setCounter] = useState(0);
 
//   //increase counter
//   const increase = () => {
//     setCounter(count => count + 1);
//   };
 
//   //decrease counter
//   const decrease = () => {
//     setCounter(count => count - 1);
//   };
 
//   //reset counter 
//   const reset = () =>{
//     setCounter(0)
//   }
 
//   return (
//     <div className="counter">
//       <h1>React Counter</h1>
//       <span className="counter__output">{counter}</span>
//       <div className="btn__container">
//         <button className="control__btn" onClick={increase}>+</button>
//         <button className="control__btn" onClick={decrease}>-</button>
//         <button className="reset" onClick={reset}>Reset</button>
//       </div>
//     </div>
//   );
// }


