import React from "react";
import { categories } from "../../../data";
import "./Category_btn.css";

export default function Category_btn() {
  return (
    <div>
      <div className="category-btn">
        {categories.map((item) => (
          
          <button type="button" class="btn btn-outline-secondary">
            {item.title}
          </button>
        
        ))}
      </div>
    </div>
  );
}
