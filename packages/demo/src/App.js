import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { IconContext } from "react-styled-system-icons";
import { FaFolder } from "react-styled-system-icons/fa";
import { MdAccessibility } from "react-styled-system-icons/md";
import { TiArrowDown } from "react-styled-system-icons/ti";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <IconContext.Provider
            value={{
              color: "blue",
              className: "global-class-name",
              attr: { focusable: "false" }
            }}
          >
            <MdAccessibility />
            <FaFolder
              color="red"
              title="folder icon"
              className="additional-class-name"
            />
          </IconContext.Provider>
          <MdAccessibility />
          <FaFolder />
          <TiArrowDown title="arrow down icon" />
        </p>
      </div>
    );
  }
}

export default App;
