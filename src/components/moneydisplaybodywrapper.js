import React from "react";
import MoneyDisplay from "./moneyDisplay";
import money from "../money.js";

function MoneyDisplayBodyWrapper() {
  return (
    <div className="container">
        <div className="row">
            <div className="col s6 m6 l2">
                <MoneyDisplay 
                image={ money[0].moneyimgs[0] }
                />
            </div>          
        </div>
    </div> 
  );
}

export default MoneyDisplayBodyWrapper;