import React from "react";


function MoneyDisplayBodyWrapper(props) {
  return (
    <div className="container">
        <div className="row">
        <h5 className="prompt">Here's what's in your PIGGY BANK.</h5>
        {props.children}          
        </div>
    </div> 
  );
}

export default MoneyDisplayBodyWrapper;