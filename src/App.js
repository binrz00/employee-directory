import React, { useState, useEffect } from "react";
import Card from "./components/card";
import Input from "./components/input";
import filter from "./utils/filter";
import sort from "./utils/sort";
function App() {
  const [people, setPeople] = useState([]);
  const inputEl = document.getElementById("input");

  const getPeople = async function() {
    const res = await fetch("https://randomuser.me/api/?results=10");
    const jsonres = await res.json();

    setPeople(jsonres.results);
  };
  useEffect(() => {
    getPeople();
  }, []);

  function handleClick(event) {
    switch (event.target.value) {
      case "filter":
        filter(people, inputEl.value);
        break;
      case "sort":
        sort(people, inputEl.value);
        break;
      default:
        return;
    }
  }
  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [event,]);
  return (
    <div className="App">
      <div className="container">
        <Input />
        <div className="row">
          {people.map(card => (
            <Card {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
