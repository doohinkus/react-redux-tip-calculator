import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';



function Input({ 
  title, 
  setError, 
  action, 
  field, 
  setResult,
  clearError
}){
  const state = useSelector(state => state);
  const amount = useSelector(state => state[field]);
  const error = useSelector(state => state.error);
  const isError = useSelector(state => state.isError);
  
  const [isTipExplaination, setTipExplaination] = useState(false);


  function checkInput(e){
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
        type="text"
        name={field}
        inputMode="decimal"
        pattern="[0-9]*"
        maxLength={11}
        onChange={checkInput}
        value={amount}
      />
    </>
  );
}

export default Input;