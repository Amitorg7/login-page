import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Registration from "./components/Registration";
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
          <Route path="/" exact component={Login} />

            <Route path="/reg" exact component={Registration} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
