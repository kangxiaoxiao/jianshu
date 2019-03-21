/**
 * Created by karila on 2019/3/18.
 */
import React from 'react';
import { BrowserRouter as Router,Route,Redirect} from "react-router-dom";
import DragImg from "./pages/dragImg";
import Home from "./pages/home";
import NewsDetail from "./pages/newsDetail";
export default ()=>(
  <Router>
    <div>
      <Route exact path="/" render={() =>(<Redirect to="/home" />)} ></Route>
      <Route path="/home" exact component={Home}></Route>
      <Route path="/newsDetail"  component={NewsDetail}></Route>
      <Route path="/dragImg"  component={DragImg}></Route>
    </div>
  </Router>
)