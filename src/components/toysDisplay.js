import React from "react";

function ToyDisplay(props) {
  return ( 
    <div>
        <div target="#prompt-id" className="col s6 m4 l2" onClick={() => props.compareToyPriceToDollarValue(props.cost)}>
            <div className="card">
                <div className="card-image">
                    <img src={ process.env.PUBLIC_URL + props.image } />
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <h5 className="toy-cost">${ props.cost }</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
};

export default ToyDisplay;