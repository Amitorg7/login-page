import React from "react";
import { fauth } from "../config/firebaseConfig";
import { Route, Redirect} from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return fauth.currentUser ? (
    <Route
      {...rest}
      component={(props) => (
        <React.Fragment>
          <Component {...props} />
        </React.Fragment>
      )}
    />
  ) : (
    <Redirect to ="/" />
  );
};
export default PrivateRoute;
