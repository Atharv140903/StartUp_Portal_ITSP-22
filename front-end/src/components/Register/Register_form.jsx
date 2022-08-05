import React from "react";
import './Register_form.css'

function Register_form() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container bg-dark">
          <a className="navbar-brand text-white" href="/">
            StartUp Portal
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link text-white" href="/Login">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="my-form">
        <div className="cotainer">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header">Register</div>
                <div className="card-body">
                  <div
                    name="my-form"
                    onsubmit="return validform()"
                    action="success.php"
                    method=""
                  >
                    <div className="form-group row">
                      <label
                        for="full_name"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        Full Name
                      </label>
                      <div className="col-md-6 m-2">
                        <input
                          type="text"
                          id="full_name"
                          className="form-control"
                          name="full-name"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        for="email_address"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        E-Mail Address
                      </label>
                      <div className="col-md-6 m-2">
                        <input
                          type="text"
                          id="email_address"
                          className="form-control"
                          name="email-address"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        for="rollno"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        Roll No.
                      </label>
                      <div className="col-md-6 m-2">
                        <input
                          type="text"
                          id="rollno"
                          className="form-control"
                          name="rollno"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        for="department"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        Department
                      </label>
                      <div className="col-md-6 m-2">
                        <input
                          type="text"
                          id="department"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        for="phone"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        Phone 
                      </label>
                      <div className="col-md-6 m-2">
                        <input
                          type="text"
                          id="phone"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        for="address"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        Address
                      </label>
                      <div className="col-md-6 m-2">
                        <input
                          type="text"
                          id="address"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        for="password"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        Password
                      </label>
                      <div className="col-md-6 m-2">
                        <input
                          type="text"
                          id="password"
                          className="form-control"
                          name="password"
                        />
                      </div>
                    </div>

                    
                    <div className="col-md-6 offset-md-4">
                      <button formAction="/" type="submit" className="btn btn-primary">
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register_form;
