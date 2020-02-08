import React from "react";
import "./input.css";
export default function Input() {
  return (
    <div className="mt-2">
      <select id="parameter">
        <option value="age">age</option>
        <option value="name">name</option>
      </select>
      <select id="order">
        <option value="asc">ascending</option>
        <option value="desc">descending</option>
      </select>
      <button value="sort">Sort</button>
      <br />
      <select id="limit">
        <option value="under">under</option>
        <option value="over">over</option>
      </select>
      <input id="age" placeholder="age" />
      <button value="filter">Filter</button>
    </div>
  );
}
