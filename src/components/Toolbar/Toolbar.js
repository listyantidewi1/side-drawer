import React from "react";
import "./Toolbar.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

const toolbar = (props) => (
  <header className="toolbar">
    <nav className="toolbar__nav">
      <div>
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo">
        <a href="/">Logo</a>
      </div>
      <div className="spacer" />
      <div className="toolbar__nav__items">
        <ul>
          <li>
            <a href="/">Users</a>
          </li>
          <li style={{ color: "white" }}> | </li>
          <li>
            <a href="/">Products</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
