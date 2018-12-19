import React, { Component } from "react";
import Nav from "./components/nav";
import ToyDisplay from "./components/toysDisplay";
import MoneyDisplay from "./components/moneyDisplay";
import ToyDisplayBodyWrapper from "./components/toydisplaybodywrapper";
import MoneyDisplayBodyWrapper from "./components/moneydisplaybodywrapper";
import toys from "./toys.js";
import money from "./money.js";


class App extends Component {

  state = {
    moneyInBank: [],
    moneyInBankVal: 0,
    message: "",
    correct: 0,
    incorrect: 0,
  }

  selectNewObject = () => {
    let index = Math.floor(Math.random() * (money.length - 0) + 0);
    this.setState({
      moneyInBank: money[index].moneyimgs,
      moneyInBankVal: money[index].value
    });
}

componentDidMount() {
  this.selectNewObject();
}

compareToyPriceToDollarValue = (toyValue) => {
  let currentCorrectCount = this.state.correct;
  let currentIncorrectCount = this.state.incorrect;
  let currentMoneyAvailable = this.state.moneyInBankVal;
  
  if (toyValue === currentMoneyAvailable) {
    this.setState({message: "Correct!!"});
    this.selectNewObject();
    currentCorrectCount++;
    this.setState({correct: currentCorrectCount});

  } else {
    this.setState({message: "Whoops, try again!!"});
    this.selectNewObject();
    currentIncorrectCount++;
    this.setState({incorrect: currentIncorrectCount});
    this.startGameOver();
  }
}

  startGameOver = () => {
    if (this.state.incorrect > 3) {
      this.setState({correct: 0, incorrect: 0});
    }
  }
    
  render() {
    return (
      <div>     
        <Nav 
        message={this.state.message}
        correct={this.state.correct}
        incorrect={this.state.incorrect}
        />
        <MoneyDisplayBodyWrapper> 
          {this.state.moneyInBank.map(moneyimgs =>     
            <MoneyDisplay 
            images={ moneyimgs }
            />
          )}
        </MoneyDisplayBodyWrapper>
        <ToyDisplayBodyWrapper>
          {toys.map(toy =>       
            <ToyDisplay
            key={toy.id}
            image={toy.image}
            cost={toy.cost}
            compareToyPriceToDollarValue={this.compareToyPriceToDollarValue}
            />
          )}
        </ToyDisplayBodyWrapper> 
      </div>
    )
  }  
}

export default App;
