import React from "react";
import ToyDisplay from "./toysDisplay";
import toys from "../toys.js";

function ToyDisplayBodyWrapper() {
  return (
    <div className="container">
        <div class="row">
            {toys.map(toy =>       
                <div class="col s12 l3">
                    <ToyDisplay 
                    image={toy.image}
                    cost={toy.cost}
                    />
                </div>
            )}
        </div>
    </div> 
  );
}

export default ToyDisplayBodyWrapper;