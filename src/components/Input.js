import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';



function Input({ 
  title, 
  setError, 
  action, 
  field, 
  calculate, 
  next, 
  prev, 
  buttonTitleCalculate, 
  buttonTitleNext, 
  buttonTitlePrev,
  clearError
}){
  // const route = useSelector(state => state.route);
  const amount = useSelector(state => state[field]);
  const error = useSelector(state => state.error);
  const isError = useSelector(state => state.isError);
  // const [value, setValue] = useState("");


  function checkInput(e){
    const regEx = /^[0-9]*[.]?[0-9]*$/;
    if (regEx.test(e.target.value)){
      action(e.target.value);
      clearError()
    } else{
      setError("Please enter a valid amount.")
    }
  }
  
  console.log("ERRROR", error, " ", isError)
  return (
    <>
      <h2>{title}: {amount}</h2>
      <h3>{isError && error}</h3>
      <input 
        type="text"
        name={field}
        inputMode="decimal"
        pattern="[0-9]*"
        maxLength={11}
        onChange={checkInput}
        value={amount}
      />
      <div className="d-flex mt-3">
        {buttonTitlePrev && 
          (<button className="btn btn-primary d-inline m-2" 
          onClick={() => prev()}>{buttonTitlePrev}</button>)
        }
        {buttonTitleNext && (
          <button className="btn btn-primary d-inline m-2" 
          onClick={() => next()}>{buttonTitleNext}</button>
          )
        }
        {buttonTitleCalculate && (
          <button className="btn btn-primary d-inline m-2" 
          onClick={() => calculate()}>{buttonTitleCalculate}</button>

        )}
      </div>
    </>
  );
}

export default Input;