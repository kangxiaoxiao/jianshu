import React, { Component } from 'react';
import { GlobalStyle } from "./style";
import "./app.css"
import Router from "./rouer"
class App extends Component {
  render() {
    return (
      <React.Fragment>
         <GlobalStyle />
          <div className="App">
            <Router></Router>
          </div>
      </React.Fragment>

    );
  }
}

export default App;
