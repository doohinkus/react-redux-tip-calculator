import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
// import NumericInput from 'react-numeric-input';



function Input({ 
  title, 
  setError, 
  action, 
  field, 
  setResult,
  clearError,
  className,
  step
}){
  const state = useSelector(state => state);
  const amount = useSelector(state => state[field]);
  const error = useSelector(state => state.error);
  const isError = useSelector(state => state.isError);
  
  const [isTipExplaination, setTipExplaination] = useState(false);


  function checkInput(e){
    // console.log(e)
    // action(e);

    const regEx = /^[0-9]*[.]?[0-9]*$/;
    if (regEx.test(e.target.value)){
      action(e.target.value);
      clearError();
    } else{
      setError("Please enter a valid amount.");
    }
  }
  
  const isTip = title === "Tip";
  const explaination = (
    <p className="p3">For example, if your bill is $10.00 and you split the bill between two persons, then your share of the bill is $5.00. Your tip is based on $5.00, instead of the entire bill $10.00.</p>
  );
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
        min={1}
        className={className}
      />
    </>
  );
}

export default Input;