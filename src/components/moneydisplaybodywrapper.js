import React from "react";


function MoneyDisplayBodyWrapper(props) {
  return (
    <div className="container">
        <div className="row">
        {props.children}          
        </div>
    </div> 
  );
}

export default MoneyDisplayBodyWrapper;