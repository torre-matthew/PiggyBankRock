import React from "react";
// import toys from "../toys.json";

function ToyDisplay(props) {
  return ( 
    <div>
        <h1>{ props.cost}</h1>
        <img src={ process.env.PUBLIC_URL + props.image } alt="toy to purchase here" />
    </div>
    )
};

export default ToyDisplay;