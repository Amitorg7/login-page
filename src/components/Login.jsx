import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { fauth } from "../config/firebaseConfig";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleInputPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    fauth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        localStorage.setItem("loginInfo", true);
        alert("login successfull");
        props.history.push("/hudai");
      })
      .catch((e) => {
        alert("something wrong");
      });
  };

  return (
    <Fragment>
      <section id="reg">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-sm-12 d-flex align-items-center reg-content">
              <div className="p-5 w-100">
                <div className="reg-header">
                  <h3>Sign In</h3>
                </div>
                <div className="data-content-box">
                  <div className="input-box">
                    <p>Email address</p>
                    <div className="input-field">
                      <input
                        value={email}
                        onChange={handleInputEmail}
                        type="email"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div className="input-box">
                    <p>Create Password</p>
                    <div className="input-field">
                      <input
                        value={password}
                        onChange={handleInputPassword}
                        type="password"
                        placeholder="Enter your password"
                      />
                    </div>
                  </div>
                  <button className="w-100" onClick={handleSubmit}>
                    Login
                  </button>
                </div>
                <div className="login-text">
                  <p>
                    Don't have a account?
                    <Link className="ml-2" to="/registration">
                      <span>Create here</span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="sec-content-box">{/* Content Here */}</div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Login;
