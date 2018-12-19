import React from "react";


function ToyDisplayBodyWrapper(props) {
  return (
    <div className="container">
        <div className="row">
            {props.children}
        </div>
    </div> 
  );
}

export default ToyDisplayBodyWrapper;