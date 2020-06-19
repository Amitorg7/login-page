import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Login = () => {
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
                    <button className="w-100">Login</button>
                  </div>
                  <div className="login-text">
                    <p>
                      Don't have a account?
                      <Link className="ml-2" to="/reg">
                        <span>Create here</span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="sec-content-box">
                    {/* Content Here */}
                </div>
              </div>
            </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Login;
