import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import AddBook from "./views/AddBook";
import ListBook from "./views/ListBook";
import Footer from "./Components/Footer";
import Students from "./views/Students";

// ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(
  <Router>
    <Navbar></Navbar>{" "}
    <div className="main">
      <Switch>
        <Route exact path="/" name="App" component={App}></Route>
        <Route path="/addbook" name="AddBook" component={AddBook}></Route>
        <Route path="/listbook" name="ListBook" component={ListBook}></Route>
        <Route path="/students" name="Students" component={Students}></Route>
      </Switch>
    </div>{" "}
    <Footer></Footer>
  </Router>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();