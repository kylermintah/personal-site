import React, { useState } from "react";

import "./App.scss";
import Router from "./Router";
import { ThemeProvider } from "./utils/ThemeContext";

const pageData = require("./content/page-data.json");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = pageData;
  }

  render() {
    return (
      <ThemeProvider>
        <Router pageData={pageData}></Router>
      </ThemeProvider>
    );
  }
}

export default App;
