import React from "react";
import { useSelector } from 'react-redux';
function Server({ label }){

  const server = useSelector(state => state.mood)
  return (
    <div>
      <p>Your Server</p>
      <span
      className="emoji"
      role="img"
      aria-label={label ? label : ""}
      aria-hidden={label ? "false" : "true"}
      >
        <h1>{server}</h1>
      </span>
    </div>
  )
}

export default Server;