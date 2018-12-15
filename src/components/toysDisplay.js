import React from "react";
import toy from "../toys.json";

function ToyDisplay() {
  return ( 
    <div>
        <img src={ toy[0].image } alt="toy to purchase here" />
        <img src="https://i.pinimg.com/originals/7f/1e/1b/7f1e1bf7f9e784c10ea909d63a2c0e6b.png" alt="toy to purchase here" />
    </div>
    )
};

export default ToyDisplay;