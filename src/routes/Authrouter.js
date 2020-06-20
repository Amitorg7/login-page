import React from "react";
import { fauth } from "../config/firebaseConfig";
import { Redirect, Route } from "react-router-dom";

const AuthRoute = ({ component: Component, ...rest }) => {
  return fauth.currentUser ? (
    <Redirect to="/hudai" />
  ) : (
    <Route
      {...rest}
      component={(props) => (
        <React.Fragment>
          <Component {...props} />
        </React.Fragment>
      )}
    />
  );
};
export default AuthRoute;