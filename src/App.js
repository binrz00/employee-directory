import React, { useEffect, useReducer } from "react";
import Card from "./components/card";
import Input from "./components/input";
import filter from "./utils/filter";
import sort from "./utils/sort";
import reducer from "./utils/reducer";
const initialState = {
  people: []
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const paramEl = document.getElementById("parameter");
  const orderEl = document.getElementById("order");
  const limitEl = document.getElementById("limit");
  const ageEl = document.getElementById("age");

  const getPeople = async function() {
    const res = await fetch("https://randomuser.me/api/?results=10");
    const jsonres = await res.json();
    dispatch({
      type: "UPDATE_PEOPLE",
      payload: {
        people: jsonres.results
      }
    });
  };
  useEffect(() => {
    getPeople();
  }, []);
  function handleClick(event) {
    switch (event.target.value) {
      case "filter":
        filter(state.people, limitEl.value, ageEl.value, dispatch);
        break;
      case "sort":
        sort(state.people, paramEl.value, orderEl.value, dispatch);
        break;
      default:
        return;
    }
  }
  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, );
  return (
    <div className="App">
      <div className="container">
        <Input />
        <div className="row">
          {state.people.map(card => (
            <Card {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
