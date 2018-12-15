import React from "react";
import Nav from "./components/nav";
import ToyDisplay from "./components/toysDisplay";
import toys from "./toys.js";

function App() {
    return (
      <div>     
        <Nav />
        <ToyDisplay 
        image={toys[0].image}
        cost={toys[0].cost}
        />
      </div>
    )
}

export default App;
