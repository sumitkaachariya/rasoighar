import React from "react";
import "./login.css";
import { Logo } from "assets";

function Login() {
  return (
    <div className="template-login">
      <div className="login-page">
        <div className="card">
          <div className="card-body">
            <div className="logo text-center">
              <img src={Logo} />
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="formEmail">Email Address: </label>
                <input
                  className="form-control"
                  type="text"
                  name="email"
                  id="formEmail"
                  placeholder="Ex. rasoighar@gmail.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="formPassword">Password: </label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  id="formPassword"
                  placeholder="123456"
                />
              </div>
              <div className="button-group text-center">
                <button
                  type="button"
                  name="login"
                  className="btn btn-success login-btn"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
