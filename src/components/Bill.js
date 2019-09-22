import React, { Fragment } from 'react';


function Bill(){
  return (
    <>
      <h2>Restaurant Bill/Tab</h2>
      <input 
        type="number"
        inputMode="numeric"
        min="0"
        max="1000000"
      />
    </>
  );
}

export default Bill;