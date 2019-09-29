import React, { Fragment, useContext, useCallback } from "react";
import { Link, Route, __RouterContext, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';

import '../App.css';
import Server from "../components/Server";
import Input from "../components/Input";
import { restElement } from "@babel/types";

// VENMO deep links
// venmo://authorization
// venmo://banks_and_cards
// venmo://banktransfer
// venmo://cash_out
// venmo://cashout
// venmo://extension/login
// venmo://incomplete
// venmo://incomplete/payments
// venmo://incomplete/requests
// venmo://invite_contacts
// venmo://notifications
// venmo://paycharge
// venmo://stories
// venmo://terms/messages_feature
// venmo://terms/user_agreement
// venmo://users
// venmo://x-callback-url/didFailToSetHermesCookie
// venmo://x-callback-url/didSetHermesCookie

function AppContainer({
  setTip,
  setBill,
  setMood,
  setSplit,
  setResult,
  setError,
  setStep}) {
  const label = "Server";

  const { history } = useContext(__RouterContext);
  const step = useSelector(state => state.step);
  function reset(){
    setStep(1);
    history.push(`/1`);
  }
// createnext and prev functions
  function next(){
    console.log(`Click from NEXT ${step}`);
    if(step < 4 ){
      const dest = step + 1;
      setStep(dest);
      history.push(`/${dest}`);
    }
 }
 function prev(){
  if(step >= 2 ){
    const dest = step - 1;
    setStep(dest);
    history.push(`/${dest}`);
  }
  console.log(`Click from PREV ${step}`);

 }
 function calculate(){
   console.log(`CALCULATE!!! ${step}`);
   setStep(4);
   history.push("/4")
 }

  function openVenmo(){
    setTimeout(function () {
         console.log("Venmo not installed");
       }, 35);
     window.location = "venmo://banktransfer";
  }



  const stepOne =(
    // route in store
    // switch <Redirect to={currentStep} />
      <Input 
        title="Tab/Bill"
        field="bill"
        error={null}
        isError={false}
        buttonTitleNext={"Next"}
        buttonTitlePrev={null}
        setError={setError}
        next={next}
        prev={prev}
        // dispatch when input is valid
        dest={{
          next: "/tip",
          prev: null
        }}
      />
    )
    const stepTwo =(
      <Input 
        title="Tip"
        field="tip"
        error={null}
        isError={false}
        buttonTitleNext={"Next"}
        buttonTitlePrev={"Prev"}
        next={next}
        prev={prev}

        dest={{
          next: "/split",
          prev: "/"
        }}
      />
    )

    const stepThree =(
      <>
        <Input 
          title="Split"
          field="split"
          error={null}
          isError={false}
          buttonTitleNext={null}
          buttonTitlePrev={null}
          buttonTitleCalculate={"Calculate"}
          next={next}
          prev={prev}
          calculate={calculate}   
          dest={{
            next: "/result",
            prev: "/tip"
          }}
        />
        {/* <Link className="btn btn-primary d-inline m-2" to="/">Restart</Link> */}
      </>
    )

    const result = (
      <div>
        <p>Result</p>
        <p>Venmo Link</p>
        <button className="btn btn-primary d-inline m-2" onClick={() => reset()}>Restart</button>
      </div>
    )
  return (
      <div className="App">
        <header className="App-container">
        <h1>Tip Calculator</h1>
        <Server label={label} />
        {/* <FormStepper /> */}
      
        {/* <button
          className="btn btn-primary"
          onClick={openVenmo}>
            Open Venmo
        </button> */}

        <Route path="/" exact render={() => stepOne} />
        <Route path="/1" render={() => stepOne} />
        <Route path="/2" render={() => stepTwo} />
        <Route path="/3" render={() => stepThree} />
        <Route path="/4" render={() => result} />
        {/* <Route path="/" exact component={Bill} /> */}

        </header>
      </div>
  );
}

export default AppContainer;