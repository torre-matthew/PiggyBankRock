import React from "react";
import ToyDisplay from "./toysDisplay";
import toys from "../toys.js";

function ToyDisplayBodyWrapper() {
  return (
    <div className="container">
        <div class="row">
            {toys.map(toy =>       
                <div className="col s6 m6 l2">
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