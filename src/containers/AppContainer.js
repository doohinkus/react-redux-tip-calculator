import React, { Fragment, useContext, useCallback } from "react";
import { Link, Route, __RouterContext, Redirect } from "react-router-dom";

import '../App.css';
import Server from "../components/Server";
import Input from "../components/Input";

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
// createnext and prev functions
  function handleClick(step){
    console.log(`Click from ${step}`);
    setStep(step);
    // const dest = step >= 2 && step <= 4 ? step : "";
    let dest = 1;
    switch(step){
      case (step >= 2 && step <= 3 ):
        dest = step;
        break;
      case (step >= 4):
        dest = 4;
        break;
      default:
        dest = 1;
    }
    console.log(dest);
    history.push(`/${dest}`);
   //  valid input -> update store -> go to next step
 }

  function openVenmo(){
    setTimeout(function () {
         console.log("Venmo not installed");
       }, 35);
     window.location = "venmo://banktransfer";
  }



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

        <Route path="/1" exact render={() => (
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
              handleClick={handleClick}
              // dispatch when input is valid
              dest={{
                next: "/tip",
                prev: null
              }}
            />
          )} 
        />
        <Redirect from="/" to="/1" />
        <Route path="/2" render={() => (
            <Input 
              title="Tip"
              field="tip"
              error={null}
              isError={false}
              buttonTitleNext={"Next"}
              buttonTitlePrev={"Prev"}
              handleClick={handleClick}

              dest={{
                next: "/split",
                prev: "/"
              }}
            />
          )} 
        />
        <Route path="/3" render={() => (
            <>
              <Input 
                title="Split"
                field="split"
                error={null}
                isError={false}
                buttonTitleNext={"Calculate"}
                buttonTitlePrev={null}
                handleClick={handleClick}

                dest={{
                  next: "/result",
                  prev: "/tip"
                }}
              />
              {/* <Link className="btn btn-primary d-inline m-2" to="/">Restart</Link> */}
            </>
          )} 
        />
        <Route path="/4" render={() => (
            <div>
              <p>Result</p>
              <p>Venmo Link</p>
              <Link className="btn btn-primary d-inline m-2" to="/">Restart</Link>
            </div>
          )} 
        />
        {/* <Route path="/" exact component={Bill} /> */}

        </header>
      </div>
  );
}

export default AppContainer;