import React, { Component } from 'react';
import { GlobalStyle } from "./style";
import { BrowserRouter as Router,Route,Redirect} from "react-router-dom";
import Home from "./pages/home";
import NewsDetail from "./pages/newsDetail";
import Header from "./common/header"
import "./app.css"
import DragImg from "./pages/dragImg";
class App extends Component {
  render() {
    return (
      <React.Fragment>
         <GlobalStyle />
          <div className="App">
            <Header></Header>
            <Router>
              <div>
                <Route exact path="/" render={() =>(<Redirect to="/home" />)} ></Route>
                <Route path="/home" exact component={Home}></Route>
                <Route path="/newsDetail"  component={NewsDetail}></Route>
                <Route path="/dragImg"  component={DragImg}></Route>
              </div>
            </Router>
          </div>
      </React.Fragment>

    );
  }
}

export default App;
