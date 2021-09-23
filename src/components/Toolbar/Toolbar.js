import React from "react";
import "./Toolbar.css";

const toolbar = (props) => (
  <header className="toolbar">
    <nav className="toolbar__nav">
      <div></div>
      <div className="toolbar__logo">
        <a href="/">Logo</a>
      </div>
      <div className="toolbar__nav__items">
        <ul>
          <li>
            <a href="/">Link 1</a>
          </li>
          <li>
            <a href="/">Link 2</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
