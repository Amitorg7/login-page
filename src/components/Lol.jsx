import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { fauth } from "../config/firebaseConfig";

const Lol = () => {
  return (
    <Fragment>
      <h1>Ami khubi valo manush</h1>
      <p>new here? okay then </p>
      {!fauth.currentUser && (
        <Link to="/login">
          <button>signin bro</button>
        </Link>
      )}
    </Fragment>
  );
};
export default Lol;
