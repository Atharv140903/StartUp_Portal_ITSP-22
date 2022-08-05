import React from "react";
import { Link } from "react-router-dom";

const Startup = ({ item }) => {
  return (
    <div>
      <Link to={`/startup/${item._id}`} className="text-decoration-none">
        <div className="col">
          <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-4 shadow-lg">
            <div className="d-flex flex-column h-100 p-5  text-shadow-1">
              <h2 className="pt-2 mt-2 mb-2 display-6 lh-1 fw-bold">
                {item.startupname}
              </h2>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="d-flex align-items-center  me-auto">
                  <small>{item.founders}</small>
                </li>
                <li className="d-flex align-items-right">
                  <i className="bi bi-geo-alt-fill"></i>
                  <small className="mx-2">{item.location}</small>
                </li>
              </ul>
              <h7 className="since-year">Since ({item.date})</h7>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Startup;
