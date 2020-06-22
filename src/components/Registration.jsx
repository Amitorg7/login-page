import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { onRegister } from "../actions/auth";

const Registration = (props) => {
  const initData = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  }
  const [data, setData] = useState(initData);

  const handleInput = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const status = await onRegister(data);
    if (status) {
      setData(initData);
      props.history.push("/hudai")
    }
  };
console.log(data)
  return (
    <Fragment>
      <section id="reg">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-sm-12 d-flex align-items-center reg-content">
              <div className="p-5 w-100">
                <div className="reg-header">
                  <h3>Sign up</h3>
                </div>
                <div className="data-content-box">
                  <div className="input-box">
                    <p>First name</p>
                    <div className="input-field">
                      <input
                        onChange={handleInput}
                        value={data.first_name}
                        name="first_name"
                        type="text"
                        placeholder="Enter your first name"
                      />
                    </div>
                  </div>
                  <div className="input-box">
                    <p>Last name</p>
                    <div className="input-field">
                      <input
                        onChange={handleInput}
                        value={data.last_name}
                        type="text"
                        name="last_name"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  <div className="input-box">
                    <p>Email address</p>
                    <div className="input-field">
                      <input
                        type="email"
                        name="email"
                        value={data.email}
                        placeholder="Enter your email"
                        onChange={handleInput}
                      />
                    </div>
                  </div>
                  <div className="input-box">
                    <p>Create Password</p>
                    <div className="input-field">
                      <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={data.password}
                        onChange={handleInput}
                      />
                    </div>
                  </div>
                  <button className="w-100" onClick={handleSubmit}>
                    Create Account
                  </button>
                </div>
                <div className="login-text">
                  <p>
                    Already have an account?
                    <Link className="ml-2" to="/login">
                      <span>Login</span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="sec-content-box">{/* <h3>hello boss</h3> */}</div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Registration;
