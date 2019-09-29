import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { DESTRUCTION } from 'dns';



function Input({ title, setError, error, isError, dest, buttonTitleNext, buttonTitlePrev }){
  const route = useSelector(state => state.route);

  function checkInput(e){
    console.log(e.target.value);
    return /^[0-9]+\.[0-9]{2}$|[0-9]+\.[0-9]{2}[^0-9]/.test(e.target.value) ? e.target.value : "";
  }

  return (
    <>
      <h2>{title}</h2>
      <h3>{isError && error}</h3>
      <input 
        type="number"
        inputMode="numeric"
        min="0"
        max="100000000"
        onChange={checkInput}
      />
      <div className="d-flex mt-3">

        {buttonTitlePrev && 
          (<Link className="btn btn-primary d-inline m-2" to={dest.prev}>{buttonTitlePrev}</Link>)
        }
        <Link className="btn btn-primary d-inline m-2" to={dest.next}>{buttonTitleNext}</Link>
      </div>
    </>
  );
}

export default Input;