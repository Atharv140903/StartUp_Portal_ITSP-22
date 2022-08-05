import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../../../data";

export default function CategoryItem() {
  return (
    <div>
      <h2 className="d-flex justify-content-center">Category List</h2>
      <hr />

      {categories.map((item) => (
        <div className="col">
          <Link to={`/startups/${item.cat}`}>
            <div className="card bg-dark text-white m-5">
              <svg
                className="bd-placeholder-img bd-placeholder-img-lg card-img"
                width="100%"
                height="200"
              ></svg>
              <div className="card-img-overlay">
                <h3 className="card-title d-flex justify-content-center">
                  {item.title}
                </h3>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
