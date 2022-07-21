import React from 'react'
import "./Category_btn.css"

export default function Category_btn() {
  return (
    <div>
      <div className='category-btn'>
      <button type="button" class="btn btn-outline-secondary" herf="/Category_cards/Category1/Category1.jsx#category1">Category1</button>
      <button type="button" class="btn btn-outline-secondary" herf="/Category_cards/Category2/Category1.jsx#category2">Category2</button>
      <button type="button" class="btn btn-outline-secondary">Category3</button>
      <button type="button" class="btn btn-outline-secondary">Category4</button>
      <button type="button" class="btn btn-outline-secondary">Category5</button>
      <button type="button" class="btn btn-outline-secondary">Category6</button>
      <button type="button" class="btn btn-outline-secondary">Category7</button>
      <button type="button" class="btn btn-outline-secondary">Category8</button>
      </div>
    </div>
  )
}
