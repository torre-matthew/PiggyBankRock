import React from "react";

function Nav(props) {
  return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">{props.message}</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>Correct: {props.correct}</li>
                    <li>Incorrect: {props.incorrect}</li>
                </ul>
            </div>
        </nav>
  );
}

export default Nav;