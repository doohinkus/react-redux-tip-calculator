import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';

function Input({ 
  title, 
  setError, 
  action, 
  field, 
  setResult,
  clearError,
  className,
  step,
  min
}){
  const amount = useSelector(state => state[field]);
  
  function checkInput(e){
    const regEx = /^[0-9]*[.]?[0-9]*$/;
    if (regEx.test(e.target.value)){
      action(e.target.value);
      clearError();
    } else{
      setError("Please enter a valid amount.");
    }
  }
  
  return (
    <>
      <input 
        type="number"
        step={step}
        name={field}
        inputMode="decimal"
        pattern="[0-9]+.[0-9]{2}?"
        maxLength={11}
        onChange={checkInput}
        value={amount}
        min={min}
        className={className}
        autofocus={field === "bill" ? "autofocus" : "false"}
      />
    </>
  );
}

export default Input;