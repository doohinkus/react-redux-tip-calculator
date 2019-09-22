import React from "react";
import '../App.css';
import Server from "../components/Server";
import Bill from "../components/Bill";

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
function AppContainer() {
  // const [server, updateServer] = useState('😐');
  const label = "Server"
  function setServerMood(tipAmount){
    const emojis = ['😢', '😐', '🙂', '😆'];
    let mood = emojis[1];
    switch(true){
      case (tipAmount <= 9):
        mood = emojis[0];
        break;
      case (tipAmount >=20 && tipAmount < 30):
        mood = emojis[2]
        break;
      case (tipAmount > 30):
        mood= emojis[3];
        break;
      default:
        mood= emojis[1];
    }
    return mood;

  }
  function openVenmo(){
    let url = "venmo://banktransfer";
    setTimeout(function () {
      console.log("Venmo not installed")
    }, 35);
    window.location = url;
  }
  return (
    <div className="App">
      <header className="App-container">
       <h1>Tip Calculator</h1>
       <Server label={label} />
       
       <Bill />
       <button className="btn btn-primary mt-3">
         Next
       </button>

       {/* <button
         className="btn btn-primary"
         onClick={openVenmo}>
           Open Venmo
       </button> */}
      </header>
    </div>
  );
}

export default AppContainer;