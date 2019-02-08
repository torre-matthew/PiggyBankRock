import React from "react";

function Nav(props) {
  return (
        <nav>
            <div className="nav-wrapper">
                <span className="cor-inc">{props.message}</span>
                <span id="title">Piggy Bank Rock</span>
                <ul id="nav-mobile" className="right">
                    <li>Correct: {props.correct}</li>
                    <li>Incorrect: {props.incorrect}</li>
                </ul>
            </div>
        </nav>
  );
}

export default Nav;