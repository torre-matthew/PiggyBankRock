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
    toyDisplayOrder: [],
    moneyInBankVal: 0,
    message: "",
    correct: 0,
    incorrect: 0,
  }

  selectNewObject = () => {
    let index = Math.floor(Math.random() * (money.length - 0) + 0);
    this.setState({
      moneyInBank: money[index].moneyimgs,
      moneyInBankVal: money[index].value,
      toyDisplayOrder: this.shuffle(toys)
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
    this.setState({message: "Yay! That's correct. "});
    this.selectNewObject();
    currentCorrectCount++;
    this.setState({correct: currentCorrectCount});

  } else {
    this.setState({message: "Whoops! Try Again."});
    this.selectNewObject();
    currentIncorrectCount++;
    this.setState({incorrect: currentIncorrectCount});
    this.startGameOver();
  }
}

  startGameOver = () => {
    if (this.state.incorrect > 1) {
      this.setState({correct: 0, incorrect: 0});
    }
  }

  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
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
          {this.state.toyDisplayOrder.map(toy =>       
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
