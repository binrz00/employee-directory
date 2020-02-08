import React from "react";
export default function Input() {
  return (
    <div className="mt-2">
      <input id="input" placeholder="age gender or name" />
      <button value="sort">Sort</button>
      <button value="filter">Filter</button>
    </div>
  );
}
