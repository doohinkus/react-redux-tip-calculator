import React from "react";
import { useSelector } from 'react-redux';
import Input from './Input';

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

  
  const result = ((
    parseFloat(state.bill) + 
    parseFloat(((state.tip)/100) * 
    state.bill)) / 
    parseInt(state.split))
    .toFixed(2);
  const colorHightlight= {
    color: "#FFFF66"
  }
    return (
      <div>  
      <h1>Your Amount: <br /><span style={colorHightlight}>${isNaN(result) || result}</span></h1>
      <form onSubmit={(e) => e.preventDefault()}>
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
              min={.01}
            />
          </p>
          <h3>{isError && error}</h3>
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
              min={1}
            />  person{state.split>1 && "s"}
          </p>
            <p>Tip Amount ( 
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
                min={0}
                />
              %): <br /><span style={colorHightlight}>${((state.bill / state.split) * state.tip/100).toFixed(2)}</span></p>
      </form>
    
    </div>
  )
}

export default Result;