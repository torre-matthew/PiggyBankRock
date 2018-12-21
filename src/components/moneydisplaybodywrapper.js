import React from "react";


function MoneyDisplayBodyWrapper(props) {
  return (
    <div className="money-area">
        <div className="row">
        <h5 id="prompt-id" className="prompt">Money in your piggy bank.</h5>
        {props.children}          
        </div>
    </div> 
  );
}

export default MoneyDisplayBodyWrapper;