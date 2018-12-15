import React from "react";
import Nav from "./components/nav";
import ToyDisplay from "./components/toysDisplay";
import toys from "./toys.js";
import ToyDisplayBodyWrapper from "./components/toydisplaybodywrapper";

function App() {
    return (
      <div>     
        <Nav />
        <ToyDisplayBodyWrapper /> 
      </div>
    )
}

export default App;
