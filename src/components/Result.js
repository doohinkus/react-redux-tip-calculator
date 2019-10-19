import React, { useEffect } from "react";
import { useSelector } from 'react-redux';

function Result({...props}){
  
  const state = useSelector(state => state);
  useEffect(() => {
    console.log("fired!!!")
    props.updateTotal()
  },[])
  function updateTip(value){
    props.setTip(parseInt(state.tip) + parseInt(value))
  }
 

  return (
    <div>  
      <h1>Your Amount: ${state.result}</h1>
      <p>Total Bill: ${state.bill}</p>
      <p>Split: {state.split} person{state.split>1 && "s"}</p>
      <p onClick={(e) => {
        updateTip(1);
        props.updateTotal()
      }}>Tip Amount ({state.tip} %): ${((state.bill / state.split) * state.tip/100).toFixed(2)}</p>
    </div>
  )
}

export default Result;