import React from "react";

function ToyDisplay(props) {
  return ( 
    <div>
        <div className="col s6 m6 l2" onClick={() => props.compareToyPriceToDollarValue(props.cost)}>
            <div className="card">
                <div className="card-image">
                    <img src={ process.env.PUBLIC_URL + props.image } />
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <h5>${ props.cost }</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
};

export default ToyDisplay;