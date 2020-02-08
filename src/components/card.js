import React from "react";
export default function Card(props) {
  return (
    <div className="col-3">
      <div className="card">
        <img
          src={props.picture.large}
          className="card-img-top"
          alt="employee pic"
        />
        <div className="card-body">
          <p className="card-text">
            Name: {props.name.first} {props.name.last}
          </p>
          <p className="card-text">Age: {props.dob.age}</p>
          <p className="card-text">Phone: {props.phone}</p>
          <p className="card-text">Gender: {props.gender}</p>
        </div>
      </div>
    </div>
  );
}
