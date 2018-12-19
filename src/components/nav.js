import React from "react";

function Nav(props) {
  return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">{props.message}</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="sass.html">Correct: {props.correct}</a></li>
                    <li><a href="badges.html">Incorrect: {props.incorrect}</a></li>
                </ul>
            </div>
        </nav>
  );
}

export default Nav;