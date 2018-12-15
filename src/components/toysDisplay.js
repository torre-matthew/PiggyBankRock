import React from "react";
// import toys from "../toys.json";

function ToyDisplay(props) {
  return ( 
    <div>
        


        <div class="card horizontal">
            <div class="card-image">
                <img src={ process.env.PUBLIC_URL + props.image } />
            </div>
            <div class="card-stacked">
                <div class="card-content">
                    <h5>${ props.cost }</h5>
                </div>
            </div>
        </div>
    </div>
    )
};

export default ToyDisplay;