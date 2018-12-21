import React from "react";


function ToyDisplayBodyWrapper(props) {
  return (
    <div className="toy-area">
        <div className="row">
        <h5 className="prompt">Which toy cost that amount?</h5>
            {props.children}
        </div>
    </div> 
  );
}

export default ToyDisplayBodyWrapper;