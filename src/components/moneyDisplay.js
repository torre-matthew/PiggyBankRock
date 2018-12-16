import React from "react";

function MoneyDisplay(props) {
  return ( 
    <div>
        <div class="card">
            <div class="card-image">
                <img src={ process.env.PUBLIC_URL + props.image } />
            </div>
        </div>
    </div>
    )
};

export default MoneyDisplay;