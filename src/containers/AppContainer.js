import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
  setRoute}) {
  const label = "Server";
  function openVenmo(){
    setTimeout(function () {
         console.log("Venmo not installed");
       }, 35);
     window.location = "venmo://banktransfer";
  }

  return (
    <Router>
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
          <Route path="/" exact render={() => (
            // route in store
            // switch <Redirect to={currentStep} />
              <Input 
                title="Tab/Bill"
                error={null}
                isError={false}
                buttonTitle={"Next"}
                // dispatch when input is valid
                setRoute={setRoute}
              />
            )} 
          />
          <Route path="/tip" render={() => (
              <Input 
                title="Tip"
                error={null}
                isError={false}
                buttonTitle={"Next"}
                action={null}
              />
            )} 
          />
          {/* <Route path="/" exact component={Bill} /> */}

        </header>
      </div>
    </Router>
  );
}

export default AppContainer;