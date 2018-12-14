import React from "react";

function Nav() {
  return (
        <nav>
            <div class="nav-wrapper">
                <a href="#" className="brand-logo">Baby Girl Game</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>
                </ul>
            </div>
        </nav>
  );
}

export default Nav;