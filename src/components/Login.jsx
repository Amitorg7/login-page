import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Fragment>
      <section id="reg">
        <div className="container-fluid">
          <div className="row">
            <div className="data">
              <div className="col-md-6 col-sm-6">
                <div className="reg-content-box">
                  <div className="reg-header">
                    <h3>Sign In</h3>
                  </div>
                  <div className="data-content-box">
                    <div className="input-box">
                      <p>Email address</p>
                      <div className="input-field">
                        <input type="email" placeholder="Enter your email" />
                      </div>
                    </div>
                    <div className="input-box">
                      <p>Create Password</p>
                      <div className="input-field">
                        <input
                          type="password"
                          placeholder="Enter your password"
                        />
                      </div>
                    </div>
                    <button>Login</button>
                  </div>
                  <div className="login-text">
                    <p>
                      Don't have a account?
                      <Link to="/reg">
                        <span>create here</span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="sec-content-box">
                    <h3>hi dude</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Login;
