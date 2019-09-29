import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';



function Input({ title, setError, field, error, isError, dest, handleClick, buttonTitleNext, buttonTitlePrev }){
  // const route = useSelector(state => state.route);
  const amount = useSelector(state => state[field]);
  const step = useSelector(state => state.step);


  function checkInput(e){
    console.log(e.target.value);
    return /^[0-9]+\.[0-9]{2}$|[0-9]+\.[0-9]{2}[^0-9]/.test(e.target.value) ? e.target.value : "";
  }

  return (
    <>
      <h2>{title}: {amount}</h2>
      <h3>{isError && error}</h3>
      <input 
        type="text"
        name={field}
        inputMode="decimal"
        pattern="[0-9]+"
        maxLength={11}
        onChange={checkInput}
      />
      <div className="d-flex mt-3">
        {buttonTitlePrev && 
          (<button className="btn btn-primary d-inline m-2" onClick={() => handleClick(step)}>{buttonTitlePrev}</button>)
        }
        <button className="btn btn-primary d-inline m-2" onClick={() => handleClick(step)}>{buttonTitleNext}</button>
      </div>
    </>
  );
}

export default Input;