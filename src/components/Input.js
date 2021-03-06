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
  min,
  onSubmit
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
        autoFocus={field === "bill" ? "autofocus" : false}
        // onBlur={onSubmit}
        onKeyUp={e => {
          if(e.keyCode ===13) onSubmit(e);
        }}
      />
    </>
  );
}

export default Input;