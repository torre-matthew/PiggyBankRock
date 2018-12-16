import React from "react";
import Nav from "./components/nav";
import ToyDisplay from "./components/toysDisplay";
import toys from "./toys.js";
import ToyDisplayBodyWrapper from "./components/toydisplaybodywrapper";
import MoneyDisplayBodyWrapper from "./components/moneydisplaybodywrapper";

function App() {
    return (
      <div>     
        <Nav />
        <MoneyDisplayBodyWrapper />
        <ToyDisplayBodyWrapper /> 
      </div>
    )
}

export default App;
