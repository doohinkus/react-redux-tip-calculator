import React, { Fragment, useState } from "react";
import { useSelector } from 'react-redux';

import '../App.css';
import Server from "../components/Server";
import Result from "../components/Result";

function AppContainer({
  setTip,
  setBill,
  setMood,
  clearError,
  setSplit,
  setResult,
  setError,
  setStep}) {
  
  const [isVenmoInstalled, setVenmoInstalled] = useState(false);
  const label = "Server";
  const state = useSelector(state => state);


  function updateTotal(){
    const tip = state.tip > 0 ? parseFloat(parseInt(state.tip)/100).toFixed(2) : 1;
    const split = parseInt(state.split);
    const bill = parseFloat(state.bill).toFixed(2);
    const result = parseFloat((bill))/split + (bill*tip);
    setResult(result.toFixed(2));
  }
 
  return (
      <div className="App">
        <section className="App-container">
          <h1>Tip Calculator</h1>
          <Server label={label} />
          <Result 
            setTip={setTip}
            setBill={setBill}
            setMood={setMood}
            clearError={clearError}
            setSplit={setSplit}
            setResult={setResult}
            setError={setError}
            setStep={setStep}
            updateTotal={updateTotal}
          />
        </section>
      </div>
  );
}

export default AppContainer;