import React from "react";
import "./Category2.css";

export default function Category2() {
  return (
    
    <div className="container">
    <div class="container px-4 py-2 " id="category1">
      <h2 className="pb-2 border-bottom">Category2</h2>

      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <div className="col">
          <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-4 shadow-lg">
            <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
              <h2 className="pt-2 mt-2 mb-2 display-6 lh-1 fw-bold">
                StartUp name
              </h2>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="d-flex align-items-center  me-auto">
                  <small>Founder</small>
                </li>
                <li className="d-flex align-items-right">
                  <small>Location</small>
                </li>
              </ul>
              <h7 className="since-year">Since (year)</h7>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
            <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
              <h2 className="pt-2 mt-2 mb-4 display-6 lh-1 fw-bold">
                StartUp name
              </h2>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="d-flex align-items-center  me-auto">
                  <small>Founder</small>
                </li>
                <li className="d-flex align-items-right">
                  <small>Location</small>
                </li>
              </ul>
              <h7 className="since-year">Since (year)</h7>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-4 shadow-lg">
            <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
              <h2 className="pt-2 mt-2 mb-4 display-6 lh-1 fw-bold">
                StartUp name
              </h2>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="d-flex align-items-center  me-auto">
                  <small>Founder</small>
                </li>
                <li className="d-flex align-items-right">
                  <small>Location</small>
                </li>
              </ul>
              <h7 className="since-year">Since (year)</h7>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    
  );
}
