import React from "react";
import "./card.css";
import Data from "../api";
export default function Card() {
  return (
    <div className="col-3">
      <div className="card">
        <img
          src={Data.results[0].picture.thumbnail}
          className="card-img-top"
          alt="employee pic"
        />
        <div className="card-body">
          <p className="card-text">
            Name: {Data.results[0].name.first} {Data.results[0].name.last}
          </p>
          <p className="card-text">Age: {Data.results[0].dob.age}</p>
          <p className="card-text">Phone: {Data.results[0].phone}</p>
          <p className="card-text">Gender: {Data.results[0].gender}</p>
        </div>
      </div>
    </div>
  );
}

  