import React from "react";
import "./Login_form.css";
import { useState } from "react";
import { login } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";


const Login_form = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
  };

  return (

    <div className="login-container">
      <h2 className="heading">StartUp Portal</h2>

      <div className="login-form-text">
        <form className="form-signin">
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label htmlFor="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            required={true}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label htmlFor="inputPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required={true}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button
            className="btn btn-lg btn-primary "
            type="submit"
            onClick={handleClick} disabled={isFetching}
          >
            Sign in
          </button>

          <a className="m-3" href="/Register">
            Register?
          </a>
        </form>
      </div>
    </div>
  );
}

export default Login_form
