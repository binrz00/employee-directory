import React from "react";
import "./card.css";
export default class Card extends React.Component {
  state = {
    isLoaded: false,
    people: null
  };

  async componentDidMount() {
    const res = await fetch("https://randomuser.me/api/?results=10");
    const jsonres = await res.json();
    this.setState({
      isLoaded: true,
      people: jsonres
    });
  }

  render() {
    const { error, isLoaded, people } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="col-3">
          <div className="card">
            <img
              src={people.results[0].picture.thumbnail}
              className="card-img-top"
              alt="employee pic"
            />
            <div className="card-body">
              <p className="card-text">
                Name: {people.results[0].name.first}{" "}
                {people.results[0].name.last}
              </p>
              <p className="card-text">Age: {people.results[0].dob.age}</p>
              <p className="card-text">Phone: {people.results[0].phone}</p>
              <p className="card-text">Gender: {people.results[0].gender}</p>
            </div>
          </div>
        </div>
      );
    }
  }
}

  