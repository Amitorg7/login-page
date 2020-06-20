import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { privateRoute, authRoute, publicRoute } from "./routes/routes";
import AuthRoute from "./routes/Authrouter";
import PrivateRoute from "./routes/PrivateRouter";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          {publicRoute.map((R, K) => (
            <Route exact key={K} {...R} />
          ))}
          {privateRoute.map((R, K) => (
            <PrivateRoute exact key={K} {...R}/>
          ))}
          {authRoute.map((R, K) => (
            <AuthRoute exact key={K} {...R} />
          ))}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
