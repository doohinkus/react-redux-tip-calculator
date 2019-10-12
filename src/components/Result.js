import React from "react";
import { useSelector } from 'react-redux';

function Result(){

  const state = useSelector(state => state)

  return (
    <div>  
      <h1>Your Amount: ${state.result.toFixed(2)}</h1>
      <p>Total Bill: ${state.bill}</p>
      <p>Split: {state.split} person{state.split>1 && "s"}</p>
      <p>Tip Amount ({state.tip} %): ${((state.bill / state.split) * state.tip/100).toFixed(2)}</p>
    </div>
  )
}

export default Result;