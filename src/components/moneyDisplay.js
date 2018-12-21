import React from "react";


function MoneyDisplay(props) {
  return ( 
    <div>
        <div className="col s12 m4 l2">
            <div className="card">
                <div className="card-image">
                    <img className="money-img" src={ process.env.PUBLIC_URL + props.images } />
                </div>
            </div>
        </div>
    </div>
    )
};

export default MoneyDisplay;