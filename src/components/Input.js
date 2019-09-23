import React, { Fragment } from 'react';

function Input({ title, error, isError, setRoute, buttonTitle }){
  return (
    <>
      <h2>{title}</h2>
      <h3>{isError && error}</h3>
      <input 
        type="number"
        inputMode="numeric"
        min="0"
        max="100000000"
      />
      <button className="btn btn-primary mt-3" onClick={() => setRoute('/tip')}>{buttonTitle}</button>
    </>
  );
}

export default Input;