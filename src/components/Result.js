import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import Input from './InputTwo';

function Result({
  setTip,
  setBill,
  setMood,
  clearError,
  setSplit,
  setResult,
  setError,
  isError,
  error
}){
  
  const state = useSelector(state => state);

  function updateSplit(value){
    if (state.split + value > 0){
      setSplit(parseInt(state.split) + parseInt(value));
    }
  }
  const result = ((
    parseFloat(state.bill) + 
    parseFloat(((state.tip)/100) * 
    state.bill)) / 
    parseInt(state.split))
    .toFixed(2);
  return (
    <div>  
      <p>Bill:  
        <Input 
          title="Tab/Bill"
          field="bill"
          setError={setError}
          setResult={setResult}
          clearError={clearError}
          action={setBill}
          className={null}
          step={.01}
        />
      </p>
      <h3>{isError && error}</h3>
      {/* <div className="d-flex flex-row align-items-center p-2 margin-auto text-center"> */}
        {/* <p>Split: {state.split} person{state.split>1 && "s"}</p>
       */}
       <p>
        Split: 
        <Input 
          title="Split"
          field="split"
          setError={setError}
          setResult={setResult}
          clearError={clearError}
          action={setSplit}
          className="shorter"
          step={1}
        />  person{state.split>1 && "s"}
       </p>
        {/* <div className="d-flex flex-column">
            <button 
              onClick={(e) => {
                updateSplit(1);
              }}>
                +
            </button>
            <button 
              onClick={(e) => {
                updateSplit(-1);
              }}>
                -
            </button>
        </div> */}
      {/* </div> */}
        <p className="p-2">Tip Amount ( 
          <Input 
            title="Tip"
            field="tip"
            error={null}
            isError={false}
            action={setTip}
            setError={setError}
            setResult={setResult}
            clearError={clearError}
            className="short"
            step={1}
            />
          %): ${((state.bill / state.split) * state.tip/100).toFixed(2)}</p>
    
            <h1>Your Amount: ${isNaN(result) || result}</h1>
    </div>
  )
}

export default Result;